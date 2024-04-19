export default defineEventHandler((event) => {
  checkAuth(event)
  const projectId = event.context.params!.id

  // TODO: limit to team members
  return event.context.prisma.project.findUniqueOrThrow({
    where: {
      id: projectId
    },
    include: {
      team: {
        select: {
          id: true
        }
      }
    }
  })
})
