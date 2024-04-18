export default defineEventHandler((event) => {
  checkAuth(event)
  const issueId = event.context.params!.id

  // TODO: only team members can perform
  return event.context.prisma.issue.findUniqueOrThrow({
    where: {
      id: parseInt(issueId)
    }
  })
})
