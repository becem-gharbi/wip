export default defineEventHandler(async (event) => {
  checkAuth(event)
  const issueId = event.context.params!.id

  const body = await readBody<{
    summary?: string;
    column?: number;
    description?: string;
    labels?: string;
  }>(event)

  // TODO: only owner can perform
  return event.context.prisma.issue.update({
    where: {
      id: parseInt(issueId)
    },
    data: {
      summary: body.summary,
      column: body.column,
      description: body.description,
      labels: body.labels
    }
  })
})