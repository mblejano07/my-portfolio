import 'vue-router'

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
