<<<<<<< HEAD
import { CONFIG } from "../config";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { showIsArchivedDocuments } from "../atoms";
import { API_ENDPOINTS, POLLING_INTERVAL } from "../constants";
import apiClient from "../services/apiClient";

export const useDocument = () => {
  const [documents, setDocuments] = useState([]);
  const showArchivedDocuments = useRecoilValue(showIsArchivedDocuments);
  const [isLoadingDocs, setIsLoadingDocs] = useState(false);

  const url = showArchivedDocuments
    ? API_ENDPOINTS.FAVOURITE
    : API_ENDPOINTS.DOCUMENTS;

  async function getDocuments() {
    setIsLoadingDocs(true);
    try {
      const response = await apiClient.get(url);
      setDocuments(response.data.documents);
    } catch (error) {
      console.error('Failed to fetch documents:', error);
    } finally {
      setIsLoadingDocs(false);
    }
  }

  useEffect(() => {
    getDocuments();

    const id = setInterval(getDocuments, POLLING_INTERVAL);

    return () => clearInterval(id);
  }, [showArchivedDocuments]);

  return { documents, isLoadingDocs };
};
=======
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { showIsArchivedDocuments } from "../atoms";



export const useDocument =  ()=>{

    const [documents,setDocuments] = useState([])
    const showArchivedDocuments = useRecoilValue(showIsArchivedDocuments)

    const  [isLoadingDocs,setIsLoadingDocs] = useState(false)

    
    const url = showArchivedDocuments ? `https://be1.piyushxz.online/api/v1/favourite` : `https://be1.piyushxz.online/api/v1/documents`


   async function getDocuments(){
    setIsLoadingDocs(true)
        const response = await axios.get(url,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        setDocuments(response.data.documents)
        setIsLoadingDocs(false)

    }
    useEffect(()=>
    {
        getDocuments()

        const id = setInterval(getDocuments,10000);

        return ()=> clearInterval(id)
    }
        ,[showArchivedDocuments])

    
    return {documents,isLoadingDocs}
}
>>>>>>> 2870c723052178e53dc60e05798d5ffa68d3fe11
