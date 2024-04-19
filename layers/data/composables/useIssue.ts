import type { Issue } from '@prisma/client'

export function useIssue () {
  const _fetch = useNuxtApp().$auth.fetch

  const { findMany, findUnique, create, update, remove } = useEntity<Issue>('issues', _fetch)

  async function isOwner (issue: Issue | Issue['id']) {
    if (typeof issue === 'number') {
      const _issue = await findUnique(issue)
      const project = await useProject().findUnique(_issue.value.projectId)
      return useAuthSession().user.value?.id === project.value.ownerId
    }
    const project = await useProject().findUnique(issue.projectId)
    return useAuthSession().user.value?.id === project.value.ownerId
  }

  return { findMany, findUnique, create, update, remove, isOwner }
}
