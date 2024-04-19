export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)

  return event.context.prisma.project.findMany({
    where: {
      team: {
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
      updatedAt: 'desc'
    }
  })
})
