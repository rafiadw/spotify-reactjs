import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  accessToken: "",
  userStore: "",
};

const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.accessToken = action.payload;
    },
    logout: () => initialState,
    userProfile: (state, action) => {
      state.userStore = action.payload;
    },
  },
});

export const { login, logout, userProfile } = tokenSlice.actions;

export default tokenSlice.reducer;
