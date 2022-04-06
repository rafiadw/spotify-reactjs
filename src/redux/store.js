import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./token-slicer";

export default configureStore({
  reducer: {
    token: tokenReducer,
  },
});
