const NotFound = () => import('@/views/pages/NotFound.vue');

export default {
  path: '*',
  name: 'error',
  component: NotFound,
};
