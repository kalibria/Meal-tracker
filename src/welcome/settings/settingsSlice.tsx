import { createSlice } from '@reduxjs/toolkit';
import { settingsScreen } from './settings_constant';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: settingsScreen,
  reducers: {
    setTimeBetweenMeals: (state, action) =>
      (state.timeBetweenMeals = action.payload),
  },
});

export default settingsSlice.reducer;
export const { setTimeBetweenMeals } = settingsSlice.actions;
