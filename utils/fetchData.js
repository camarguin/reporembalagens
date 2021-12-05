const baseUrl = process.env.NEXTAUTH_URL

export const getData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  })

  const data = await res.json()
  return data
}