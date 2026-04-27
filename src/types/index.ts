// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data: T;
  error?: string;
}

export interface Document {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  size?: number;
  status: 'active' | 'archived';
}

export interface DocumentListResponse {
  documents: Document[];
  total: number;
  page: number;
  limit: number;
}

export interface ChatMessage {
  content: string;
  sentBy: 'User' | 'Bot';
  timestamp?: string;
  isHistory?: boolean;
}

export interface QueryResponse {
  answer: string;
  sources?: string[];
  confidence?: number;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  createdAt: string;
}

// Error Types
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export interface AxiosError {
  response?: {
    status: number;
    data: {
      message: string;
      error?: string;
    };
  };
  request?: any;
  message: string;
}
