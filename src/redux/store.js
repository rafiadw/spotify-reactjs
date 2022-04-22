import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slicer";
import trackReducer from "./track-slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    track: trackReducer,
  },
});
