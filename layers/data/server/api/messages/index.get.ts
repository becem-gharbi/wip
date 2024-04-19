export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)

  const query = getQuery<{ teamId: string }>(event)

  return event.context.prisma.message.findMany({
    where: {
      team: {
        id: query.teamId,
        users: {
          some: {
            id: {
              equals: userId
            }
          }
        }
      }
    },
    orderBy: {
      createdAt: 'asc'
    },
    take: 50
  }).catch((err) => { throw createPrismaError(err) })
})
