<template>
	<form @submit.prevent="handleSubmit">
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
		<button v-if="isEdit" class="btn" type="submit">Edit cost</button>
		<button v-else class="btn" type="submit">Add cost</button>
	</form>
</template>

<script>
import { mapState, mapGetters } from 'vuex';	
export default {
	name: 'app-budget-form',
	computed: {
		...mapState(['formValues']),
		...mapGetters(['isEdit']),
		values: {
			get() {
				return this.formValues;
			},
			set(values) {
				this.$store.dispatch('setFormValues', values);
			}
		}
	},
	methods: {
		handleSubmit() {
			this.isEdit ? this.$emit('edit-cost') : this.$emit('add-cost');
		}
	}
}
</script>
