export default defineEventHandler(async (event) => {
  checkAuth(event)

  const body = await readBody<{ projectId: string; column: number }>(event)

  // TODO: only owner can perform
  return event.context.prisma.issue.create({
    data: {
      summary: `Issue ${new Date().getTime()}`,
      projectId: body.projectId,
      column: body.column
    }
  })
})
