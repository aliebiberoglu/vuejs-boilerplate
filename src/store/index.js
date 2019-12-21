import Vue from 'vue';
import Vuex from 'vuex';

// USer module.
import UserModule from './user/';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    UserModule,
  },
});

export default store;
