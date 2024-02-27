import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: rootReducer,
});
