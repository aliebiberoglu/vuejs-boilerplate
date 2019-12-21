import Vue from 'vue';
import App from './App.vue';

// eslint-disable-next-line import/first
import router from '@/router/';
// eslint-disable-next-line import/first
import store from '@/store/';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  components: {
    App,
  },
}).$mount('#app');
