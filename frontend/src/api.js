import axios from "axios";
//connect 
export const API = axios.create({
  baseURL: "http://localhost:5000/api"
});