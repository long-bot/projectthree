import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/NotFound'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    name: 'login',
    path: '/login',
    component: login
  },
  {
    name: 'home',
    path: '/',
    component: Home,
    children: [{
      name: 'welcome',
      path: '/',
      component: Welcome
    }]
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound
  }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.path === '/login') {
    return next()
  }
  if (sessionStorage.getItem('token')) {
    return next()
  }
  next('/login')
})

export default router
