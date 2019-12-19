<template>
	<ul class="collection with-header mt-1">
		<li class="collection-header">
			<h4>{{ title }}</h4>
			<p class="fz2">TotalSpend: <strong>{{ totalSpended }}&#8372;</strong></p>
		</li>
		<app-budget-list-item v-for="(cost, index) of costs" 
													:key="cost.id" 
													:cost="cost" 
													:index="index" />
	</ul>
</template>

<script>
import AppBudgetListItem from '@/components/AppBudgetListItem';
import { mapState, mapGetters } from 'vuex';
export default {
	name: 'app-budget-list',
	props: {
		title: {
			type: String,
			default: 'Costs'
		}
	},
	components: {
		AppBudgetListItem
	},
	computed: {
		...mapState(['costs']),
		...mapGetters(['totalSpended']),
	}
}
</script>
