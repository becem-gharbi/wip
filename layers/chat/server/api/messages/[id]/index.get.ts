export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)
  const messageId = parseInt(event.context.params!.id)

  return event.context.prisma.message.findUniqueOrThrow({
    where: {
      id: messageId,
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
  }).catch((err) => { throw createPrismaError(err) })
})
