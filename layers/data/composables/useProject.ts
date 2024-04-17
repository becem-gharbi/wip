export function useProject () {
  const _fetch = useNuxtApp().$auth.fetch

  function findMany () {
    return _fetch('/api/projects')
  }

  function create () {
    return _fetch('/api/projects', {
      method: 'post'
    })
  }

  function findUnique (id: string) {
    return _fetch(`/api/projects/${id}`)
  }

  function remove (id:string) {
    return _fetch(`/api/projects/${id}`, {
      method: 'delete'
    })
  }

  function update (id:string, name?: string) {
    return _fetch(`/api/projects/${id}`, {
      method: 'patch',
      body: {
        name
      }
    })
  }

  return { findMany, create, findUnique, remove, update }
}
