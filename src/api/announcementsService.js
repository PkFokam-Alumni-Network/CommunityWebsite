import axiosInstance from "./axiosInstance";
import { handleError } from "../utils/error";

const announcementsService = {
  getAnnouncements: async () => {
    try {
      const response = await axiosInstance.get(`/announcements`);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};

export default announcementsService;
