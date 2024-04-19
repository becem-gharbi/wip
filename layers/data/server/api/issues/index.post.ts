export default defineEventHandler(async (event) => {
  const { userId } = checkAuth(event)

  const body = await readBody<{ projectId: string; column: number }>(event)

  return event.context.prisma.issue.create({
    data: {
      summary: `Issue ${new Date().getTime()}`,
      column: body.column,
      project: {
        connect: {
          id: body.projectId,
          ownerId: userId
        }
      }
    }
  }).catch((err) => { throw createPrismaError(err) })
})
