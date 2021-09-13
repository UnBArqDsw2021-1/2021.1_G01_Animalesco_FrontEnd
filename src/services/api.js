import axios from "axios";

const api = axios.create({
  baseURL: "http://0.0.0.0:8000/api/v1",
});

export default api;
