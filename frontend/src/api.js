import axios from "axios";
//connect to backend
export const API = axios.create({
  baseURL: "https://task-management-2vie.onrender.com"
});