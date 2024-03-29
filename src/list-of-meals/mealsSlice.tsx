import { createSlice } from '@reduxjs/toolkit';

import { timeManager } from '../utility/time.manager';
import { IMealBL, mealsManagerBL } from './mealsManager';
import { myLocalStorage } from '../utility/LocalStorage';
import { minutesInHour } from '../settings/settings_constant';
import { defaultLatestTime } from './constantOfListOfMeal';

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

    deleteLastMeal: (state, action) => {
      state.list = state.list.slice(0, action.payload - 1);
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

    addExtraMeal: (state) => {
      const lastMeal = state.list[state.list.length - 1];
      const defaultLatestMealTimeBL =
        timeManager.timeFromUIToBL(defaultLatestTime);

      const extraMeal: IMealBL = {
        number: lastMeal.number + 1,
        mealTime:
          lastMeal.mealTime +
          myLocalStorage.getTimeBetweenMeals() * minutesInHour * 1000,
        eaten: false,
        edit: false,
        delete: false,
      };

      if (extraMeal.mealTime > defaultLatestMealTimeBL) {
        return;
      } else {
        state.list.push(extraMeal);
      }
    },

    removeMealList: (state, action) => {
      myLocalStorage.removeLS(action.payload);

      state.list = myLocalStorage.getMealListBL();
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
  deleteLastMeal,
  copyMealList,
  changeList,
  addExtraMeal,
  removeMealList,
} = actions;

export default reducer;
