import type { Team, User } from '@prisma/client'

interface TeamExtended extends Team {
  users: Partial<User>[]
}

export function useTeam () {
  const _fetch = useNuxtApp().$auth.fetch

  const { _useState, findUnique } = useEntity<TeamExtended>('teams', _fetch)

  async function addUser (id: Team['id'], data: { email: User['email'] }) {
    const userIndex = _useState(id).value.users.findIndex(u => u.email === data.email)

    if (userIndex >= 0) { return }

    const res = await _fetch(`/api/teams/${id}/users`, {
      method: 'post',
      body: data
    })

    if (res.users.length) {
      _useState(id).value.users.push(res.users[0])
    }
  }

  async function removeUser (id: Team['id'], data: { email: User['email'] }) {
    const userIndex = _useState(id).value.users.findIndex(u => u.email === data.email)

    if (userIndex < 0) { return }

    await _fetch(`/api/teams/${id}/users`, {
      method: 'delete',
      body: data
    })

    _useState(id).value.users.splice(userIndex, 1)
  }

  async function isOwner (team: TeamExtended | TeamExtended['id']) {
    if (typeof team === 'string') {
      const _team = await findUnique(team)
      const project = await useProject().findUnique(_team.value.projectId)
      return useAuthSession().user.value?.id === project.value.ownerId
    }
    const project = await useProject().findUnique(team.projectId)
    return useAuthSession().user.value?.id === project.value.ownerId
  }

  return { findUnique, addUser, removeUser, isOwner }
}
