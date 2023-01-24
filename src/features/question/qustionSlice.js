import { createSlice } from "@reduxjs/toolkit";

const initialState = { question: "", options: [] };

export const pollSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    question: (state, action) => {
      state.question = action.payload;
    },
    options: (state, action) => {
      state.options.push(action.payload);
    },
  },
});

export const { question, options } = pollSlice.actions;
export default pollSlice.reducer;
