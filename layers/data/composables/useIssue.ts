import type { Issue } from '@prisma/client'

export function useIssue () {
  const _fetch = useNuxtApp().$auth.fetch

  return useEntity<Issue>('issues', _fetch)
}
