import axios from "./Index";

export const login = ({username, password}) => {
  console.log(username);
  console.log(password);
  return axios.post("login", { username, password });
};

export const refreshToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios.post("refresh-token");
};
