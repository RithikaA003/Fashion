import axios from "axios";

const API = axios.create({
  baseURL: "https://fashion-qxuw-xxxxx.vercel.app/api/"
});

export default API;