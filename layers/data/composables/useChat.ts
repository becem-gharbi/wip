const f = () => $fetch('/api/messages/:id')
export type Message = Awaited<ReturnType<typeof f>>

export function useChat () {
  const _fetch = useNuxtApp().$auth.fetch

  const { findMany, create, remove, _useState } = useEntity<Message>('messages', _fetch)

  function pushMessage (message: Message) {
    _useState(message.id.toString(), () => message)
  }

  return { findMany, create, remove, pushMessage }
}
