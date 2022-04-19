import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTrack: {
    uri: "",
  },
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    storeSelectedTrack: (state, action) => {
      state.selectedTrack.uri = action.payload;
    },
  },
});

export const storeSelectedTrack = trackSlice.actions;

export default trackSlice.reducer;
