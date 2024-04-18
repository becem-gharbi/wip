export default defineEventHandler(async (event) => {
  checkAuth(event)
  const issueId = event.context.params!.id

  const body = await readBody<{ summary?: string }>(event)

  // TODO: only owner can perform
  return event.context.prisma.issue.update({
    where: {
      id: parseInt(issueId)
    },
    data: {
      summary: body.summary
    }
  })
})
