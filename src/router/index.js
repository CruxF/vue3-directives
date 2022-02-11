import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Position from '../views/Position.vue'
import Copy from '../views/Copy.vue'
import Debounce from '../views/Debounce.vue'
import Permission from '../views/Permission.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/position',
    name: 'Position',
    component: Position
  },
  {
    path: '/copy',
    name: 'Copy',
    component: Copy
  },
  {
    path: '/debounce',
    name: 'Debounce',
    component: Debounce
  },
  {
    path: '/permission',
    name: 'Permission',
    component: Permission
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
