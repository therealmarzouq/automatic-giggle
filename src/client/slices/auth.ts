import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState } from "@/types";
import axios from "axios";

export const initialState: AuthState = {
  currentUser: {},
  isAuthenticated: false,
  error: "",
  loading: true,
};

export const loginUser = createAsyncThunk("auth/loginUser", async () => {
  return await axios
    .get(`/api/auth/login`, {
      // withCredentials: true,
    })
    .then((res) => res.data);
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, { payload }: PayloadAction<any>) => {
      state.currentUser = payload;
      state.isAuthenticated = true;
      state.loading = false;
    },

    loginError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isAuthenticated = false;
      state.loading = false;
    },

    logout: (state) => {
      state.loading = true;
    },

    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.currentUser = {};
      state.error = "";
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        if (!!Object.keys(action.payload).length) {
          state.isAuthenticated = true;
        }
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { login, loginSuccess, loginError, logout, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;
