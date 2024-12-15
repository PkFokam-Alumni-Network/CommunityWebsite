// filepath: /home/yanndjoumessi/Desktop/BetterEngineers/CommunityWebsite/src/api/authService.js
import axiosInstance from "./axiosInstance";

const authService = {
  login: async (credentials) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  signup: async (userData) => {
    try {
      const response = await axiosInstance.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await axiosInstance.post("/auth/logout");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
