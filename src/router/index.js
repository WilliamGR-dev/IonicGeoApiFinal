import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/Communes'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/Home'
      },
      {
        path: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'Communes',
        component: () => import('@/views/Communes.vue')
      },
      {
        path: 'Departements',
        component: () => import('@/views/Departements.vue')
      },
      {
        path: 'Regions',
        component: () => import('@/views/Regions.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
