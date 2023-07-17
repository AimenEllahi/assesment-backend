import axios from "axios";

const api = axios.create({
  baseURL: "https://hiring-test-task.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
