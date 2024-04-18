// @ts-nocheck
import { defu } from 'defu'

/**
 * A smart fetch composable for CRUD operations with state management
 * @param entityKey should be a root directory name on `/server/api`
 * @param _fetch ofetch instance, defaults to `$fetch`
 * @returns `findMany` Find many entities on [GET] /api/_entityKey_, returns non-reactive array of entities
 * @returns `findUnique` Find an entity by `id` on [GET] /api/_entityKey_/:id, returns reactive entity
 * @returns `create` Create a new entity on [POST] /api/_entityKey_, returns non-reactive entity
 * @returns `remove` Remove an entity by `id` on [DELETE] /api/_entityKey_/:id, returns void
 * @returns `update` Update an entity by `id` on [PATCH] /api/_entityKey_/:id, returns void
 */
export function useEntity (entityKey: string, _fetch = $fetch) {
  const f = () => $fetch(`/api/${entityKey}/:id`)
  type EntityType = Awaited<ReturnType<typeof f>>;

  const _useState = (id: string, init?: any) =>
    useState<EntityType>(`${entityKey}-${id}`, init)

  async function findMany () {
    await callOnce(entityKey, async () => {
      const entities = await _fetch(`/api/${entityKey}`)
      entities.forEach(entity => _useState(entity.id, () => entity))
    })
    return Object.keys(useNuxtApp().payload.state)
      .filter(k => k.startsWith(`$s${entityKey}-`))
      .map<EntityType>(k => useNuxtApp().payload.state[k])
  }

  async function create () {
    const entity = await _fetch(`/api/${entityKey}`, {
      method: 'post'
    })
    return _useState(entity.id, () => entity).value
  }

  async function remove (id: string) {
    await _fetch(`/api/${entityKey}/${id}`, {
      method: 'delete'
    })
    clearNuxtState(`${entityKey}-${id}`)
    delete useNuxtApp().payload.state[`$s${entityKey}-${id}`]
  }

  async function update (id: string, data: Partial<EntityType>) {
    await _fetch(`/api/${entityKey}/${id}`, {
      method: 'patch',
      body: data
    })
    _useState(id).value = defu({}, data, _useState(id).value)
  }

  async function findUnique (id: string) {
    await callOnce(`${entityKey}-${id}`, async () => {
      const entity = await _fetch(`/api/${entityKey}/${id}`)
      _useState(id).value = entity
    })
    return _useState(id)
  }

  return { findMany, create, findUnique, remove, update }
}
