import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { userId } = checkAuth(event)
  const teamId = event.context.params!.id

  const body = await readBody<{ email: string }>(event)

  const schema = z.object({
    email: z.string().email(),
  })

  schema.parse(body)

  return event.context.prisma.team.update({
    where: {
      id: teamId,
      project: {
        ownerId: userId,
      },
    },
    data: {
      users: {
        disconnect: {
          email: body.email,
        },
      },
    },
  }).catch((err) => { throw createPrismaError(err) })
})
