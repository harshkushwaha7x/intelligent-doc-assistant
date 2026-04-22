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