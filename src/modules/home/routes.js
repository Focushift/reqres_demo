import HomePage from './components/HomePage.vue'
import HomeMainPage from './components/HomeMainPage.vue'
import HomeUsersPage from './components/HomeUsersPage.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    redirect: { name: 'Main' },
    children: [
      {
        name: 'Main',
        path: '',
        component: HomeMainPage,
      },
      {
        name: 'Users',
        path: '/users',
        component: HomeUsersPage,
      }
    ]
  },
]
