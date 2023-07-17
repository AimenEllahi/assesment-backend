import axios from "./Index";

export const getAppointments = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios.get("appointments");
};
