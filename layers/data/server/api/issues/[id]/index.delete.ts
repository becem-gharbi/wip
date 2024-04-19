export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)
  const issueId = parseInt(event.context.params!.id)

  return event.context.prisma.issue.delete({
    where: {
      id: issueId,
      project: {
        ownerId: userId
      }
    }
  })
})
