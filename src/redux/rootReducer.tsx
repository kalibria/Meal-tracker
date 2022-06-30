import { combineReducers } from '@reduxjs/toolkit';
import reducer from '../welcome/settings/settingsSlice';

export const rootReducer = combineReducers({
  settings: reducer,
});
