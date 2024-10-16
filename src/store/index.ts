import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { TodoState } from './todoSlice';
import userReducer, { UserState } from './userSlice';

export type AppState = {
  todos: TodoState;
  user: UserState;
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
