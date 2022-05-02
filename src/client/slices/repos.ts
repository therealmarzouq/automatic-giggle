import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RepoState } from "@/types";
import axios from "axios";

export const initialState: RepoState = {
  repos: [],
  error: "",
  loading: true,
};

export const getUserPublicRepos = createAsyncThunk(
  "auth/getUserPublicRepos",
  async () => {
    const response = await axios
      .get(`/api/sync/user/repos`, {
        withCredentials: true,
      })
      .then((res) => res.data);
    return response;
  }
);
const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserPublicRepos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserPublicRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.repos = action.payload;
      })
      .addCase(getUserPublicRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = reposSlice.actions;

export default reposSlice.reducer;
