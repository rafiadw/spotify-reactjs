import { createSlice } from "@reduxjs/toolkit";
export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
    userID: "",
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = "";
    },
    userStore: (state, action) => {
      state.userID = action.payload;
    },
  },
});

export const { login, logout, userStore } = tokenSlice.actions;

export default tokenSlice.reducer;
