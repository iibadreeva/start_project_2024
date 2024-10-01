import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./index";

export const fetchTodos = createAsyncThunk(
  `todos/fetchTodos`,
  async (_, { rejectWithValue }) => {
    try {
      const response: any = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );
      console.log(response);
      if (response.status !== 200) {
        throw new Error("Server error!");
      }
      return await response.data;
      // const data: TodoType[] = await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const response: any = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { method: "DELETE" },
      );
      console.log("delete todo", response);
      if (response.status !== 200) {
        throw new Error("Can't delete todo!");
      }
      dispatch(removeTodo({ id }));
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const toggleStatus = createAsyncThunk(
  "todos/toggleStatus",
  async (id: number, { rejectWithValue, dispatch, getState }) => {
    try {
      const state = getState() as RootState;
      const todo = state.todos.todos.find(
        (todo: TodoType) => todo.id === id,
      ) as unknown as TodoType;

      // const response: any = await axios.patch(
      //   `https://jsonplaceholder.typicode.com/todos/${id}`,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       completed: !todo.completed,
      //     }),
      //   },
      // );
      const response: any = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          // ...todo,
          completed: !todo.completed,
        },
      );
      console.log("toggle todo", response);
      if (response.status !== 200) {
        throw new Error("Can't toggle todo!");
      }
      dispatch(completedTodo({ id }));
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (text: string, { rejectWithValue, dispatch }) => {
    try {
      const todo = {
        title: text,
        completed: false,
        userId: 1,
      };
      const response: any = await axios.post(
        `https://jsonplaceholder.typicode.com/todos`,
        todo,
      );
      console.log("add todo", response);
      if (response.status !== 201) {
        throw new Error("Can't add todo!");
      }
      const data = response.data;
      dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
export type TodoType = {
  id: number;
  userId?: number;
  title: string;
  completed: boolean;
};

export type TodoState = {
  todos: TodoType[];
  status: null | string;
  error: any;
};

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    // todos: [{ id: "1", text: "something", completed: true }],
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state: TodoState, action) {
      // addTodo(state: TodoState, action: PayloadAction<{ text: string }>) {
      // addTodo(state: TodoState, action: PayloadAction<string>) {
      console.log("add", action);
      // state.todos.push({
      //   id: new Date().toISOString(),
      //   title: action.payload.text,
      //   completed: false,
      // });
      state.todos.push(action.payload);
    },
    completedTodo(state: TodoState, action: PayloadAction<{ id: number }>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id,
      ) as TodoType;
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state: TodoState, action: PayloadAction<{ id: number }>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state: TodoState) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state: TodoState, action) => {
        state.status = "resolved";

        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state: TodoState, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(deleteTodo.rejected, (state: TodoState, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(toggleStatus.rejected, (state: TodoState, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(addNewTodo.rejected, (state: TodoState, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { addTodo, removeTodo, completedTodo } = todoSlice.actions;

export default todoSlice.reducer;
