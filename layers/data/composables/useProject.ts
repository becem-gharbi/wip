import type { Project } from '@prisma/client'

export function useProject () {
  const _fetch = useNuxtApp().$auth.fetch

  return useEntity<Project>('projects', _fetch)
}
