import AuthLayout from '@/views/layouts/AuthLayout.vue';
import DefaultLayout from '@/views/layouts/DefaultLayout.vue';
import ProductLayout from '@/views/layouts/ProductLayout.vue';
import UserLayout from '@/views/layouts/UserLayout.vue';
import NotFoundLayout from '@/views/layouts/NotFoundLayout.vue';

import Auth from './Routes/Auth';
import Default from './Routes/Default';
import NotFound from './Routes/NotFound';
import Product from './Routes/Product';
import User from './Routes/User';

export default [
  {
    path: '',
    component: DefaultLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      Default,
    ],
  }, {
    path: '',
    component: ProductLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      Product,
    ],
  }, {
    path: '',
    component: UserLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      User,
    ],
  }, {
    path: '',
    component: AuthLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      Auth,
    ],
  }, {
    path: '',
    component: NotFoundLayout,
    children: [
      NotFound,
    ],
  },
];
