import HomePage from '@/views/pages/default/Home.vue';

const PreComponent = '<router-view/>';

export default {
  path: '',
  component: { template: PreComponent },
  children: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Home Page',
      },
    },
  ],
};
