import axiosInstance from "./axiosInstance";
import { handleError } from "../utils/error";

const alumniUsersService = {
  getUsers: async () => {
    try {
      const response = await axiosInstance.get(`/users`);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};

export default alumniUsersService;
