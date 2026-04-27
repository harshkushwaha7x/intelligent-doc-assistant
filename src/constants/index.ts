export const POLLING_INTERVAL = 10000;
export const MAX_FILE_SIZE = 4 * 1024 * 1024;
export const TOKEN_STORAGE_KEY = 'auth_token';
export const CSRF_TOKEN_KEY = 'x-csrf-token';

export const API_ENDPOINTS = {
  SIGNIN: '/user/signin',
  SIGNUP: '/user/signup',
  LOGOUT: '/user/logout',
  DOCUMENTS: '/documents',
  FAVOURITE: '/favourite',
  UPLOAD: '/upload',
  HISTORY: '/history',
} as const;

export const MESSAGE_SENDER = {
  USER: 'User',
  BOT: 'Bot',
} as const;

export const SIDEBAR_OPTIONS = {
  HOME: 'home',
  FAVOURITE: 'fav',
  DOCUMENT: 'doc',
} as const;
