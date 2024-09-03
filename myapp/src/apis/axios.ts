import axios from 'axios';

export const API_BASE_URL = process.env.VITE_BASE_API_URL;

// Public instance: 토큰 없이 호출
export const publicInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Private instance: 토큰이 필요한 요청 처리
export const privateInstance = axios.create({
  baseURL: API_BASE_URL,
});

privateInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
