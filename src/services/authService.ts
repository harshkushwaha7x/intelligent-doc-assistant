import apiClient from './apiClient';
<<<<<<< HEAD
import { API_ENDPOINTS, TOKEN_STORAGE_KEY } from '../constants';
import { AuthenticationError, ValidationError } from '../types/errors';
=======
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11

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

<<<<<<< HEAD
export const authService = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post(API_ENDPOINTS.SIGNIN, credentials);
=======
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
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
    return response.data;
  },

  signup: async (data: SignupRequest): Promise<AuthResponse> => {
<<<<<<< HEAD
    const response = await apiClient.post(API_ENDPOINTS.SIGNUP, data);
=======
    const response = await apiClient.post('/user/signup', data);
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
    return response.data;
  },

  logout: () => {
<<<<<<< HEAD
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
    apiClient.post(API_ENDPOINTS.LOGOUT).catch(() => {
=======
    const storage = getStorage();
    storage.removeItem(TOKEN_STORAGE_KEY);
    // Invalidate the token on the server if needed
    apiClient.post('/user/logout').catch(() => {
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
      // Ignore errors on logout
    });
  },

  getToken: (): string | null => {
<<<<<<< HEAD
    return sessionStorage.getItem(TOKEN_STORAGE_KEY);
  },

  setToken: (token: string) => {
    if (!token || typeof token !== 'string') {
      throw new ValidationError('Invalid token format');
    }
    sessionStorage.setItem(TOKEN_STORAGE_KEY, token);
=======
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
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
  },

  isTokenExpired: (): boolean => {
    const token = authService.getToken();
    if (!token) return true;
    
    try {
<<<<<<< HEAD
      const parts = token.split('.');
      if (parts.length !== 3) return true;
      
=======
      // Basic token validation (decode JWT if needed)
      const parts = token.split('.');
      if (parts.length !== 3) return true;
      
      // In a real app, you'd decode and check the exp claim
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
      return false;
    } catch {
      return true;
    }
  },
};
