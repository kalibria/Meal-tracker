import { RootState } from './store';

export const select_numberOfMealsPerDay = (store: RootState) =>
  store.settings.numberOfMealsPerDay.name;

export const select_numberOfMinutesToFirstMeal = (store: RootState) =>
  store.settings.numberOfMinutesToFirstMeal.time;

export const select_timeBetweenMeals = (store: RootState) =>
  store.settings.timeBetweenMeals.time;

export const select_minutesFromWakingUp = (store: RootState) =>
  store.settings.minutesFromWakingUp;
