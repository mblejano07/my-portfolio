import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PortfolioPage from '@/views/PortfolioPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'portfolio',
    component: PortfolioPage,
    meta: {
      title: 'Michael Lejano - Professional Portfolio',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    redirect: { path: '/' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// Update document title on route change
router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'Michael Lejano - Portfolio'
})

export default router
