import { createSlice } from '@reduxjs/toolkit';

const initialStateList = {
  list: [],
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: initialStateList,
  reducers: {
    setListOfMeals: (state, action) => {
      state.list = action.payload;
    },
  },
});

const { actions, reducer } = mealsSlice;
export const { setListOfMeals } = actions;

export default reducer;
