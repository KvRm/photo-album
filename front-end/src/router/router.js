import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainPaige'),
    // meta: {requiresAuth: true},
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('@/views/CreatePost'),
    // meta: {requiresAuth: true},
  },
  {
    path: '/authorization',
    name: 'login',
    component: () => import('@/views/LogIn'),
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