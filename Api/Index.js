import axios from "axios";

const api = axios.create({
  baseURL: "https://hiring-test-task.vercel.app/api/",
  
});

export default api;
