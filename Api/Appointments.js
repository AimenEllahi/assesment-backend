import axios from "./Index";

export const getAppointments = (token) => {
  //console.log("checking token", token)
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios.get("appointments");
};
