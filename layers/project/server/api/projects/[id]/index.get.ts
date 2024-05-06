export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)
  const projectId = event.context.params!.id

  return event.context.prisma.project.findUniqueOrThrow({
    where: {
      id: projectId,
      team: {
        users: {
          some: {
            id: {
              equals: userId
            }
          }
        }
      }
    },
    include: {
      team: {
        select: {
          id: true
        }
      }
    }
  }).catch((err) => { throw createPrismaError(err) })
})
