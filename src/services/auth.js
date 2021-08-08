
import { reactive } from 'vue'

export default function(backend, router) {
  const state = reactive({
    token: null,
    login,
    logout,
  })

  router.beforeEach((to, from, next) => {
    if (!state.token && to.name !== 'login') {
      next(false)
      return logout()
    }
    if (state.user && to.name === 'login') {
      return next('/')
    }
    return next()
  })

  async function login(user) {
    if (!user || !user.email || !user.password) throw new Error('Auth error!')
    return backend.login(user)
      .then(response => {
        state.token = response
        router.push('/')
      })
  }

  function logout() {
    state.token = null
    const route = router.history.current

    if (route.name === 'login') return
    router.push({ name: 'login' })
  }

  return state
}
