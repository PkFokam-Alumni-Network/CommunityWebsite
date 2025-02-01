import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import announcementsService from "../api/announcementsService";

export const ANNOUNCEMENTS_ACTION_TYPES = {
  getAnnouncements: "announcements/getAnnouncements",
};

export const getAnnouncements = createAsyncThunk(
  ANNOUNCEMENTS_ACTION_TYPES.getUsers,
  async (_, { rejectWithValue }) => {
    try {
      const response = await announcementsService.getAnnouncements();

      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to get announcements!");
    }
  }
);

const announcements = createSlice({
  name: "announcements",
  initialState: {
    announcementList: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnnouncements.fulfilled, (state, action) => {
        state.announcementList = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default announcements.reducer;
