export default function(request, constants) {
  let token = null
  const { apiUrl } = constants

  function login(user) {
    if (!user || !user.email || !user.password) throw new Error('Incorrect user data!')
    const options = {
      method: 'POST',
      body: user,
    }
    return request(`${apiUrl}/login`, options)
  }

  return {
    setToken: newToken => token = newToken,
    login,
  }
}