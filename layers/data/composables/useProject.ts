import type { Project, Team } from '@prisma/client'

interface ProjectExtended extends Project {
  team: {
    id: Team['id']
  }
}

export function useProject () {
  const _fetch = useNuxtApp().$auth.fetch

  return useEntity<ProjectExtended>('projects', _fetch)
}
