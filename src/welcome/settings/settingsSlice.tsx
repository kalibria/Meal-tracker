import { createSlice } from '@reduxjs/toolkit';
import { minutesInHour, settingsScreen } from './settings_constant';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: settingsScreen,
  reducers: {
    setTimeBetweenMeals: (state, action) => {
      const timeBetweenMealsInMinutes =
        action.payload.hours * minutesInHour + action.payload.minutes;

      state.timeBetweenMeals = timeBetweenMealsInMinutes;
    },
    setNumberOfMealsPerDay: (state, action) => {
      state.numberOfMealsPerDay.name = action.payload;
    },
  },
});

const { actions, reducer } = settingsSlice;
export const { setTimeBetweenMeals, setNumberOfMealsPerDay } = actions;
export default reducer;
