import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../api/authService";

export const AUTH_ACTION_TYPES = {
  LOGIN: "auth/loginUser",
  LOGOUT: "auth/logout",
};

export const loginUser = createAsyncThunk(
  AUTH_ACTION_TYPES.LOGIN,
  async (formData, { rejectWithValue }) => {
    try {
      const response = await authService.login(formData);
      return {
        accessToken: response.access_token,
        tokenType: response.token_type,
      };
    } catch (error) {
      return rejectWithValue(error.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    accessToken: null,
    tokenType: null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.tokenType = null;
      state.error = null;
      localStorage.removeItem("token");
      sessionStorage.clear();
    },
    clearError: (state) => {
      state.error = null;
    },
    initializeAuth: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        const [tokenType, accessToken] = token.split(" ");
        state.isAuthenticated = true;
        state.accessToken = accessToken;
        state.tokenType = tokenType;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { accessToken, tokenType } = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
        state.accessToken = accessToken;
        state.tokenType = tokenType;
        localStorage.setItem("token", `${tokenType} ${accessToken}`);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { login, logout, clearError, initializeAuth } = authSlice.actions;

export default authSlice.reducer;
