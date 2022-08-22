import { createSlice } from '@reduxjs/toolkit';

import { timeManager } from '../utility/time.manager';
import { IMealBL, mealsManagerBL } from './mealsManager';
import { myLocalStorage } from '../utility/LocalStorage';

export interface IInitialStateMeals {
  list: IMealBL[];
  editMealOrderNumber: number;
  newHourAfterEdit: string;
  newMinutesAfterEdit: string;
  newTimeBLAfterEdit: number;
}

const initialStateList: IInitialStateMeals = {
  list: mealsManagerBL.getActualMealListBL(),
  editMealOrderNumber: 0,
  newHourAfterEdit: '00',
  newMinutesAfterEdit: '00',
  newTimeBLAfterEdit: 1,
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: initialStateList,
  reducers: {
    setListOfMeals: (state, action) => {
      state.list = action.payload;
    },
    setEditMealOrderNumber: (state, action) => {
      state.editMealOrderNumber = action.payload;
    },
    setNewTimeAfterEditMeal: (state, action) => {
      const newMealTimeUI =
        action.payload.hour + ' : ' + action.payload.minutes;
      const newMealTimeBL = timeManager.timeFromUIToBL(newMealTimeUI);
      state.newTimeBLAfterEdit = newMealTimeBL;

      state.list[state.editMealOrderNumber - 1].mealTime = newMealTimeBL;
    },
    setNewHourAfterEdit: (state, action) => {
      console.log('hour', action.payload);
      state.newHourAfterEdit = action.payload;
    },
    setNewMinutesAfterEdit: (state, action) => {
      console.log('mins', action.payload);
      state.newMinutesAfterEdit = action.payload;
    },
    updateMealsAfterChangeMealTime: (state) => {
      state.list = mealsManagerBL.updateMealTime(
        state.list,
        state.editMealOrderNumber
      );
    },
  },
});

const { actions, reducer } = mealsSlice;
export const {
  setListOfMeals,
  setEditMealOrderNumber,
  setNewTimeAfterEditMeal,
  setNewHourAfterEdit,
  setNewMinutesAfterEdit,
  updateMealsAfterChangeMealTime,
} = actions;

export default reducer;
