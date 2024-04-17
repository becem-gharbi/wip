export default defineEventHandler((event) => {
  const { userId } = checkAuth(event)

  return event.context.prisma.project.create({
    data: {
      name: `Project ${new Date().getTime()}`,
      ownerId: userId
    }
  })
})
