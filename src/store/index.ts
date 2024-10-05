import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { TodoState } from "./todoSlice";

export type AppState = {
  todos: TodoState;
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
