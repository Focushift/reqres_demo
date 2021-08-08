
import { reactive } from 'vue'

export default function(backend, router) {
  const state = reactive({
    token: null,
    login,
    logout,
  })

  router.beforeEach((to, from, next) => {
    if (!state.token && to.name !== 'Login') {
      next(false)
      return logout()
    }
    if (state.user && to.name === 'Login') {
      return next('/')
    }
    return next()
  })

  async function login(user) {
    if (!user || !user.email || !user.password) throw new Error('Auth error!')
    return backend.login(user)
      .then(response => {
        state.token = response.token
        router.push('/')
      })
  }

  function logout() {
    state.token = null
    const route = router?.history?.current

    if (route && route.name === 'Login') return
    router.push({ name: 'Login' })
  }

  return state
}
