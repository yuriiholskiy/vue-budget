<template>
	<div class="about">
		<button :title="formHideMessage" 
						class="btn-floating btn-small waves-effect waves-light absolute-top-left"
						@click="formHidden = !formHidden">
			<i class="material-icons">add</i>
		</button>
		<app-budget-form v-if="formHidden" @add-cost="addCost" class="mt-2" />
		<p class="fz2">
			Your full budget is: <strong>{{ budget }}&#8372;</strong>
		</p>
		<p class="fz2">
			Your budget on {{ new Date().toLocaleString() }} is: <strong>{{ budgetOnThisTime }}&#8372;</strong>
		</p>
		<app-budget-list />
		

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
			formHidden: false
		}
	},
	components: {
		AppBudgetList,
		AppBudgetForm
	},
	computed: {
		...mapState(['budget', 'costs', 'formValues']),
		...mapGetters(['totalSpended']),
		budgetOnThisTime() {
			return this.budget - this.totalSpended;
		},
		formHideMessage() {
			return this.formHidden ? 'Hide form' : 'Show form';
		}
	},
	methods: {
		setNewBudget() {
			const setNewBudget = window.confirm('Are You sure?');
			if(setNewBudget) {
				removeFromStorage('budget');
				this.$store.dispatch('setBudget', 0);
				this.$router.push({name: 'home'});
			}
		},
		addCost() {
			if(+this.formValues.cost > this.budget) {
				console.log('Not enough money');
				return; // for now 
			}
			const cost = {
				id: uuid(),
				title: this.formValues.title,
				cost: +this.formValues.cost,
				color: '#000'			
			};
			const newCosts = [cost, ...this.costs];
			
			this.$store.dispatch('setCosts', newCosts);

			setToStorage('costs', JSON.stringify(newCosts));

			this.$store.dispatch('setFormValues', {
				title: '',
				val: 0
			});
		}
	}
}
</script>