import Vue from 'vue';
import Vuex from 'vuex';

import { setToStorage, getFromStorage, uuid } from '@/utils';

const defaultCosts = [
  {
    id: uuid(),
    title: 'shop',
    cost: 200,
    color: 'red'
  },
  {
    id: uuid(),
    title: 'beer',
    cost: 500,
    color: 'orange'
  },
  {
    id: uuid(),
    title: 'books',
    cost: 300,
    color: 'red'
  }
];

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    budget: getFromStorage('budget') ? +getFromStorage('budget') : 0,
    costs: getFromStorage('costs')
      ? JSON.parse(getFromStorage('costs'))
      : defaultCosts,
    formValues: {
      title: '',
      cost: 0
    },
    editId: null
  },
  mutations: {
    setBudget(state, budget) {
      state.budget = budget;
    },
    setCosts(state, costs) {
      state.costs = costs;
    },
    setFormValues(state, values) {
      state.formValues = values;
    },
    setEditId(state, id) {
      state.editId = id;
    }
  },
  actions: {
    setBudget({ commit }, payload) {
      commit('setBudget', payload);
    },
    setCosts({ commit, dispatch, getters }, payload) {
      commit('setCosts', payload);
      dispatch('setFormValues', {
        title: '',
        cost: 0
      });
      if (getters.isEdit) {
        commit('setEditId', null);
      }
      setToStorage('costs', JSON.stringify(payload));
    },
    setFormValues({ commit }, payload) {
      commit('setFormValues', payload);
    },
    editCost({ commit }, payload) {
      commit('setEditId', payload.id);
      commit('setFormValues', {
        title: payload.title,
        cost: payload.cost
      });
    }
  },
  getters: {
    totalSpended: (state) =>
      state.costs.reduce((total, cost) => total + +cost.cost, 0),
    isBudgetSet: (state) => !!state.budget,
    isEdit: (state) => !!state.editId
  }
});
