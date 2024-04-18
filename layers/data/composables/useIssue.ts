import type { Issue } from '@prisma/client'

export function useIssue () {
  const _fetch = useNuxtApp().$auth.fetch

  const issueStatus: Array<{ title: string, icon: string }> = [
    { title: 'Backlog', icon: 'ph:lightbulb' },
    { title: 'Todo', icon: 'ph:fire' },
    { title: 'In progress', icon: 'ph:activity' },
    { title: 'Done', icon: 'ph:check' }
  ]

  return { issueStatus, ...useEntity<Issue>('issues', _fetch) }
}
