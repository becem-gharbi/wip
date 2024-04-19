export default defineEventHandler((event) => {
  checkAuth(event)
  const teamId = event.context.params!.id

  // TODO: limit to team members
  return event.context.prisma.team.findUniqueOrThrow({
    where: {
      id: teamId
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
