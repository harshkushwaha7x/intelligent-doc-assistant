import { useCallback } from 'react';
import { toast } from 'sonner';
import { AxiosError } from 'axios';

interface ErrorConfig {
  showToast?: boolean;
  logError?: boolean;
  callback?: (error: any) => void;
}

export const useErrorHandler = (config: ErrorConfig = {}) => {
  const { showToast = true, logError = true, callback } = config;

  const handleError = useCallback((error: unknown) => {
    const axiosError = error as AxiosError;

    if (logError) {
      console.error('Error:', error);
    }

    if (showToast) {
      if (axiosError?.response?.status === 401) {
        toast.error('Your session has expired. Please log in again.');
        localStorage.removeItem('token');
        window.location.href = '/login';
      } else if (axiosError?.response?.status === 403) {
        toast.error('You do not have permission to perform this action.');
      } else if (axiosError?.response?.status === 404) {
        toast.error('Resource not found.');
      } else if (axiosError?.response?.status === 500) {
        toast.error('Server error. Please try again later.');
      } else if (axiosError?.request) {
        toast.error('No response from server. Check your connection.');
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }

    if (callback) {
      callback(error);
    }
  }, [showToast, logError, callback]);

  return { handleError };
};
