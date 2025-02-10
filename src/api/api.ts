import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export const url: string = 'https://api.jikan.moe/v4/'

const api: AxiosInstance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'    }
});

// Request interceptor to add token to headers
api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token: string | null = localStorage.getItem('token');

        // Ensure headers exist before setting the Authorization
        if (config.headers) {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle invalid or expired token
api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response; // Pass successful responses
    },
    (error: AxiosError) => {
        if (error.response) {
            const { status, data } = error.response;

            // Check for expired or unauthorized token
            if (status === 401) {
                console.error('Token is expired or unauthorized, redirecting to login...');
            
                // Clear localStorage and redirect to login
                localStorage.clear();
                window.location.href = '/login'; // Use window.location.href to redirect
            }
            console.error('Response error:', data);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Request error:', error.message);
        }
        return Promise.reject(error); // Reject the promise to handle it in calling code
    }
);

export default api;