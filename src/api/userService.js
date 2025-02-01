import axiosInstance from "./axiosInstance";

/**
 * User service to handle CRUD operations for users.
 */
/**
 * User service for managing user-related operations.
 */
const userService = {
  /**
   * Creates a new user.
   * @param {Object} userData - The data of the user to create.
   * @returns {Promise<Object>} The created user data.
   * @throws Will throw an error if the request fails.
   */
  createUser: async (userData) => {
    // Implementation here
  },

  /**
   * Updates a user by ID.
   * @param {string} userId - The ID of the user to update.
   * @param {Object} userData - The new data for the user.
   * @returns {Promise<Object>} The updated user data.
   * @throws Will throw an error if the request fails.
   */
  updateUser: async (userId, userData) => {
    try {
      const response = await axiosInstance.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Retrieves a user by ID.
   * @param {string} userId - The ID of the user to retrieve.
   * @returns {Promise<Object>} The retrieved user data.
   * @throws Will throw an error if the request fails.
   */
  getUser: async (userId) => {
    try {
      const response = await axiosInstance.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Deletes a user by their ID.
   *
   * @param {string} userId - The ID of the user to delete.
   * @returns {Promise<Object>} - A promise that resolves to the response data.
   * @throws {Error} - Throws an error if the request fails.
   */
  deleteUser: async (userId) => {
    try {
      const response = await axiosInstance.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Retrieves a user's mentees using the user's email.
   * @param {string} user_email - The user's email for which mentees are to be retrieved.
   * @returns {Promise<Object>} The retrieved user data.
   * @throws Will throw an error if the request fails.
   */
  getUserMentees: async (user_email) => {
    try {
      const response = await axiosInstance.get(
        `/users/${user_email}/mentees?mentor_email=${user_email}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
