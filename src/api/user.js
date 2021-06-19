import HTTP from '@/api/HTTP'

const URL_BASE = 'user'

export async function Auth (dataUser) {
  const response = await HTTP.put(`${URL_BASE}/createOrGet`, dataUser)
  return response
}
