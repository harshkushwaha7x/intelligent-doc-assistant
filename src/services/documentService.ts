import apiClient from './apiClient';

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
    const response = await apiClient.get('/documents');
    return response.data;
  },

  getFavoriteDocuments: async (): Promise<DocumentsResponse> => {
    const response = await apiClient.get('/favourite');
    return response.data;
  },

  uploadDocument: async (formData: FormData): Promise<Document> => {
    const response = await apiClient.post('/documents/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  deleteDocument: async (documentId: string): Promise<{ message: string }> => {
    const response = await apiClient.delete(`/documents/${documentId}`);
    return response.data;
  },

  queryDocument: async (
    documentId: string,
    query: string
  ): Promise<{ response: string }> => {
    const response = await apiClient.post(`/documents/${documentId}/query`, {
      query,
    });
    return response.data;
  },
};
