import { createSlice } from '@reduxjs/toolkit';
import { minutesInHour } from './settings_constant';
import { settingsScreen } from './settingsConfig';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: settingsScreen,
  reducers: {
    setTimeBetweenMeals: (state, action) => {
      const timeBetweenMealsInMinutes =
        action.payload.hours * minutesInHour + action.payload.minutes;

      state.timeBetweenMeals.time = timeBetweenMealsInMinutes;
    },
    setNumberOfMealsPerDay: (state, action) => {
      state.numberOfMealsPerDay.name = action.payload;
    },
    setNumberOfMinutesToFirstMeal: (state, action) => {
      state.numberOfMinutesToFirstMeal.time = action.payload;
    },
  },
});

const { actions, reducer } = settingsSlice;
export const {
  setTimeBetweenMeals,
  setNumberOfMealsPerDay,
  setNumberOfMinutesToFirstMeal,
} = actions;

export default reducer;
