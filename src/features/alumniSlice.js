import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../api/userService";

export const USERS_ACTION_TYPES = {
  getUsers: "users/getUsers",
  getUserMentees: "users/getUserMentees",
  updateUser: "users/updateUser",
  getUser: "users/getUser",
};

export const getUsers = createAsyncThunk(
  USERS_ACTION_TYPES.getUsers,
  async (_, { rejectWithValue }) => {
    try {
      const response = await userService.getUsers();

      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to get users!");
    }
  }
);

export const getUser = createAsyncThunk(
  USERS_ACTION_TYPES.getUser,
  async (user_email, { rejectWithValue }) => {
    try {
      const response = await userService.getUser(user_email);

      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to get user!");
    }
  }
);

export const getUserMentees = createAsyncThunk(
  USERS_ACTION_TYPES.getUserMentees,
  async (user_email, { rejectWithValue }) => {
    try {
      const response = await userService.getUserMentees(user_email);

      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to get user's mentees!");
    }
  }
);

export const updateUser = createAsyncThunk(
  USERS_ACTION_TYPES.updateUser,
  async ({ email, ...userData }, { rejectWithValue }) => {
    try {
      const response = await userService.updateUser(email, userData);

      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to update user!");
    }
  }
);

const alumniUsers = createSlice({
  name: "users",
  initialState: {
    users: null,
    userProfileData: null,
    usersMentees: null,
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
      })
      .addCase(getUserMentees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserMentees.fulfilled, (state, action) => {
        state.usersMentees = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUserMentees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userProfileData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default alumniUsers.reducer;
