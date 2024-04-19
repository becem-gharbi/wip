import type { Team, User } from '@prisma/client'

interface TeamExtended extends Team {
  users: User[]
}
export function useTeam () {
  const _fetch = useNuxtApp().$auth.fetch

  return useEntity<TeamExtended>('teams', _fetch)
}
