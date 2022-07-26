import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}



async function create(affirmation, id) {
  const res = await fetch(`${BASE_URL}/${id}/affirmations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(affirmation)
  })
  return res.json()
}


async function show(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}



async function deleteOne(affirmationId) {
  console.log(affirmationId)
  const pathTest = `${BASE_URL}/userActivity/${affirmationId}`
  console.log(pathTest)
  const res = await fetch(pathTest, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  console.log(res)
  return res.json()
}


export { getAllProfiles, create, show, deleteOne }
