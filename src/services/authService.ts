import apiClient from './apiClient';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface SignupRequest {
  username: string;
  password: string;
  email?: string;
}

export interface AuthResponse {
  username: string;
  token: string;
  message?: string;
}

/**
 * Secure storage for authentication tokens
 * Uses sessionStorage for better security (cleared on tab close)
 * Falls back to localStorage if needed
 */
const TOKEN_STORAGE_KEY = 'auth_token';
const USE_SESSION_STORAGE = true; // Use sessionStorage for better security

const getStorage = () => USE_SESSION_STORAGE ? sessionStorage : localStorage;

export const authService = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post('/user/signin', credentials);
    return response.data;
  },

  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    const response = await apiClient.post('/user/signup', data);
    return response.data;
  },

  logout: () => {
    const storage = getStorage();
    storage.removeItem(TOKEN_STORAGE_KEY);
    // Invalidate the token on the server if needed
    apiClient.post('/user/logout').catch(() => {
      // Ignore errors on logout
    });
  },

  getToken: (): string | null => {
    const storage = getStorage();
    return storage.getItem(TOKEN_STORAGE_KEY);
  },

  setToken: (token: string) => {
    // Validate token format before storing
    if (!token || typeof token !== 'string') {
      throw new Error('Invalid token format');
    }
    const storage = getStorage();
    storage.setItem(TOKEN_STORAGE_KEY, token);
  },

  isTokenExpired: (): boolean => {
    const token = authService.getToken();
    if (!token) return true;
    
    try {
      // Basic token validation (decode JWT if needed)
      const parts = token.split('.');
      if (parts.length !== 3) return true;
      
      // In a real app, you'd decode and check the exp claim
      return false;
    } catch {
      return true;
    }
  },
};
