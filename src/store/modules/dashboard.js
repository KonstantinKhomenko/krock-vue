import mutations from '../mutations';

const { TOGGLE_ASIDE, ADD_PROJECT } = mutations;

const dashboardStore = {
  namespaced: true,
  state: {
    asideVisible: true,
    projects: [
      {
        country: 'Ukraine',
        population: 35000000,
        continent: 'Europe'
      }
    ]
  },

  getters: {
    asideVisible: ({ asideVisible }) => asideVisible,
    projects: ({ projects }) => projects
  },

  mutations: {
    [TOGGLE_ASIDE](state) {
      state.asideVisible = !state.asideVisible;
    },
    [ADD_PROJECT](state, payload) {
      state.projects.unshift(payload);
    }
  },

  actions: {
    toggleAside({ commit }) {
      commit(TOGGLE_ASIDE);
    },
    addProject({ commit, rootGetters: { arrCountries } }) {
      const randomProject =
        arrCountries[[Math.floor(Math.random() * arrCountries.length)]];

      commit(ADD_PROJECT, randomProject);
    }
  }
};

export default dashboardStore;
