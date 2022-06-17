import { store } from './store';

export const numberOfMealsPErDay =
  store.getState().settings.numberOfMealsPerDay.name;
