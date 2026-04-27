import apiClient from './apiClient';
<<<<<<< HEAD
import { API_ENDPOINTS } from '../constants';
=======
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11

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
<<<<<<< HEAD
    const response = await apiClient.get(API_ENDPOINTS.DOCUMENTS);
=======
    const response = await apiClient.get('/documents');
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
    return response.data;
  },

  getFavoriteDocuments: async (): Promise<DocumentsResponse> => {
<<<<<<< HEAD
    const response = await apiClient.get(API_ENDPOINTS.FAVOURITE);
=======
    const response = await apiClient.get('/favourite');
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
    return response.data;
  },

  uploadDocument: async (formData: FormData): Promise<Document> => {
<<<<<<< HEAD
    const response = await apiClient.post(API_ENDPOINTS.UPLOAD, formData, {
=======
    const response = await apiClient.post('/documents/upload', formData, {
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  deleteDocument: async (documentId: string): Promise<{ message: string }> => {
<<<<<<< HEAD
    const response = await apiClient.delete(`${API_ENDPOINTS.DOCUMENTS}/${documentId}`);
=======
    const response = await apiClient.delete(`/documents/${documentId}`);
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
    return response.data;
  },

  queryDocument: async (
    documentId: string,
    query: string
  ): Promise<{ response: string }> => {
<<<<<<< HEAD
    const response = await apiClient.post(`${API_ENDPOINTS.DOCUMENTS}/${documentId}/query`, {
=======
    const response = await apiClient.post(`/documents/${documentId}/query`, {
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
      query,
    });
    return response.data;
  },
};
