import{motion} from "motion/react"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { activeDocumentData, isDeleteModalOpen } from "../atoms";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "./Button";
import DeleteIcon from "./icons/DeleteIcon";

export const DeleteModal = ()=>{
    const {documentId,documentName}= useRecoilValue(activeDocumentData)
    const setIsDelModalOpen = useSetRecoilState(isDeleteModalOpen)
    const handleDocumentDelete = async () => {
        try {

            setIsDelModalOpen(false)
            const response = await toast.promise(
                axios.delete(`https://be1.piyushxz.online/api/v1/documents`, {
                    headers: {
                        Authorization:
                            localStorage.getItem("token"),
                        "Content-Type": "application/json",
                    },
                    data: { documentId },
                    
                }),
                {
                    loading: "Deleting...",
                    success: () => "Document has been deleted successfully!",
                    error: "Failed to delete document. Please try again.",
                }
            );
            console.log(response); 
  
        } catch (e) {
            console.log(e); 
        }
    };
    return(
        
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}  
        exit={{ opacity: 0,scale:0.9}} 
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
    >
         <div className="w-96 bg-black  border border-gray-600/70 shadow-xl rounded-lg">
                <div className="font-primary text-xl tracking-tighter text-white font-semibold px-4 py-2 mt-2">Delete {documentName}?</div>
                <div className="font-primary text-md text-white opacity-50 font-normal px-4 ">This action cannot be undone. This will permanently remove your document  data from our servers.</div>
                <div className="flex justify-end gap-4 p-4">
                    <Button onClick={()=>setIsDelModalOpen(false)} variant="primary" size="sm" text="Cancel"/>
                    <button
                        onClick={handleDocumentDelete}
                    
                    className="flex items-center  bg-red-600 hover:bg-red-600/50 rounded-lg px-3 gap-1 py-2">
                        <DeleteIcon className="text-white size-5 "/>
                        <h1 className="text-sm font-primary text-white">Delete</h1>
                    </button>
                </div>
         </div>
        </motion.div>
    )
}