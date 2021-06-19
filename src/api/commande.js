import HTTP from '@/api/HTTP'

const URL_BASE = 'commande'

export async function Create (dataCommande) {
  const response = await HTTP.put(`${URL_BASE}/create`, dataCommande)
  return response
}
export async function GetAll () {
  const response = await HTTP.get(`${URL_BASE}/getAll`)
  return response
}
