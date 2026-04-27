<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isHistoryLoading } from "../atoms";
import { API_ENDPOINTS } from "../constants";
import apiClient from "../services/apiClient";
import { toast } from "sonner";

export const useHistory = ({ roomId }: { roomId: string | undefined }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const setIsHistoryLoading = useSetRecoilState(isHistoryLoading);

  useEffect(() => {
    (async () => {
      if (!roomId) {
        setLoading(false);
        setIsHistoryLoading(false);
        return;
      }

      try {
        const response = await apiClient.get(`${API_ENDPOINTS.HISTORY}/${roomId}`);
        setHistory(response.data.messages);
      } catch (error) {
        console.error('Failed to load chat history:', error);
        toast.error('Failed to load chat history');
      } finally {
        setLoading(false);
        setIsHistoryLoading(false);
      }
    })();
  }, [roomId]);

  return { history, loading };
};
=======
import axios from "axios"
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isHistoryLoading } from "../atoms";

export const useHistory =  ({roomId}:{
    roomId:string | undefined
})=>{

    const [history,setHistory] = useState([])
    const [loading,setLoading]= useState(true)
    const setIsHistoryLoading = useSetRecoilState(isHistoryLoading)

    useEffect(()=>{
        
        (async ()=>{

            try{
                const response = await axios.get(`https://be1.piyushxz.online/api/v1/history/${roomId}`,{
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                });
        
                setHistory(response.data.messages)
                setLoading(false)
                setIsHistoryLoading(false)
            }
            catch(e){
                // Error handled by parent component
            }
        
        })()


    },[])

    return {history,loading}





}
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
