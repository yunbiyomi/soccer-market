import axios from "axios";
import { getCookie } from "../hooks/Cookies";

const instance = axios.create({
  baseURL: 'https://openmarket.weniv.co.kr/',
});

instance.interceptors.request.use((config) => {
  const token = getCookie('token');
  try {
    if(token){
      config.headers.Authorization = token;
    }
    return config;
  } catch (error) {
    console.error('axios.interceptors.request: ', error);
  }},
  (error) => {
    return Promise.reject(error);
  }
)

export default instance