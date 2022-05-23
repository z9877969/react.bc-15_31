import { createSlice } from "@reduxjs/toolkit";
import { getCurUser, loginUser, registerUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    idToken: null,
    localId: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logOut(state) {
      state.email = "";
      state.idToken = null;
      state.localId = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => ({
      ...state,
      ...payload,
      isLoading: false,
    }),
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => ({
      ...state,
      ...payload,
      isLoading: false,
    }),
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [getCurUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurUser.fulfilled]: (state, { payload }) => ({
      isLoading: false,
      ...state,
      ...payload,
    }),
    [getCurUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
