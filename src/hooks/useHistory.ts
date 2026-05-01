import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isHistoryLoading } from "../atoms";
import { API_ENDPOINTS } from "../constants";
import apiClient from "../services/apiClient";
import { toast } from "sonner";
import { Message } from "../atoms";

export const useHistory = ({ roomId }: { roomId: string | undefined }) => {
  const [history, setHistory] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const setIsHistoryLoading = useSetRecoilState(isHistoryLoading);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      if (!roomId) {
        setLoading(false);
        setIsHistoryLoading(false);
        return;
      }

      try {
        const response = await apiClient.get(`${API_ENDPOINTS.HISTORY}/${roomId}`);
        if (isMounted) {
          setHistory(response.data.messages);
        }
      } catch (error) {
        console.error('Failed to load chat history:', error);
        if (isMounted) {
          toast.error('Failed to load chat history');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          setIsHistoryLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [roomId, setIsHistoryLoading]);

  return { history, loading };
};
