import { z } from 'zod'

export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)

  const query = getQuery<{ projectId: string }>(event)

  const schema = z.object({
    projectId: z.string().min(1)
  })

  schema.parse(query)

  return event.context.prisma.issue.findMany({
    where: {
      project: {
        id: query.projectId,
        team: {
          users: {
            some: {
              id: {
                equals: userId
              }
            }
          }
        }
      }
    },
    orderBy: [
      { column: 'asc' },
      { updatedAt: 'desc' }
    ]
  }).catch((err) => { throw createPrismaError(err) })
})
