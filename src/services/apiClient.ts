import axios from 'axios';
<<<<<<< HEAD
import { CONFIG } from '../config';
import { TOKEN_STORAGE_KEY, CSRF_TOKEN_KEY } from '../constants';

=======

const API_URL = import.meta.env.VITE_API_URL || 'https://be1.piyushxz.online/api/v1';

// CSRF Token storage
const CSRF_TOKEN_KEY = 'x-csrf-token';
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
const getCsrfToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(CSRF_TOKEN_KEY);
  }
  return null;
};

const apiClient = axios.create({
<<<<<<< HEAD
  baseURL: CONFIG.API_URL,
  timeout: CONFIG.REQUEST_TIMEOUT,
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem(TOKEN_STORAGE_KEY);
=======
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: true, // Include credentials (cookies) in requests
});

// Add request interceptor to include auth token and CSRF token
apiClient.interceptors.request.use(
  (config) => {
    // Get token from secure storage
    const storage = typeof window !== 'undefined' && sessionStorage ? sessionStorage : localStorage;
    const token = storage.getItem('auth_token');
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

<<<<<<< HEAD
=======
    // Add CSRF token for state-changing requests
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
    const csrfToken = getCsrfToken();
    if (csrfToken && ['post', 'put', 'delete', 'patch'].includes(config.method || '')) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }

<<<<<<< HEAD
=======
    // Add Content-Type if not multipart
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
apiClient.interceptors.response.use(
  (response) => {
=======
// Response interceptor for error handling and token refresh
apiClient.interceptors.response.use(
  (response) => {
    // Store CSRF token from response if provided
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
    const csrfToken = response.headers['x-csrf-token'];
    if (csrfToken && typeof window !== 'undefined') {
      sessionStorage.setItem(CSRF_TOKEN_KEY, csrfToken);
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
<<<<<<< HEAD
      sessionStorage.removeItem(TOKEN_STORAGE_KEY);
      sessionStorage.removeItem(CSRF_TOKEN_KEY);
=======
      // Clear tokens on unauthorized
      const storage = typeof window !== 'undefined' && sessionStorage ? sessionStorage : localStorage;
      storage.removeItem('auth_token');
      sessionStorage.removeItem(CSRF_TOKEN_KEY);
      // Redirect to login
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
      window.location.href = '/login';
    }
    
    if (error.response?.status === 403) {
<<<<<<< HEAD
=======
      // CSRF token invalid, clear it
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
      sessionStorage.removeItem(CSRF_TOKEN_KEY);
    }

    return Promise.reject(error);
  }
);

export default apiClient;

