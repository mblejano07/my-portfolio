import { createRouter, createWebHistory, RouteMeta } from 'vue-router'
import { vueApp } from '@/app.ts'
import Dashboard from '@/views/DashboardPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import SupportPage from '@/views/SupportPage.vue'
import AboutUsPage from '@/views/AboutUsPage.vue'
import AnnouncementsPage from '@/views/AnnouncementsPage.vue'

const routes = [
  {
    path: '',
    name: 'dashboard',
    component: Dashboard,
    meta: <RouteMeta>{
      group: RouteGroup.HOME,
      label: 'Dashboard',
      isSidebarMenu: true,
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    meta: <RouteMeta>{
      group: RouteGroup.HOME,
      label: 'Profile',
      isSidebarMenu: true,
    },
  },
  {
    path: '/announcements',
    name: 'announcements',
    component: AnnouncementsPage,
    meta: <RouteMeta>{
      group: RouteGroup.HOME,
      label: 'Announcements',
      isSidebarMenu: true,
    },
  },
  {
    path: '/support',
    name: 'support',
    component: SupportPage,
    meta: <RouteMeta>{
      group: RouteGroup.MISC,
      label: 'Support',
      isSidebarMenu: true,
    },
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsPage,
    meta: <RouteMeta>{
      group: RouteGroup.MISC,
      label: 'About Us',
      isSidebarMenu: true,
    },
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'login' },
    meta: <RouteMeta>{
      group: RouteGroup.AUTH,
    },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/AuthPage.vue'),
        meta: <RouteMeta>{
          label: 'Login',
          hideNavigation: true,
        },
      },
      {
        path: 'sign-up',
        name: 'sign-up',
        component: () => import('@/views/AuthPage.vue'),
        meta: <RouteMeta>{
          label: 'Sign Up',
          hideNavigation: true,
        },
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin-tools',
    redirect: { name: 'user-management' },
    meta: <RouteMeta>{
      group: RouteGroup.ADMIN_TOOLS,
      label: 'Admin Tools',
      isSidebarMenu: true,
    },
    children: [
      {
        path: 'user-management',
        name: 'user-management',
        component: () => import('@/views/UsersPage.vue'),
        meta: <RouteMeta>{
          label: 'User Management',
          isSidebarMenu: true,
        },
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/SettingsPage.vue'),
        meta: <RouteMeta>{
          label: 'Settings',
          isSidebarMenu: true,
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('@/views/misc/404Page.vue'),
    meta: <RouteMeta>{
      label: 'Page not found',
      isSidebarMenu: false,
      hideNavigation: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

/** Typings */
export const enum RouteGroup {
  HOME = 'Home',
  ADMIN_TOOLS = 'Admin Tools',
  MISC = 'Misc',
  AUTH = 'Auth',
}

/**
 * Extending vue-router type
 * @see https://router.vuejs.org/guide/advanced/meta.html#TypeScript
 */
declare module 'vue-router' {
  interface RouteMeta {
    group?: RouteGroup
    label: string
    isSidebarMenu?: boolean
    hideNavigation?: boolean
  }
}

vueApp.use(router)
