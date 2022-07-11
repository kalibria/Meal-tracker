import { RootState } from './store';

export const selectNumberOfMealsPerDay = (store: RootState) =>
  store.settings.numberOfMealsPerDay.name;

export const selectNumberOfMinutesToFirstMeal = (store: RootState) =>
  store.settings.numberOfMinutesToFirstMeal.time;

export const selectTimeBetweenMeals = (store: RootState) =>
  store.settings.timeBetweenMeals.time;

export const selectSettings = (store: RootState) => store.settings;

export const keyOfScreenWithBtn = (store: RootState) =>
  store.keysOfScreenWithBtn.value;
