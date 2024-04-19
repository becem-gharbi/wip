export default defineEventHandler(async (event) => {
  checkAuth(event)
  const teamId = event.context.params!.id

  const body = await readBody<{ email: string; }>(event)

  // TODO: limit to owner
  return event.context.prisma.team.update({
    where: {
      id: teamId
    },
    data: {
      users: {
        connect: {
          email: body.email
        }
      }
    },
    select: {
      users: {
        select: {
          email: true,
          id: true,
          picture: true,
          name: true
        },
        where: {
          email: body.email
        }
      }
    }
  }).catch(() => ({ users: [] }))
})
