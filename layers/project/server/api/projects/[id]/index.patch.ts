import type { Project } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const { userId } = checkAuth(event)
  const projectId = event.context.params!.id

  const body = await readBody<Partial<Project>>(event)

  return event.context.prisma.project.update({
    where: {
      id: projectId,
      ownerId: userId,
    },
    data: {
      name: body.name,
      icon: body.icon,
      description: body.description,
    },
  }).catch((err) => { throw createPrismaError(err) })
})
