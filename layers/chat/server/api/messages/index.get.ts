import { z } from 'zod'

export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)

  const query = getQuery<{ teamId: string, userId: string }>(event)

  const schema = z.object({
    teamId: z.string().min(1),
    userId: z.string().min(1),
  })

  schema.parse(query)

  return event.context.prisma.message.findMany({
    where: {
      authorId: {
        in: [userId, query.userId],
      },
      teamId: query.teamId,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
  })
    .then(res => res.reverse())
    .catch((err) => { throw createPrismaError(err) })
})
