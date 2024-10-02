import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    cache: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { cache } = searchSlice.actions;
export default searchSlice.reducer;
