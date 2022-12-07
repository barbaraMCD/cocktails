import {createSlice} from '@reduxjs/toolkit';

export const Users = createSlice({
  name: 'Users',
  initialState: {
    users: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const {addUsers} = Users.actions;

export default Users.reducer;
