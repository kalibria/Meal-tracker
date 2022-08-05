import { createSlice } from '@reduxjs/toolkit';

interface IMeal {
  number: number;
  time: number;
  eaten?: boolean;
  isEdit?: boolean;
  delete?: boolean;
}

const listOfMeals: IMeal[] = [];

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: listOfMeals,
  reducers: {
    setListOfMeals: (state, action) => {
      console.log('hi');
    },
  },
});

const { actions, reducer } = mealsSlice;
export const {} = actions;

export default reducer;
