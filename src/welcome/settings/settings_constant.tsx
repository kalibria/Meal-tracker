export interface Settings {
  timeBetweenMeals: { id: number; name: number };
  numberOfMealsPerDay: { id: number; name: number };
  numberOfMinutesToFirstMeal: { id: number; name: number };
}

export const settingsScreen: Settings = {
  timeBetweenMeals: { id: 1, name: 1 }, //from 1 to 2 hours, with a one-minute interval
  numberOfMealsPerDay: { id: 2, name: 5 }, //5 is default, no max limit, 3 is min number
  numberOfMinutesToFirstMeal: { id: 3, name: 20 }, //20 min is default, min 5 min, max 60 min
};

// export const jsonSettingsScreen = JSON.stringify(settingsScreen);
// export const jsonSettingsList = JSON.parse(jsonSettingsScreen);

const hoursArray = [1, 2];
const minutesArry = [1, 2, 3, 4, 5, 6, 7];
