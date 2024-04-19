import type { Project, Team } from '@prisma/client'

export interface ProjectExtended extends Project {
  team: {
    id: Team['id']
  }
}

export function useProject () {
  const _fetch = useNuxtApp().$auth.fetch

  const { findMany, findUnique, create, update, remove } = useEntity<ProjectExtended>('projects', _fetch)

  async function isOwner (project: ProjectExtended | ProjectExtended['id']) {
    if (typeof project === 'string') {
      const _project = await findUnique(project)
      return useAuthSession().user.value?.id === _project.value.ownerId
    }
    return useAuthSession().user.value?.id === project.ownerId
  }

  return { findMany, findUnique, create, update, remove, isOwner }
}
