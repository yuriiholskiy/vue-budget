import store from '@/store';
export function setBudgetGuard(to, from, next) {
  if (store.getters.isBudgetSet) {
    next();
  } else {
    next({ name: 'home' });
  }
}
