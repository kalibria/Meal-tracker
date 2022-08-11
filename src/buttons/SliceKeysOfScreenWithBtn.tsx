import { createSlice } from '@reduxjs/toolkit';

const initKey = {
  value: 1,
};

export const sliceKeysOfSettingsScreen = createSlice({
  name: 'keysOfScreenWithBtn',
  initialState: initKey,
  reducers: {
    setKey: (state) => {
      state.value += 1;
    },
  },
});

const { actions, reducer } = sliceKeysOfSettingsScreen;
export const { setKey } = actions;

export default reducer;
