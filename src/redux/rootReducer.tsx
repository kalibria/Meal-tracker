import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from '../settings/settingsSlice';
import keysReducer from '../buttonsWindow/SliceKeysOfScreenWithBtn';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  keysOfScreenWithBtn: keysReducer,
});
