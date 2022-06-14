import {
  hoursArray,
  MinutesArrayStartFromZero,
} from './getArraysHoursAndMinutes';
import * as React from 'react';

export interface Settings {
  timeBetweenMeals: { id: number; name: number };
  numberOfMealsPerDay: { id: number; name: number };
  numberOfMinutesToFirstMeal: { id: number; name: number };
  hours: Array<number>;
  minutes: Array<string>;
}

export const settingsScreen: Settings = {
  timeBetweenMeals: { id: 1, name: 1 }, //from 1 to 2 hours, with a one-minute interval
  numberOfMealsPerDay: { id: 2, name: 5 }, //5 is default, no max limit, 3 is min number
  numberOfMinutesToFirstMeal: { id: 3, name: 20 }, //20 min is default, min 5 min, max 60 min
  hours: hoursArray,
  minutes: MinutesArrayStartFromZero,
};

// export const jsonSettingsScreen = JSON.stringify(settingsScreen);
// export const jsonSettingsList = JSON.parse(jsonSettingsScreen);