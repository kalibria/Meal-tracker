import { createSlice } from '@reduxjs/toolkit';

import { timeManager } from '../utility/time.manager';
import { IMealBL, mealsManagerBL } from './mealsManager';

export interface IInitialStateMeals {
  list: IMealBL[];
  editMealOrderNumber: number;
  newHourAfterEdit: string;
  newMinutesAfterEdit: string;
  newTimeBLAfterEdit: number;
  isSetNewMealTime: boolean;
  copyList: IMealBL[];
}

const initialStateList: IInitialStateMeals = {
  list: mealsManagerBL.getActualMealListBL(),
  editMealOrderNumber: 0,
  newHourAfterEdit: '00',
  newMinutesAfterEdit: '00',
  newTimeBLAfterEdit: 1,
  isSetNewMealTime: true,
  copyList: [],
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
      state.newHourAfterEdit = action.payload;
    },
    setNewMinutesAfterEdit: (state, action) => {
      state.newMinutesAfterEdit = action.payload;
    },
    updateMealsAfterChangeMealTime: (state) => {
      state.list[state.editMealOrderNumber - 1].mealTime =
        state.newTimeBLAfterEdit;

      state.list = mealsManagerBL.updateMealTime(
        state.list,
        state.editMealOrderNumber
      );
    },
    setEatenMeal: (state) => {
      state.list[state.editMealOrderNumber - 1].eaten = true;
    },

    isSetNewMeal: (state, action) => {
      state.isSetNewMealTime = action.payload;
    },
    copyMealList: (state) => {
      state.copyList = [...state.list];
    },
    changeList: (state, action) => {
      if (action.payload === false) {
        state.list = [...state.copyList];
        state.copyList = [];
      } else {
        state.copyList = [];
      }
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
  setEatenMeal,
  isSetNewMeal,
  copyMealList,
  changeList,
} = actions;

export default reducer;
