import {createSlice} from '@reduxjs/toolkit';

export const wishList = createSlice({
  name: 'wishList',
  initialState: {
    wishList: [],
  },
  reducers: {
    addCocktail: (state, action) => {
      state.wishList = [...state.wishList, action.payload];
    },
    deleteCocktail: (state, action) => {
      state.wishList = state.wishList.filter(c => {
        return c.Id !== action.payload?.Id;
      });
    },
  },
});

export const {addCocktail, deleteCocktail} = wishList.actions;

export default wishList.reducer;
