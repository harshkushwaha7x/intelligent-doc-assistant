import { useRecoilState, useSetRecoilState } from "recoil";
import { isContentModalOpen, isFileSelected } from "../atoms";
import { motion } from "framer-motion";
import PDFUpload from "./PDFUpload";
import { Button } from "./Button";
import { toast } from "sonner";
import { CloseIcon } from "./icons/CloseIcon";
import DeleteIcon from "./icons/DeleteIcon";
import { useRef } from "react";
import { validateDocumentName, validateFile } from "../utils/validation";
import { documentService } from "../services/documentService";

export const Modal = () => {
  const setIsModalOpen = useSetRecoilState(isContentModalOpen);
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileVal, setFileVal] = useRecoilState(isFileSelected);

  const handleUploadFile = async () => {
    const fileValidation = validateFile(fileVal);
    if (!fileValidation.valid) {
      toast.error(fileValidation.error);
      return;
    }

    const nameValidation = validateDocumentName(inputRef.current?.value || '');
    if (!nameValidation.valid) {
      toast.error(nameValidation.error);
      return;
    }

    const formData = new FormData();
    formData.append("file", fileVal!);
    formData.append("documentName", inputRef.current!.value);

    try {
      await toast.promise(
        documentService.uploadDocument(formData),
        {
          loading: "Uploading...",
          success: `${inputRef.current?.value} has been added`,
          error: "Upload failed",
        }
      );

      setIsModalOpen(false);
      setFileVal(null);
    } catch (err) {
      console.error('Upload error:', err);
    }
  };
    
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }}  
      exit={{ opacity: 0, scale: 0.9 }} 
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
    >
      <div className="w-[500px] bg-black border border-gray-600/70 shadow-xl rounded-lg">
        <div className="flex justify-between p-4 border-b border-gray-600/70 items-center">
          <h1 className="text-lg font-extrabold text-white capitalize font-primary tracking-tighter md:text-xl">
            Add Document
          </h1>
          <div onClick={() => setIsModalOpen(false)}
            className="pointer-cursor p-2 hover:bg-[#191919] rounded-lg">
            <CloseIcon />
          </div>
        </div>

        <div className="mt-6 ml-6 mr-6">
          <label className="block mb-2 text-md font-medium text-white font-primary">
            Document Name
          </label>
          <input ref={inputRef}
            type="text"
            className="bg-[#191919] text-white text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mt-6 ml-6 mr-6 justify-center">
          <label className="block mb-2 text-md font-medium text-white font-primary">
            Upload Your Document:
          </label>
          {
            fileVal ? <div className="w-full bg-[#191919] flex justify-center items-center h-16 p-2 rounded-lg">
              <h5 className="font-primary text-white text-md ">    
                {fileVal.name}
              </h5>
              <div className="p-2 hover:bg-black/30 rounded-lg" onClick={() => {
                setFileVal(null)
                toast.success("File Removed")
              }}>
                <DeleteIcon className="hover:text-red-500" />
              </div>
            </div>
            :      
            <PDFUpload />
          }
        </div>
        <div className=" mx-4 my-6">
          <Button 
            variant="wide" size="wide" text="Upload" onClick={handleUploadFile} />
        </div>
      </div>
    </motion.div>
  );
};
