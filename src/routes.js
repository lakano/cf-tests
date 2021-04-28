export default [
    {
      path: '/',
      component: () => import('./pages/home.vue'),
      name: 'home',
      meta: {
        propsGetter: 'default',
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('./pages/404.vue'),
      meta: {
        propsGetter: false,
      },
    },
  ]