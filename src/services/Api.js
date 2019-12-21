// ## Lib. Inc.
import axios from 'axios';

// ## Config Inc.
import { API_URL } from '@/config/';

export default function () {
  const axiosInstance = axios.create({
    baseURL: API_URL.BASE,
    withCredentials: false,
  });

  // ## Global error handler.
  axiosInstance.interceptors.response.use(
    response => (response),
    error => Promise.reject(error),
  );

  return axiosInstance;
}
