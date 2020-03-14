<template>
  <li class="collection-item df jcsb aic">
    <div class="app-budget-title">
      #{{ index + 1 }}
      <span class="ml-1">
        {{ cost.title }}
        <strong>{{ cost.cost }}&#8372;</strong>
      </span>
    </div>
    <div class="app-budget-icons">
      <i class="material-icons cp px-1 cp" @click="editCost">create</i>
      <i class="material-icons cp px-1 cp" @click="deleteCost(cost.id)"
        >delete</i
      >
    </div>
  </li>
</template>

<script>
import { mapState } from 'vuex';
import { setToStorage } from '@/utils';
export default {
  props: {
    cost: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState(['costs'])
  },
  methods: {
    editCost() {
      this.$store.dispatch('editCost', this.cost);
    },
    deleteCost(id) {
      const newCosts = this.costs.filter((cost) => cost.id !== id);
      this.$store.dispatch('setCosts', newCosts);
      setToStorage('costs', JSON.stringify(newCosts));
    }
  }
};
</script>
