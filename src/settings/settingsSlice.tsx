import { createSlice } from '@reduxjs/toolkit';

import { settingsScreen } from './settingsConfig';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: settingsScreen,
  reducers: {
    setTimeBetweenMeals: (state, action) => {
      state.timeBetweenMeals.time = action.payload;
    },
    setNumberOfMealsPerDay: (state, action) => {
      state.numberOfMealsPerDay.time = action.payload;
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
