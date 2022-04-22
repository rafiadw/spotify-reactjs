import { createSlice } from "@reduxjs/toolkit";


const initialState: {isLogin: boolean,
  accessToken: string,
  profile: object}= {
  isLogin: false,
  accessToken: "",
  profile: {},
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
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { login, logout, setProfile } = tokenSlice.actions;

export default tokenSlice.reducer;
