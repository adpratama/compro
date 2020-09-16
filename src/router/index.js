import Vue from 'vue'
import VueRouter from 'vue-router'
import '../assets/css/style.css'
import Home from '../views/Home.vue'

import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/icofont/icofont.min.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/venobox/venobox.css'
// import '../assets/vendor/owl.carousel/assets/owl.carousel.min.css'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/Success.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    // props: true,
    component: () => import('../views/Details.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
