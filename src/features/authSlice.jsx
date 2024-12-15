/**
 * Auth slice for managing authentication state.
 *
 * @module authSlice
 */

import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice for authentication state management.
 *
 * @typedef {Object} AuthState
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @property {Object|null} user - The authenticated user's information.
 */

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    /**
     * Action to log in a user.
     *
     * @function
     * @param {AuthState} state - The current state.
     * @param {Object} action - The action object.
     * @param {Object} action.payload - The user information.
     */
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    /**
     * Action to log out a user.
     *
     * @function
     * @param {AuthState} state - The current state.
     */
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
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
