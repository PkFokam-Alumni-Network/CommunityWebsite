import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../api/authService";

// export const signupUser = createAsyncThunk(
//   "auth/signupUser",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post("/auth/signup", formData);
//       // Check if the response is successful
//       if (response.status_code.toString().startsWith("4")) {
//         return rejectWithValue(response.detail);
//       }
//       return response.data.payload;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await authService.login(formData);

      // Return the data to the user
      return {
        accessToken: response.access_token,
        tokenType: response.token_type,
      };
    } catch (error) {
      return rejectWithValue(error);
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
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.tokenType = null;
      // Remove the token from local storage
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        // Set the access token and type
        const { accessToken, tokenType } = action.payload;
        state.accessToken = accessToken;
        state.tokenType = tokenType;
        state.isAuthenticated = true;

        // Store the token in local storage
        localStorage.setItem("token", `${tokenType} ${accessToken}`);
      })
      .addCase(loginUser.rejected, (state) => {
        state.isAuthenticated = false;
      });
  },
});

/**
 * Action creators generated from the slice.
 *
 * @type {Object}
 * @property {Function} login - Action creator for logging in a user.
 * @property {Function} logout - Action creator for logging out a user.
 */
export const { login, logout } = authSlice.actions;

/**
 * The reducer function for the auth slice.
 *
 * @type {Function}
 */
export default authSlice.reducer;
