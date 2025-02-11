import axiosInstance from "./axiosInstance";
import { handleError } from "../utils/error";

const authService = {
  login: async (credentials) => {
    try {
      const response = await axiosInstance.post("/login", credentials);

      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default authService;
