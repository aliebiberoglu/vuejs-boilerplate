import UserList from '@/views/pages/users/List.vue';
import UserDetail from '@/views/pages/users/Detail.vue';

const PreComponent = '<router-view/>';

export default {
  path: '',
  component: { template: PreComponent },
  redirect: {
    name: 'user-list',
  },
  children: [
    {
      path: '/user/list',
      name: 'user-list',
      component: UserList,
      meta: {
        title: 'Users',
      },
    }, {
      path: 'user/:id',
      name: 'user-detail',
      component: UserDetail,
      meta: {
        title: 'Users',
      },
    },
  ],
};
