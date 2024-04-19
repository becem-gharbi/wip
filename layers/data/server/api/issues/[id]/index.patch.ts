import type { Issue } from '@prisma/client'

export default defineEventHandler(async (event) => {
  checkAuth(event)
  const issueId = parseInt(event.context.params!.id)

  const body = await readBody<Partial<Issue>>(event)

  // TODO: only owner can perform
  return event.context.prisma.issue.update({
    where: {
      id: issueId
    },
    data: {
      summary: body.summary,
      column: body.column,
      description: body.description,
      labels: body.labels
    }
  })
})
