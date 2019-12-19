import Vue from 'vue';
import Vuex from 'vuex';

import { getFromStorage, uuid } from '@/utils';

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
		costs: getFromStorage('costs') ? JSON.parse(getFromStorage('costs')): defaultCosts
	},
	mutations: {
		setBudget(state, payload) {
			state.budget = payload;
		},
		setCosts(state, payload) {
			state.costs = payload;
		}
	},
	actions: {
		setBudget({commit}, payload) {
			commit('setBudget', payload);
		},
		setCosts({commit}, payload) {
			commit('setCosts', payload);
		}
	},
	getters: {
		totalSpended: state => state.costs.reduce((total, cost) => total + cost.cost, 0),
		isBudgetSet: state => !!state.budget
	}
});
