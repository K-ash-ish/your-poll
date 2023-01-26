import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  polls: [],
};

export const pollSlice = createSlice({
  name: "allPoll",
  initialState,
  reducers: {
    polls: (state, action) => {
      state.polls.push(action.payload);
    },
  },
});

export const { id, polls } = pollSlice.actions;
export default pollSlice.reducer;
