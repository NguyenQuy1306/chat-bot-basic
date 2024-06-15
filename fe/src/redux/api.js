import axios from "axios";
const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000",
});
export const authenticate = (data) => {
  return API.post("/user/login", data);
};

export const signup = (data) => {
  return API.post("/user/signup", data);
};
