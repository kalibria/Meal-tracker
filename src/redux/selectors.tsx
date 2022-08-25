import { RootState } from './store';

export const selectSettings = (store: RootState) => store.settings;
export const selectMealsList = (store: RootState) => store.listOfMeals.list;
export const selectEditMealOrderNumber = (store: RootState) =>
  store.listOfMeals.editMealOrderNumber;

export const selectHourAfterEdit = (store: RootState) =>
  store.listOfMeals.newHourAfterEdit;
export const selectMinutesAfterEdit = (store: RootState) =>
  store.listOfMeals.newMinutesAfterEdit;
export const selectNewTime = (store: RootState) =>
  store.listOfMeals.newTimeBLAfterEdit;
export const selectIsSetNewMealTime = (store: RootState) =>
  store.listOfMeals.isSetNewMealTime;
