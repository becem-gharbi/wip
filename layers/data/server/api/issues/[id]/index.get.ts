export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)
  const issueId = parseInt(event.context.params!.id)

  return event.context.prisma.issue.findUniqueOrThrow({
    where: {
      id: issueId,
      project: {
        team: {
          users: {
            some: {
              id: {
                equals: userId
              }
            }
          }
        }
      }
    }
  }).catch((err) => { throw createPrismaError(err) })
})
