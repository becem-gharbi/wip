import type { Project, Team } from '@prisma/client'

interface ProjectExtend extends Project {
  team: {
    id: Team['id']
  }
}

export function useProject () {
  const _fetch = useNuxtApp().$auth.fetch

  return useEntity<ProjectExtend>('projects', _fetch)
}
