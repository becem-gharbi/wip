export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)
  const projectId = event.context.params!.id

  return event.context.prisma.project.delete({
    where: {
      id: projectId,
      ownerId: userId
    }
  })
})
