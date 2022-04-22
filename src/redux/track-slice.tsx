import { createSlice } from "@reduxjs/toolkit";



const initialState: {selected: Array<object>, tracks: Array<object>} = {
  selected: [],
  tracks: []
};

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setSelectedTrack: (state, action) => {
      state.selected = action.payload;
    },
    setTracks: (state, action) => {
      state.tracks = action.payload
    }
  },
});

export const {setSelectedTrack, setTracks} = trackSlice.actions;

export default trackSlice.reducer;
