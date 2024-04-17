export default defineEventHandler(async (event) => {
  checkAuth(event)
  const projectId = event.context.params!.id

  const body = await readBody<{ name?: string }>(event)

  // TODO: only owner can update
  return event.context.prisma.project.update({
    where: {
      id: projectId
    },
    data: {
      name: body.name
    }
  })
})
