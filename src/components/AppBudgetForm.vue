<template>
	<form @submit.prevent="$emit('add-cost')">
		<div class="input-field">
			<input 	id="Title" 
							type="text" 
							ref="title"
							:value="value.title"
							@input="emiting" 
							class="validate" 
							placeholder="Title">
		</div>
		<div class="input-field">
			<input 	id="cost"
							ref="cost" 
							type="number" 
							:value="value.cost"
							@input="emiting" 
							class="validate" 
							placeholder="Cost">
		</div>
		<button class="btn" type="submit">Add cost</button>
	</form>
</template>

<script>
export default {
	name: 'app-budget-form',
	props: {
		value: {
			type: Object,
			required: true
		}
	},
	methods: {
		emiting() {
			const title = this.$refs.title.value;
			const cost = +this.$refs.cost.value;

			this.$emit('input', {title, cost});
		},
	}
}
</script>
