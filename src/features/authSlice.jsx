import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

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
      const response = await axiosInstance.post("/auth/login", formData);
      console.log("THIS IS THE REPSONSE", response);
      // Check if the response is successful
      if (response.status.toString().startsWith("4")) {
        const error = new Error(response.detail);
        return rejectWithValue(error);
      }

      // Return the data to the user
      return response.data.payload;
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
    accessTokenType: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.accessTokenType = null;
      // Remove the token from local storage
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        // Set the access token and type
        const { access_token: accessToken, token_type: accessTokenType } =
          action.payload;
        state.accessToken = accessToken;
        state.accessTokenType = accessTokenType;
        state.isAuthenticated = true;
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
