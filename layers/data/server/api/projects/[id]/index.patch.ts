import type { Project } from '@prisma/client'

export default defineEventHandler(async (event) => {
  checkAuth(event)
  const projectId = event.context.params!.id

  const body = await readBody<Partial<Project>>(event)

  // TODO: only owner can perform
  return event.context.prisma.project.update({
    where: {
      id: projectId
    },
    data: {
      name: body.name,
      icon: body.icon,
      description: body.description
    }
  })
})
