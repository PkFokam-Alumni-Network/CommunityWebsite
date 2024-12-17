import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-api-base-url.com/api/v1", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
