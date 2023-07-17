// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: null,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
    logout: (state) => {
      state = null;
      return state;
    },
    refreshToken: (state) => {
      state = action.payload;
      return state;
    },
  },
});

export const { login, logout, refreshToken } = tokenSlice.actions;
export default tokenSlice.reducer;
