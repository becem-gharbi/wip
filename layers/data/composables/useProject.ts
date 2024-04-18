export function useProject () {
  const _fetch = useNuxtApp().$auth.fetch

  const { create, findMany, findUnique, remove, update } = useEntity('projects', _fetch)

  return { create, findMany, findUnique, remove, update }
}
