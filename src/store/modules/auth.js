import mutations from '../mutations';

const { IS_LOGGED_IN } = mutations;

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn
  },

  mutations: {
    [IS_LOGGED_IN](state, bool) {
      state.isLoggedIn = bool;
    }
  },

  actions: {
    login({ commit }, bool) {
      commit(IS_LOGGED_IN, bool);
    },
    register({ commit }, bool) {
      commit(IS_LOGGED_IN, bool);
    },
    logout({ commit }, bool) {
      commit(IS_LOGGED_IN, bool);
    }
  }
};

export default authStore;
