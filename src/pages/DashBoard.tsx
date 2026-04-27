import { useRecoilValue, useSetRecoilState } from "recoil"
import { Navbar } from "../components/DashboardNavbar"
import { PDFCard } from "../components/PDFCard"
import { Sidebar } from "../components/Sidebar"
import { useDocument } from "../hooks/useDocuments"
import {  isContentModalOpen, loggedInUserName } from "../atoms"
import PlusIcon from "../components/icons/PlusIcon"
import { useEffect } from "react"

export const Dashboard = () =>{
    const {documents} = useDocument()
    const setContentOpenStatus = useSetRecoilState(isContentModalOpen)
    const username = useRecoilValue(loggedInUserName)


    useEffect(()=>{


        return()=>{
           
        }
    },[])
    return(
        <div className="">
            <Sidebar/>
            <Navbar/>
            <div className="flex  justify-center">
                <div className="lg:w-[70vw] w-[80vw]  text-white pt-14 md:pt-0">
                    <div className="flex mt-6">
                        <h3 className="text-wrap text-3xl font-extrabold  font-primary tracking-tighter md:text-4xl">
                            Welcome , {username}!
                        </h3>
                    </div>
                <div className="mt-6  relative flex flex-wrap gap-4">
                    <div onClick={()=>setContentOpenStatus(val=>!val)}
                    className="cursor-pointer w-80 h-62 border-2 border-gray-300/30 border-dashed rounded-lg flex justify-center items-center">
                        <PlusIcon size={30}/>
                    </div>

                    {

                        documents.map(({documentName,documentId,isArchived},)=>
                        <PDFCard key={documentId}  pdfName={documentName} documentId={documentId} isArchived={isArchived}/>
                        )
                    }


                </div>


                </div>
            </div>
        </div>
    )
}