import { createRouter, createWebHistory, RouteMeta } from 'vue-router'
import { vueApp } from '@/app.ts'
import Dashboard from '@/views/DashboardPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import SupportPage from '@/views/SupportPage.vue'
import AboutUsPage from '@/views/AboutUsPage.vue'
import AnnouncementsPage from '@/views/AnnouncementsPage.vue'
import { AuthType, UserRole } from '@/typings/enums.ts'

const routes = [
  {
    path: '',
    name: 'dashboard',
    component: Dashboard,
    meta: <RouteMeta>{
      group: RouteGroup.HOME,
      label: 'Dashboard',
      isSidebarMenu: true,
      authType: AuthType.AUTHENTICATED,
      roles: [UserRole.STANDARD_USER, UserRole.ADMIN, UserRole.SYSTEM_SUPPORT, UserRole.SUPER_USER],
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
      authType: AuthType.AUTHENTICATED,
      roles: [UserRole.STANDARD_USER, UserRole.ADMIN, UserRole.SYSTEM_SUPPORT, UserRole.SUPER_USER],
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
      authType: AuthType.AUTHENTICATED,
      roles: [UserRole.STANDARD_USER, UserRole.ADMIN, UserRole.SYSTEM_SUPPORT, UserRole.SUPER_USER],
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
      authType: AuthType.AUTHENTICATED,
      roles: [UserRole.STANDARD_USER, UserRole.ADMIN, UserRole.SYSTEM_SUPPORT, UserRole.SUPER_USER],
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
      authType: AuthType.AUTHENTICATED,
      roles: [UserRole.STANDARD_USER, UserRole.ADMIN, UserRole.SYSTEM_SUPPORT, UserRole.SUPER_USER],
    },
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'login' },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/AuthPage.vue'),
        meta: <RouteMeta>{
          label: 'Login',
          hideNavigation: true,
          authType: AuthType.UNAUTHENTICATED,
          group: RouteGroup.AUTH,
        },
      },
      {
        path: 'sign-up',
        name: 'sign-up',
        component: () => import('@/views/AuthPage.vue'),
        meta: <RouteMeta>{
          label: 'Sign Up',
          hideNavigation: true,
          authType: AuthType.UNAUTHENTICATED,
          group: RouteGroup.AUTH,
        },
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin-tools',
    redirect: { name: 'user-management' },
    children: [
      {
        path: 'user-management',
        name: 'user-management',
        component: () => import('@/views/UsersPage.vue'),
        meta: <RouteMeta>{
          label: 'User Management',
          isSidebarMenu: true,
          group: RouteGroup.ADMIN_TOOLS,
          authType: AuthType.AUTHENTICATED,
          roles: [UserRole.ADMIN, UserRole.SUPER_USER],
        },
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/SettingsPage.vue'),
        meta: <RouteMeta>{
          label: 'Settings',
          isSidebarMenu: true,
          group: RouteGroup.ADMIN_TOOLS,
          authType: AuthType.AUTHENTICATED,
          roles: [UserRole.ADMIN, UserRole.SUPER_USER],
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
      hideNavigation: true,
      authType: AuthType.OPEN,
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
    roles?: UserRole[]
    authType: AuthType
  }
}

vueApp.use(router)
