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

    console.log(history)
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
                console.log(e)
            }
        
        })()


    },[])

    return {history,loading}





}