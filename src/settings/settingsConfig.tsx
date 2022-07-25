export interface Settings {
  timeBetweenMeals: { id: number; time: number };
  numberOfMealsPerDay: { id: number; time: number };
  numberOfMinutesToFirstMeal: { id: number; time: number };
}

export const settingsScreen: Settings = {
  timeBetweenMeals: { id: 1, time: 140 }, //from 1 to 2 hours, with a one-minute interval
  numberOfMealsPerDay: { id: 2, time: 5 }, //5 is default, no max limit, 3 is min number
  numberOfMinutesToFirstMeal: { id: 3, time: 20 }, //20 min is default, min 5 min, max 60 min
};
