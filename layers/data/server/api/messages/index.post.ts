import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { userId } = checkAuth(event)

  const body = await readBody<Message>(event)

  const schema = z.object({
    teamId: z.string().min(1),
    content: z.string().min(1)
  })

  schema.parse(body)

  return event.context.prisma.message.create({
    data: {
      content: body.content,
      authorId: userId,
      teamId: body.teamId
    }
  }).catch((err) => { throw createPrismaError(err) })
})
