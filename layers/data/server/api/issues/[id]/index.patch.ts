import type { Issue } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const { userId } = checkAuth(event)
  const issueId = parseInt(event.context.params!.id)

  const body = await readBody<Partial<Issue>>(event)

  return event.context.prisma.issue.update({
    where: {
      id: issueId,
      project: {
        ownerId: userId
      }
    },
    data: {
      summary: body.summary,
      column: body.column,
      description: body.description,
      labels: body.labels
    }
  }).catch((err) => { throw createPrismaError(err) })
})
