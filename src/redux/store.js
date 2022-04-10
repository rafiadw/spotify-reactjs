import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slicer";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
