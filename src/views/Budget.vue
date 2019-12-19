<template>
	<div class="about">
		<h1>budget page</h1>
		<app-budget-form v-model="formValues" @add-cost="addCost"/>
		<p class="fz2">
			Your full budget is: <strong>{{ budget }}&#8372;</strong>
		</p>
		<p class="fz2">
			Your budget on {{ new Date().toLocaleString() }} is: <strong>{{ budgetOnThisTime }}&#8372;</strong>
		</p>
		<app-budget-list />
		<p class="fz2">TotalSpend: {{ totalSpended }}</p>

		<button class="btn absolute-top" @click="setNewBudget">Set new budget</button>
	</div>
</template>
<script>
import AppBudgetList from '@/components/AppBudgetList';
import AppBudgetForm from '@/components/AppBudgetForm';
 
import { mapState, mapGetters } from 'vuex';

import { uuid, setToStorage, removeFromStorage } from '@/utils';
export default {
	name: 'budget',
	data() {
		return {
			formValues: {
				title: '',
				cost: 0
			}
		}
	},
	components: {
		AppBudgetList,
		AppBudgetForm
	},
	computed: {
		...mapState(['budget', 'costs']),
		...mapGetters(['totalSpended']),
		budgetOnThisTime() {
			return this.budget - this.totalSpended;
		}
	},
	methods: {
		setNewBudget() {
			removeFromStorage('budget');
			this.$store.dispatch('setBudget', 0);
			this.$router.push({name: 'home'});
		},
		addCost() {
			if(+this.formValues.cost > this.budget) {
				console.log('ga');
			}
			const cost = {
				id: uuid(),
				title: this.formValues.title,
				cost: this.formValues.cost,
				color: '#000'			
			};
			const newCosts = [cost, ...this.costs];
			
			this.$store.dispatch('setCosts', newCosts);

			setToStorage('costs', JSON.stringify(newCosts));

			this.formValues = {
				title: '',
				cost: 0
			}
		}
	}
}
</script>