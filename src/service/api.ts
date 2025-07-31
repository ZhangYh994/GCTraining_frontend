import axios from 'axios';
import type { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

console.log('API Base URL:', import.meta.env.VITE_API_BASE_URL);

export default api;