import type { H3Event } from 'h3'

export function checkAuth (event: H3Event) {
  if (!event.context.auth) {
    throw createError({ message: 'unauthorized', statusCode: 401 })
  }
  return event.context.auth
}

export function createPrismaError (_:any) {
  return createError({ statusCode: 400, message: 'something is wrong' })
}
