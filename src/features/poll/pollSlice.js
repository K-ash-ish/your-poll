import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  polls: [],
};

export const pollSlice = createSlice({
  name: "newPoll",
  initialState,
  reducers: {
    id: (state, action) => {
      state.id = action.payload;
    },
    polls: (state, action) => {
      state.polls.push(action.payload);
    },
  },
});

export const { id, polls } = pollSlice.actions;
export default pollSlice.reducer;
