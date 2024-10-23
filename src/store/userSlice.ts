import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './index';

export const makeApi = () => {
  const api = axios.create({
    baseURL: `https://ya-praktikum.tech/api/v2`,
    timeout: 5000,
    withCredentials: true
  });
  api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );
  return api;
};
export const path = `https://ya-praktikum.tech/api/v2`;
export const client = makeApi();

export const loginUser = createAsyncThunk(
  `user/login`,
  async (_, { rejectWithValue }) => {
    try {
      const response: any = await axios.get(
        'https://ya-praktikum.tech/api/v2/auth/signin'
      );
      console.log(response);
      if (response.status !== 200) {
        throw new Error('Server error!');
      }
      return await response.data;
      // const data: TodoType[] = await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  `user/getUserInfo`,
  async (_, { rejectWithValue }) => {
    try {
      const response: any = await client.get(`${path}/auth/user`);
      console.log('auth response', response.data);
      if (response.status !== 200) {
        throw new Error('Server error!');
      }
      return await response.data;
      // const data: TodoType[] = await response.json();
    } catch (error) {
      console.log('error', error);
      return rejectWithValue((error as Error).message);
    }
  }
);

export type UserType = {
  id: number;
  login: string;
  avatar: string | null;
  first_name: string;
  second_name: string;
  display_name: string | null;
  email: string;
  phone: string;
};

export type UserState = {
  user: UserType | null;
  isAuth: boolean;
  pending: boolean;
  error?: boolean;
  load: boolean;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuth: false,
    pending: false,
    error: false,
    load: true
  },
  reducers: {
    getUser(state: UserState, action: PayloadAction<UserType>) {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state: UserState) => {
        state.pending = true;
        state.error = false;
        state.isAuth = false;
      })
      .addCase(loginUser.fulfilled, (state: UserState) => {
        state.pending = false;
        state.error = false;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state: UserState) => {
        state.pending = false;
        state.error = false;
        state.isAuth = true;
      })
      .addCase(getUserInfo.pending, (state: UserState) => {
        state.pending = true;
        state.error = false;
        state.load = false;
      })
      .addCase(getUserInfo.fulfilled, (state: UserState, action) => {
        state.pending = false;
        state.error = false;
        state.load = false;
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(getUserInfo.rejected, (state: UserState) => {
        state.pending = false;
        state.isAuth = false;
      });
  }
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
