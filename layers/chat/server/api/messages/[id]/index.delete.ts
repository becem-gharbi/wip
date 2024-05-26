export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)
  const messageId = parseInt(event.context.params!.id)

  return event.context.prisma.message.delete({
    where: {
      id: messageId,
      authorId: userId,
    },
  }).catch((err) => { throw createPrismaError(err) })
})
