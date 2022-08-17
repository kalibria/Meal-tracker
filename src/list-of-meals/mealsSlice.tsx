import { createSlice } from '@reduxjs/toolkit';

const initialStateList = {
  list: [],
  editMealOrderNumber: 1,
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
  },
});

const { actions, reducer } = mealsSlice;
export const { setListOfMeals, setEditMealOrderNumber } = actions;

export default reducer;
