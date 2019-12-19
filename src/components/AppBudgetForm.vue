<template>
	<form @submit.prevent="$emit('add-cost')">
		<div class="input-field">
			<input 	id="Title" 
							type="text" 
							v-model="values.title"
							class="validate" 
							placeholder="Title">
		</div>
		<div class="input-field">
			<input 	id="cost"
							type="number" 
							v-model="values.cost"
							class="validate" 
							placeholder="Cost"
							min="0">
		</div>
		<button class="btn" type="submit">Add cost</button>
	</form>
</template>

<script>
import { mapState } from 'vuex';	
export default {
	name: 'app-budget-form',
	computed: {
		...mapState(['formValues']),
		values: {
			get() {
				return this.formValues;
			},
			set(values) {
				this.$store.dispatch('setFormValues', values);
			}
		}
	},
}
</script>
