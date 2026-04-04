import axios from "axios";
//connect to backend
export const API = axios.create({
  baseURL: "http://localhost:5000/api"
});