<template>
  <form class="tac mt-1" @submit.prevent="setBudget">
    <div class="input-field">
      <input
        id="budget"
        type="number"
        class="validate app-budget-input"
        placeholder="Set your budget"
        v-model="budgetModel"
      />
    </div>
    <button class="btn app-budget-btn" :disabled="isBudgetSet">
      Set budget
    </button>
  </form>
</template>

<script>
import { mapState } from 'vuex';
import { setToStorage } from '@/utils';
export default {
  name: 'home',
  computed: {
    ...mapState(['budget']),
    budgetModel: {
      get() {
        return this.budget;
      },
      set(value) {
        this.$store.dispatch('setBudget', value);
      }
    },
    isBudgetSet() {
      return this.budget === 0;
    }
  },
  methods: {
    setBudget() {
      setToStorage('budget', this.budget);
      this.$router.push({ name: 'budget' });
    }
  }
};
</script>

<style scoped>
.app-budget-input {
  max-width: 500px;
}
</style>
