const f = () => $fetch('/api/messages/:id')
export type Message = Awaited<ReturnType<typeof f>>

export function useChat () {
  const _fetch = useNuxtApp().$auth.fetch

  const { findMany, create, remove } = useEntity<Message>('messages', _fetch)

  return { findMany, create, remove }
}
