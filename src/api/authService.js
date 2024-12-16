import axiosInstance from "./axiosInstance";
import { handleError } from "../utils/error";

const authService = {
  login: async (credentials) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  signup: async (userData) => {
    try {
      const response = await axiosInstance.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  logout: async () => {
    try {
      const response = await axiosInstance.post("/auth/logout");
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },
};

export default authService;
