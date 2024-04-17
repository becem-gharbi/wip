export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)

  return event.context.prisma.project.findMany({
    where: {
      ownerId: userId
    },
    orderBy: {
      updatedAt: 'desc'
    }
  })
})
