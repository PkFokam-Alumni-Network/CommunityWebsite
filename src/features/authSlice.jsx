import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../api/authService";

export const AUTH_ACTION_TYPES = {
  LOGIN: "auth/loginUser",
  LOGOUT: "auth/logout",
  GET_USERNAME: "auth/username",
};

export const loginUser = createAsyncThunk(
  AUTH_ACTION_TYPES.LOGIN,
  async (formData, { rejectWithValue }) => {
    try {
      const { access_token, token_type, ...userData } = await authService.login(formData);

      return {
        accessToken: access_token,
        tokenType: token_type,
        userData,
      };
    } catch (error) {
      return rejectWithValue(error.message || "Login failed");
    }
  }
);

export const getUsername = createAsyncThunk(
  AUTH_ACTION_TYPES.GET_USERNAME,
  async (user_email, { rejectWithValue }) => {
    try {
      const response = await authService.getUsername(user_email);

      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to get username!");
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
      localStorage.removeItem("userData");
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
        const { accessToken, tokenType, userData } = action.payload;
        state.isUserDataExists = userData && Object.keys(userData).length > 0;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
        state.accessToken = accessToken;
        state.tokenType = tokenType;
        localStorage.setItem("token", `${tokenType} ${accessToken}`);
        if (state.isUserDataExists) localStorage.setItem("userData", JSON.stringify(userData));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(getUsername.fulfilled, (state, action) => {
        let userData = action.payload ?? {};
        state.isUserDataExists = Object.keys(userData).length > 0;
        state.loading = false;
        state.error = null;
        localStorage.setItem("userData", JSON.stringify(userData));
      })
      .addCase(getUsername.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout, clearError, initializeAuth } = authSlice.actions;

export default authSlice.reducer;
