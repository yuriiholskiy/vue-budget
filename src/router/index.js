import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

import { setBudgetGuard } from '@/router/guards';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		beforeEnter: setBudgetGuard
	},
	{
		path: '/budget',
		name: 'budget',
		component: () => import(/* webpackChunkName: "budget" */ '@/views/Budget.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
