export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)

  return event.context.prisma.project.findMany({
    where: {
      team: {
        users: {
          every: {
            id: userId
          }
        }
      }
    },
    orderBy: {
      updatedAt: 'desc'
    }
  })
})
