import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000",// here axios use for #_______________________________________
  //An Axios instance is a customized version of Axios with default settings 
  // (like base URL, headers, tokens, etc.) pre-configured. Instead of repeating those settings every time, 
  // you configure them once.
  withCredentials: true,             // allows cookies if you ever switch to them
});

export default api;
