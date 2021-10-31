import Vue from 'vue';
import Vuex from 'vuex';
import { getMorale } from '@/api';

Vue.use(Vuex);

const state = {
  loading: false,
  currentMorale: {},
  history: [],
};

const getters = {
};

const actions = {
  async askForMorale({ commit }, payload) {
    commit('setLoading', true);
    const morale = await getMorale(payload);
    commit('setCurrentMorale', morale);
    commit('addToHistory', morale);
    commit('setLoading', false);
  },
};

const mutations = {
  setLoading(s, n) {
    // eslint-disable-next-line no-param-reassign
    s.loading = n;
  },
  setCurrentMorale(s, n) {
    // eslint-disable-next-line no-param-reassign
    s.currentMorale = n;
  },
  addToHistory(s, n) {
    s.history.push(n);
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
