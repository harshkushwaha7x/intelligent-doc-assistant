const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] || defaultValue;
  if (!value && import.meta.env.MODE === 'production') {
    console.error(`Missing required environment variable: ${key}`);
    return defaultValue || '';
  }
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const CONFIG = {
  API_URL: getEnvVar('VITE_API_URL', 'https://be1.piyushxz.online/api/v1'),
  APP_NAME: getEnvVar('VITE_APP_NAME', 'DocuChat'),
  POLLING_INTERVAL: 10000,
  REQUEST_TIMEOUT: 10000,
  MAX_FILE_SIZE: 4 * 1024 * 1024,
  IS_PRODUCTION: import.meta.env.MODE === 'production',
  IS_DEVELOPMENT: import.meta.env.MODE === 'development',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  QUERY_ROOM: '/query-room',
} as const;

export const DOCUMENT_STATUSES = {
  ACTIVE: 'active',
  ARCHIVED: 'archived',
} as const;

export const MODAL_TYPES = {
  ADD_CONTENT: 'add-content',
  DELETE: 'delete',
  CONFIRM: 'confirm',
} as const;

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'No response from server. Please check your connection.',
  GENERIC_ERROR: 'An error occurred. Please try again.',
  USER_NOT_FOUND: 'User does not exist',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNAUTHORIZED: 'Your session has expired. Please log in again.',
  REQUIRED_FIELD: 'This field is required.',
  TIMEOUT_ERROR: 'Request timed out. Please try again.',
  INVALID_FILE: 'Invalid file. Please select a valid PDF.',
} as const;
