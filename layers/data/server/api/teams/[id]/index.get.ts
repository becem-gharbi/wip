export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)
  const teamId = event.context.params!.id

  return event.context.prisma.team.findUniqueOrThrow({
    where: {
      id: teamId,
      users: {
        some: {
          id: {
            equals: userId
          }
        }
      }
    },
    include: {
      users: {
        select: {
          id: true,
          name: true,
          email: true,
          picture: true
        }
      }
    }
  })
})
