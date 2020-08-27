import Vue from 'vue';
import Vuex from 'vuex';
import authGuard from '@/guards/auth.guard';
import auth from './modules/auth';
import dashboard from './modules/dashboard';
import countries from './modules/countries';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    dashboard,
    countries
  }
});

authGuard(store);

export default store;
