import Vue from 'vue';
import Router from 'vue-router';

import routes from './_Routes';
import beforeEach from './_BeforeEach';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(beforeEach);

export default router;
