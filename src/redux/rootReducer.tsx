import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from '../settings/settingsSlice';

import mealReducer from '../list-of-meals/mealsSlice';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  listOfMeals: mealReducer,
});
