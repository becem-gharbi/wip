const f = () => $fetch('/api/projects/:id')
export type Project = Awaited<ReturnType<typeof f>>

export function useProject () {
  const _fetch = useNuxtApp().$auth.fetch

  const { findMany, findUnique, create, update, remove } = useEntity<Project>('projects', _fetch)

  async function isOwner (project: Project | Project['id']) {
    if (typeof project === 'string') {
      const _project = await findUnique(project)
      return useAuthSession().user.value?.id === _project.value.ownerId
    }
    return useAuthSession().user.value?.id === project.ownerId
  }

  return { findMany, findUnique, create, update, remove, isOwner }
}
