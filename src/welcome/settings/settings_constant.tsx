import { time } from './time';

export interface Settings {
  timeBetweenMeals: { id: number; time: number };
  numberOfMealsPerDay: { id: number; name: number };
  numberOfMinutesToFirstMeal: { id: number; time: number };
  hours: Array<number>;
  minutes: Array<string>;
  minutesFromWakingUp: Array<string>;
}

export const settingsScreen: Settings = {
  timeBetweenMeals: { id: 1, time: 60 }, //from 1 to 2 hours, with a one-minute interval
  numberOfMealsPerDay: { id: 2, name: 5 }, //5 is default, no max limit, 3 is min number
  numberOfMinutesToFirstMeal: { id: 3, time: 20 }, //20 min is default, min 5 min, max 60 min
  hours: time.hoursArray,
  minutes: time.convertMinutesArr(time.minutesArray),
  minutesFromWakingUp: time.convertMinutesArr(time.minutesFromWakingUp),
};

export const minNumberOfMealsPerDay = 3;
export const maxNumberOfMealsPerDay = 24;

export const minutesInHour = 60;

export const startMinuteFromWakingUp = 6;
export const maxHoursBetweenMeals = 2;
