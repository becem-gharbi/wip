export default defineEventHandler(async (event) => {
  checkAuth(event)

  const body = await readBody<{ projectId: string; column: string }>(event)

  // TODO: only owner can perform
  return event.context.prisma.issue.create({
    data: {
      projectId: body.projectId,
      summary: `Issue ${new Date().getTime()}`,
      column: parseInt(body.column)
    }
  })
})
