import apiClient from './apiClient';
import { API_ENDPOINTS } from '../constants';

export interface Document {
  id: string;
  name: string;
  createdAt?: string;
  status?: string;
}

export interface DocumentsResponse {
  documents: Document[];
}

export const documentService = {
  getDocuments: async (): Promise<DocumentsResponse> => {
    const response = await apiClient.get(API_ENDPOINTS.DOCUMENTS);
    return response.data;
  },

  getFavoriteDocuments: async (): Promise<DocumentsResponse> => {
    const response = await apiClient.get(API_ENDPOINTS.FAVOURITE);
    return response.data;
  },

  uploadDocument: async (formData: FormData): Promise<Document> => {
    const response = await apiClient.post(API_ENDPOINTS.UPLOAD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  deleteDocument: async (documentId: string): Promise<{ message: string }> => {
    const response = await apiClient.delete(`${API_ENDPOINTS.DOCUMENTS}/${documentId}`);
    return response.data;
  },

  queryDocument: async (
    documentId: string,
    query: string
  ): Promise<{ response: string }> => {
    const response = await apiClient.post(`${API_ENDPOINTS.DOCUMENTS}/${documentId}/query`, {
      query,
    });
    return response.data;
  },
};
