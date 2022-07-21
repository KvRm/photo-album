import { createRouter, createWebHistory } from 'vue-router'
// import auth from '../lib/auth'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainPaige'),
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('@/views/CreatePost'),
  },
  {
    path: '/log-in',
    name: 'login',
    component: () => import('@/views/LogIn'),
  },
  {
    path: '/sign-up',
    name: 'register',
    component: () => import('@/views/RegisterPaige'),
  },
  {
    path: '/me',
    name: 'profile',
    component: () => import('@/views/ProfilePaige')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (auth.getCookie()) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router