interface Settings {
  timeBetweenMeals: number;
  numberOfMealsPerDay: number;
  numberOfMinutesToFirstMeal: number;
}

const settingsScreen: Settings = {
  timeBetweenMeals: 0, //from 1 to 2 hours, with a one-minute interval
  numberOfMealsPerDay: 5, //5 is default, no max limit, 3 is min number
  numberOfMinutesToFirstMeal: 20, //20 min is default, min 5 min, max 60 min
};

export const jsonSettingsScreen = JSON.stringify(settingsScreen);
