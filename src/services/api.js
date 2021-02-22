import axios from "axios";

const api = axios.create({
  baseURL: "https://icslhback.herokuapp.com",
});

export default api;
