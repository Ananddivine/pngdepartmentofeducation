import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Dynamically read the URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add Authorization header dynamically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Fetch latest token
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default axiosInstance;
