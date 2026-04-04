import axios from "axios";

// connect to backend (LIVE URL)
export const API = axios.create({
  baseURL: "https://task-management-wb20.onrender.com/api"
});