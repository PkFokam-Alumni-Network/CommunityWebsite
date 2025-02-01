import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import alumniUsersService from "../api/alumniUsersService";

export const USERS_ACTION_TYPES = {
  getUsers: "users/getUsers",
};

export const getUsers = createAsyncThunk(
  USERS_ACTION_TYPES.getUsers,
  async (_, { rejectWithValue }) => {
    try {
      const response = await alumniUsersService.getUsers();

      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Login failed");
    }
  }
);

const alumniUsers = createSlice({
  name: "users",
  initialState: {
    users: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default alumniUsers.reducer;
