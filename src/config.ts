export const CONFIG = {
  API_URL: import.meta.env.VITE_API_URL || 'https://be1.piyushxz.online/api/v1',
  POLLING_INTERVAL: 10000, // 10 seconds
  REQUEST_TIMEOUT: 10000,
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  QUERY_ROOM: '/query-room',
};

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
};
