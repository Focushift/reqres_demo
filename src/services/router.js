import { createRouter, createWebHashHistory } from 'vue-router'

const navigation = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const requireRoutes = require.context('../modules/', true, /\w+\/index\.js$/)
extractRoutes(requireRoutes)

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: navigation,
})

function extractRoutes(module) {
  module.keys().forEach((path) => {
    const { routes } = module(path)
    navigation.push(...routes)
  })
}

export default router
