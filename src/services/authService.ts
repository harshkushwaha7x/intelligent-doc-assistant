import apiClient from './apiClient';
import { API_ENDPOINTS, TOKEN_STORAGE_KEY } from '../constants';
import { AuthenticationError, ValidationError } from '../types/errors';

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

export const authService = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post(API_ENDPOINTS.SIGNIN, credentials);
    return response.data;
  },

  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    const response = await apiClient.post(API_ENDPOINTS.SIGNUP, data);
    return response.data;
  },

  logout: () => {
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
    apiClient.post(API_ENDPOINTS.LOGOUT).catch(() => {
      // Ignore errors on logout
    });
  },

  getToken: (): string | null => {
    return sessionStorage.getItem(TOKEN_STORAGE_KEY);
  },

  setToken: (token: string) => {
    if (!token || typeof token !== 'string') {
      throw new ValidationError('Invalid token format');
    }
    sessionStorage.setItem(TOKEN_STORAGE_KEY, token);
  },

  isTokenExpired: (): boolean => {
    const token = authService.getToken();
    if (!token) return true;
    
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return true;
      
      return false;
    } catch {
      return true;
    }
  },
};
