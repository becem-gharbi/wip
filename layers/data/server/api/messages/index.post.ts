export default defineEventHandler(async (event) => {
  const { userId } = checkAuth(event)

  const body = await readBody<Message>(event)

  return event.context.prisma.message.create({
    data: {
      content: body.content,
      authorId: userId,
      teamId: body.teamId

    }
  }).catch((err) => { throw createPrismaError(err) })
})
