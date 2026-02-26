import axios from "axios";

const API = axios.create({
  baseURL: "https://user-auth-app-mern.onrender.com/api"
});

export default API;
