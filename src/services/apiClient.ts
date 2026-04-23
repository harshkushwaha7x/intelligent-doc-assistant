import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://be1.piyushxz.online/api/v1';

// CSRF Token storage
const CSRF_TOKEN_KEY = 'x-csrf-token';
const getCsrfToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(CSRF_TOKEN_KEY);
  }
  return null;
};

const apiClient = axios.create({
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
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add CSRF token for state-changing requests
    const csrfToken = getCsrfToken();
    if (csrfToken && ['post', 'put', 'delete', 'patch'].includes(config.method || '')) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }

    // Add Content-Type if not multipart
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling and token refresh
apiClient.interceptors.response.use(
  (response) => {
    // Store CSRF token from response if provided
    const csrfToken = response.headers['x-csrf-token'];
    if (csrfToken && typeof window !== 'undefined') {
      sessionStorage.setItem(CSRF_TOKEN_KEY, csrfToken);
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Clear tokens on unauthorized
      const storage = typeof window !== 'undefined' && sessionStorage ? sessionStorage : localStorage;
      storage.removeItem('auth_token');
      sessionStorage.removeItem(CSRF_TOKEN_KEY);
      // Redirect to login
      window.location.href = '/login';
    }
    
    if (error.response?.status === 403) {
      // CSRF token invalid, clear it
      sessionStorage.removeItem(CSRF_TOKEN_KEY);
    }

    return Promise.reject(error);
  }
);

export default apiClient;

