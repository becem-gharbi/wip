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
        disconnect: {
          email: body.email
        }
      }
    }
  })
})
