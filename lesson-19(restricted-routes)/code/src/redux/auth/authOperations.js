import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurUserApi,
  loginUserApi,
  refreshTokenApi,
  registerUserApi,
} from "../../utils/firebaseApi";
import { errorHandler } from "../error/errorHandler";
import { logOut } from "./authSlice";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  "auth/getCurUser",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const { idToken } = getState().auth;
      const data = await getCurUserApi(idToken);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(
          errorHandler({
            error,
            cb: getCurUser,
          })
        );
      }, 0);

      return rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (prevOperation, { getState, rejectWithValue, dispatch }) => {
    const { refreshToken } = getState().auth;
    try {
      const data = await refreshTokenApi(refreshToken);
      setTimeout(() => {
        dispatch(prevOperation());
      }, 0);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(logOut());
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
