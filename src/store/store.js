import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import alumniUsersReducer from "../features/alumniUsersSlice";
import announcementsReducer from "../features/announcementsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    alumniUsers: alumniUsersReducer,
    announcements: announcementsReducer,
  },
});

export default store;
