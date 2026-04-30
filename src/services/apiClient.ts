import axios from 'axios';
import { CONFIG } from '../config';
import { TOKEN_STORAGE_KEY, CSRF_TOKEN_KEY } from '../constants';

const getCsrfToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(CSRF_TOKEN_KEY);
  }
  return null;
};

const apiClient = axios.create({
  baseURL: CONFIG.API_URL,
  timeout: CONFIG.REQUEST_TIMEOUT,
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem(TOKEN_STORAGE_KEY);
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const csrfToken = getCsrfToken();
    if (csrfToken && ['post', 'put', 'delete', 'patch'].includes(config.method || '')) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }

    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    const csrfToken = response.headers['x-csrf-token'];
    if (csrfToken && typeof window !== 'undefined') {
      sessionStorage.setItem(CSRF_TOKEN_KEY, csrfToken);
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      sessionStorage.removeItem(TOKEN_STORAGE_KEY);
      sessionStorage.removeItem(CSRF_TOKEN_KEY);
      window.location.href = '/login';
    }
    
    if (error.response?.status === 403) {
      sessionStorage.removeItem(CSRF_TOKEN_KEY);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
