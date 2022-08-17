import { RootState } from './store';

export const selectSettings = (store: RootState) => store.settings;
export const mealsList = (store: RootState) => store.listOfMeals.list;
export const editMealOrderNumber = (store: RootState) =>
  store.listOfMeals.editMealOrderNumber;
