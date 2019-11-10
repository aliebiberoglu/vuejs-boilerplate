import LoginPage from '@/views/pages/auth/Login.vue';
import SignUpPage from '@/views/pages/auth/SignUp.vue';

const PreComponent = '<router-view/>';

export default {
  path: '',
  component: { template: PreComponent },  
  children: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        title: 'Login Page',
      },
    }, {
      path: '/sign-up',
      name: 'signup',
      component: SignUpPage,
      meta: {
        title: 'Sign UP Page',
      },
    },
  ]
};
