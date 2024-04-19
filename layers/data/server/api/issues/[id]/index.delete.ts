export default defineEventHandler((event) => {
  checkAuth(event)
  const issueId = parseInt(event.context.params!.id)

  // TODO: only owner can perform
  return event.context.prisma.issue.delete({
    where: {
      id: issueId
    }
  })
})
