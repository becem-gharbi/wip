const f = () => $fetch('/api/issues/:id')
export type Issue = Awaited<ReturnType<typeof f>>

export function useIssue() {
  const _fetch = useNuxtApp().$auth.fetch

  const { findMany, findUnique, create, update, remove } = useEntity<Issue>('issues', _fetch)

  async function isOwner(issue: Issue | Issue['id']) {
    if (typeof issue === 'number') {
      const _issue = await findUnique(issue)
      return useProject().isOwner(_issue.value.projectId)
    }
    return useProject().isOwner(issue.projectId)
  }

  return { findMany, findUnique, create, update, remove, isOwner }
}
