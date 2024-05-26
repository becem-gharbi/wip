const f = () => $fetch('/api/teams/:id')
export type Team = Awaited<ReturnType<typeof f>>

export function useTeam() {
  const _fetch = useNuxtApp().$auth.fetch

  const { useItem, findUnique } = useEntity<Team>('teams', _fetch)

  async function addUser(id: Team['id'], data: { email: string }) {
    const userIndex = useItem(id).value.users.findIndex(u => u.email === data.email)

    if (userIndex >= 0) {
      return
    }

    const res = await _fetch(`/api/teams/${id}/users`, {
      method: 'post',
      body: data,
    }).catch(() => ({ users: [] }))

    if (res.users.length) {
      useItem(id).value.users.push(res.users[0])
    }
  }

  async function removeUser(id: Team['id'], data: { email: string }) {
    const userIndex = useItem(id).value.users.findIndex((u) => {
      u.email === data.email
    })

    if (userIndex < 0) {
      return
    }

    await _fetch(`/api/teams/${id}/users`, {
      method: 'delete',
      body: data,
    })

    useItem(id).value.users.splice(userIndex, 1)
  }

  async function isOwner(team: Team | Team['id']) {
    if (typeof team === 'string') {
      const _team = await findUnique(team)
      return useProject().isOwner(_team.value.projectId)
    }
    return useProject().isOwner(team.projectId)
  }

  return { findUnique, addUser, removeUser, isOwner }
}
