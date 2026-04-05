import axios from "axios";

const API = axios.create({
  baseURL: "https://task-management-4rdf.onrender.com",
});

// GET
export const getTasks = async () => {
  const res = await API.get("/");
  return res.data;
};

// CREATE
export const createTask = async (data) => {
  const res = await API.post("/", data);
  return res.data;
};

// UPDATE
export const updateTask = async (id, data) => {
  const res = await API.put(`/${id}`, data);
  return res.data;
};

// DELETE
export const deleteTask = async (id) => {
  const res = await API.delete(`/${id}`);
  return res.data;
};