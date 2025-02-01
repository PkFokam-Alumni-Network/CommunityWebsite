import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import alumniUsersReducer from '../features/alumniUsersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    alumniUsers: alumniUsersReducer,
  },
});

export default store;