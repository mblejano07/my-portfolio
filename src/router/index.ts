import { createRouter, createWebHistory } from 'vue-router'
import { vueApp } from '@/app.ts'
import Home from '@/views/HomeView.vue'

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('@/views/misc/404View.vue'),
    meta: {
      label: 'Page not found',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

vueApp.use(router)
