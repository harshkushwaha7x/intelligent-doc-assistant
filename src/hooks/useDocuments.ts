import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { showIsArchivedDocuments } from "../atoms";
import { API_ENDPOINTS, POLLING_INTERVAL } from "../constants";
import apiClient from "../services/apiClient";

interface Document {
  documentName: string;
  documentId: string;
  isArchived: boolean;
}

export const useDocument = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const showArchivedDocuments = useRecoilValue(showIsArchivedDocuments);
  const [isLoadingDocs, setIsLoadingDocs] = useState(false);

  const url = showArchivedDocuments
    ? API_ENDPOINTS.FAVOURITE
    : API_ENDPOINTS.DOCUMENTS;

  useEffect(() => {
    let isMounted = true;

    async function getDocuments() {
      setIsLoadingDocs(true);
      try {
        const response = await apiClient.get(url);
        if (isMounted) {
          setDocuments(response.data.documents);
        }
      } catch (error) {
        console.error('Failed to fetch documents:', error);
      } finally {
        if (isMounted) {
          setIsLoadingDocs(false);
        }
      }
    }

    getDocuments();
    const id = setInterval(getDocuments, POLLING_INTERVAL);

    return () => {
      isMounted = false;
      clearInterval(id);
    };
  }, [showArchivedDocuments, url]);

  return { documents, isLoadingDocs };
};
