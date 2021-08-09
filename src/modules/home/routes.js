import MainPage from './components/MainPage.vue'
import MainHomePage from './components/MainHomePage.vue'
import MainUsersPage from './components/MainUsersPage.vue'

export default [
  {
    path: '/',
    name: 'Main',
    component: MainPage,
    redirect: { name: 'Home' },
    children: [
      {
        name: 'Home',
        path: '/home',
        component: MainHomePage,
      },
      {
        name: 'Users',
        path: '/users',
        component: MainUsersPage,
      }
    ]
  },
]
