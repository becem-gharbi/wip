export default defineEventHandler((event) => {
  checkAuth(event)

  const query = getQuery<{ projectId: string }>(event)

  // TODO: only owner can perform
  return event.context.prisma.issue.findMany({
    where: {
      projectId: query.projectId
    },
    orderBy: [
      { column: 'asc' },
      { updatedAt: 'desc' }
    ]
  })
})
