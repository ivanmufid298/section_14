import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const persistedstate = createPersistedState({
  paths: ['todo']
});

export default new Vuex.Store({
  plugins: [persistedstate],
  state: {
    
  },
  mutations: {},
  actions: {},
  modules: {},
});
