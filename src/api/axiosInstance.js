import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.apiUrl, // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

console.log(axiosInstance);
export default axiosInstance;
