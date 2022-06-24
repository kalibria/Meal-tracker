import { store } from './store';

export const numberOfMealsPerDay =
  store.getState().settings.numberOfMealsPerDay.name;

export const numberOfMinutesToFirstMeal =
  store.getState().settings.numberOfMinutesToFirstMeal.time;

export const timeBetweenMeals = store.getState().settings.timeBetweenMeals.time;

export const minutesFromWakingUp =
  store.getState().settings.minutesFromWakingUp;
