import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { userId } = checkAuth(event)

  const body = await readBody<{ name: string }>(event)

  const schema = z.object({
    name: z.string().min(1),
  })

  schema.parse(body)

  const user = await event.context.prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: body.name,
    },
  })

  return user
})
