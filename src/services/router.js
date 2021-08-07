import { createRouter, createWebHistory } from 'vue-router'

const navigation = []

const requireRoutes = require.context('../modules/', true, /\w+\/index\.js$/)
extractRoutes(requireRoutes)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: navigation,
})

function extractRoutes(module) {
  module.keys().forEach((path) => {
    const { routes } = module(path)
    navigation.push(...routes)
  })
}

export default router
