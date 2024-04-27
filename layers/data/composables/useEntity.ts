// @ts-nocheck
import { defu } from 'defu'

/**
 * A smart fetch composable for CRUD operations with state management
 * @param entityKey should be a root directory name on `/server/api`
 * @param _fetch ofetch instance, defaults to `$fetch`
 * @returns `useItem` Access to a reactive item
 * @returns `findMany` Find all items on [GET] /api/_entityKey_, returns reactive array of items
 * @returns `findUnique` Find an item by `id` on [GET] /api/_entityKey_/:id, returns reactive item
 * @returns `create` Create a new item on [POST] /api/_entityKey_, returns non-reactive item
 * @returns `remove` Remove an item by `id` on [DELETE] /api/_entityKey_/:id, returns void
 * @returns `update` Update an item by `id` on [PATCH] /api/_entityKey_/:id, returns void
 */
export function useEntity<EntityType> (entityKey: string, _fetch = $fetch) {
  const useItem = (id: string, init?: () => EntityType) =>
    useState<EntityType>(`${entityKey}-${id}`, init)

  const _entities = computed(() => Object.keys(useNuxtApp().payload.state)
    .filter(k => k.startsWith(`$s${entityKey}-`))
    .map(k => useState<EntityType>(k.replace('$s', '')).value)
  )

  async function findMany (opts?: {refetch? :boolean, query?: object}) {
    let fetched = false

    const fetchIt = async () => {
      const entities = await _fetch(`/api/${entityKey}`, { query: opts?.query })
      entities.forEach(entity => useItem(entity.id, () => entity))
      fetched = true
    }

    const suffix = typeof opts?.query === 'object' ? '-' + JSON.stringify(opts.query) : ''

    await callOnce(entityKey + suffix, fetchIt)

    if (opts?.refetch && !fetched) {
      await fetchIt()
    }

    return _entities
  }

  async function findUnique (id: EntityType['id']) {
    await callOnce(`${entityKey}-${id}`, async () => {
      const entity = await _fetch(`/api/${entityKey}/${id}`)
      useItem(id).value = entity
    })
    return useItem(id)
  }

  async function create (data?: Partial<EntityType>) {
    const entity = await _fetch(`/api/${entityKey}`, {
      method: 'post',
      body: data
    })
    return useItem(entity.id, () => entity).value
  }

  async function remove (id: EntityType['id']) {
    await _fetch(`/api/${entityKey}/${id}`, {
      method: 'delete'
    })
    clearNuxtState(`${entityKey}-${id}`)
    delete useNuxtApp().payload.state[`$s${entityKey}-${id}`]
  }

  async function update (id: EntityType['id'], data: Partial<EntityType>) {
    await _fetch(`/api/${entityKey}/${id}`, {
      method: 'patch',
      body: data
    })
    useItem(id).value = defu({}, data, useItem(id).value)
  }

  return { findMany, create, findUnique, remove, update, useItem }
}
