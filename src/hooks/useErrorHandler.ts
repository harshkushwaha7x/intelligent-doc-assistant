import { useCallback } from 'react';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { ERROR_MESSAGES } from '../config';

interface ErrorConfig {
  showToast?: boolean;
  logError?: boolean;
  callback?: (error: unknown) => void;
}

export const useErrorHandler = (config: ErrorConfig = {}) => {
  const { showToast = true, logError = true, callback } = config;

  const handleError = useCallback((error: unknown) => {
    const axiosError = error as AxiosError;

    if (logError && process.env.NODE_ENV === 'development') {
      console.error('Error:', error);
    }

    if (showToast) {
      if (axiosError?.code === 'ECONNABORTED') {
        toast.error(ERROR_MESSAGES.TIMEOUT_ERROR);
      } else if (axiosError?.response?.status === 401) {
        toast.error(ERROR_MESSAGES.UNAUTHORIZED);
        sessionStorage.clear();
        window.location.href = '/login';
      } else if (axiosError?.response?.status === 403) {
        toast.error('You do not have permission to perform this action.');
      } else if (axiosError?.response?.status === 404) {
        toast.error('Resource not found.');
      } else if (axiosError?.response?.status === 500) {
        toast.error(ERROR_MESSAGES.SERVER_ERROR);
      } else if (axiosError?.request) {
        toast.error(ERROR_MESSAGES.NETWORK_ERROR);
      } else {
        toast.error(ERROR_MESSAGES.GENERIC_ERROR);
      }
    }

    if (callback) {
      callback(error);
    }
  }, [showToast, logError, callback]);

  return { handleError };
};
