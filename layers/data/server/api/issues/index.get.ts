export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)

  const query = getQuery<{ projectId: string }>(event)

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
