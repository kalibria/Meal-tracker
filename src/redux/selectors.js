import { store } from './store';

export const numberOfMealsPerDay =
  store.getState().settings.numberOfMealsPerDay.name;

export const numberOfMinutesToFirstMeal =
  store.getState().settings.numberOfMinutesToFirstMeal.time;
