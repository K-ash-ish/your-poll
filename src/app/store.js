import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../features/question/qustionSlice";
import pollReducer from "../features/poll/pollSlice";
export const store = configureStore({
  reducer: {
    question: questionReducer,
    allPoll: pollReducer,
  },
});