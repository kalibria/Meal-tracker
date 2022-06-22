import { combineReducers } from '@reduxjs/toolkit';
import { settingsSlice } from '../welcome/settings/settingsSlice';

export const rootReducer = combineReducers({
  settings: settingsSlice.reducer,
});
