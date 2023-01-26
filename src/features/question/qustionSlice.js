import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  question: "",
  options: [],
};

export const pollSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    id: (state, action) => {
      state.id = action.payload;
    },
    question: (state, action) => {
      state.question = action.payload;
    },
    options: (state, action) => {
      state.options.push(action.payload);
    },
  },
});

export const { id, question, options } = pollSlice.actions;
export default pollSlice.reducer;
