import { useNavigate } from "react-router-dom"
import pdf from "../assets/pdf-svgrepo-com.svg"
import { Button } from "./Button"
import ChatIcon from "./icons/ChatIcon"
import DeleteIcon from "./icons/DeleteIcon"
import FavoritesIcon from "./icons/FavourtieIcon"
import { useSetRecoilState } from "recoil"
import { activeDocumentData, activeSidebarOption, isDeleteModalOpen } from "../atoms"
import { toast } from "sonner"
import axios from "axios"

export const PDFCard = ({pdfName,documentId,isArchived}:{
    pdfName:string,
    documentId : string,
    isArchived:boolean
}) =>{


    const navigate = useNavigate()
    const setSideBarOption = useSetRecoilState(activeSidebarOption)
    const setActiveDocData = useSetRecoilState(activeDocumentData)
    const setDelModal = useSetRecoilState(isDeleteModalOpen)

    const handleAddToFavouriteClick = async () => {
        try {
            console.log(documentId);
            
            const response = await toast.promise(
                 axios.post('https://be1.piyushxz.online/api/v1/favourite', {
                    document: documentId},
                    {
                        headers:{
                            Authorization:localStorage.getItem("token")
                        }
                    
                }),
                {
                    loading: isArchived ?`Removing ${pdfName} from your favourites`: `Adding ${pdfName} to your favourites`,
                    success:isArchived ?`Removed ${pdfName} from your favourites`: `Added ${pdfName} to your favourites`,
                    error: isArchived ? `Could not remove ${pdfName} from your favourites`:`Could not add ${pdfName} to your favourites`
                }
            );
    
            console.log(response)
        } catch (err) {
            console.log(err);
        }
    };
    
    return(
        <div className="w-80  border border-gray-200/20 rounded-lg">
            <div className="flex justify-end">
                <div className="flex gap-2 p-2 absolute">
                    <div onClick={handleAddToFavouriteClick}>
                    <FavoritesIcon isArhived={isArchived}/>

                    </div>
                    <div onClick={()=>{setDelModal(true)
                        setActiveDocData({documentId:documentId,documentName:pdfName})
                    }}>
                    <DeleteIcon />

                    </div>
                </div>
            </div>
        <div className="h-40 border-b border-gray-200/20 flex justify-center items-center">
            <img src={pdf} alt="PDF icon" className="w-[80%] h-[80%]" />
        </div>
        <div className="p-2">
            <div>
                <h3 className="text-wrap text-sm font-bold capitalize font-primary tracking-tighter md:text-lg">
                    {pdfName}
                </h3>
            </div>
            <div className="flex gap-2 mt-2">
                <Button text="Chat" onClick={()=>{navigate(`/${documentId}`)
                        setActiveDocData({documentId:documentId,documentName:pdfName})
                        setSideBarOption({option:"doc"})
                    }} size="lg" variant="secondary" leftIcon={<ChatIcon/>} />
            </div>
        </div>
    </div>
    )
}