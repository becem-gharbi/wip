export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)

  const query = getQuery<{ teamId: string; userId: string }>(event)

  return event.context.prisma.message.findMany({
    where: {
      authorId: {
        in: [userId, query.userId]
      },
      teamId: query.teamId
    },
    orderBy: {
      createdAt: 'asc'
    },
    take: 50
  }).catch((err) => { throw createPrismaError(err) })
})
