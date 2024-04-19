// @ts-nocheck
import { defu } from 'defu'

/**
 * A smart fetch composable for CRUD operations with state management
 * @param entityKey should be a root directory name on `/server/api`
 * @param _fetch ofetch instance, defaults to `$fetch`
 * @returns `findMany` Find all entities on [GET] /api/_entityKey_, returns reactive array of entities
 * @returns `findUnique` Find an entity by `id` on [GET] /api/_entityKey_/:id, returns reactive entity
 * @returns `create` Create a new entity on [POST] /api/_entityKey_, returns non-reactive entity
 * @returns `remove` Remove an entity by `id` on [DELETE] /api/_entityKey_/:id, returns void
 * @returns `update` Update an entity by `id` on [PATCH] /api/_entityKey_/:id, returns void
 */
export function useEntity<EntityType> (entityKey: string, _fetch = $fetch) {
  const _useState = (id: string, init?: () => EntityType) =>
    useState<EntityType>(`${entityKey}-${id}`, init)

  const _entities = computed(() => Object.keys(useNuxtApp().payload.state)
    .filter(k => k.startsWith(`$s${entityKey}-`))
    .map(k => useState<EntityType>(k.replace('$s', '')).value)
  )

  async function findMany (query?: object) {
    await callOnce(`${entityKey}-${JSON.stringify(query)}`, async () => {
      const entities = await _fetch(`/api/${entityKey}`, { query })
      entities.forEach(entity => _useState(entity.id, () => entity))
    })

    return _entities
  }

  async function create (data?: Partial<EntityType>, query?: object) {
    const entity = await _fetch(`/api/${entityKey}`, {
      method: 'post',
      body: data,
      query
    })
    return _useState(entity.id, () => entity).value
  }

  async function remove (id: EntityType['id'], query?: object) {
    await _fetch(`/api/${entityKey}/${id}`, {
      method: 'delete',
      query
    })
    clearNuxtState(`${entityKey}-${id}`)
    delete useNuxtApp().payload.state[`$s${entityKey}-${id}`]
  }

  async function update (id: EntityType['id'], data: Partial<EntityType>, query?: object) {
    await _fetch(`/api/${entityKey}/${id}`, {
      method: 'patch',
      body: data,
      query
    })
    _useState(id).value = defu({}, data, _useState(id).value)
  }

  async function findUnique (id: EntityType['id'], query?: object) {
    await callOnce(`${entityKey}-${id}`, async () => {
      const entity = await _fetch(`/api/${entityKey}/${id}`, { query })
      _useState(id).value = entity
    })
    return _useState(id)
  }

  return { findMany, create, findUnique, remove, update, _useState }
}
