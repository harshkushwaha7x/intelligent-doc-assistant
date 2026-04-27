import { motion } from "motion/react"
import { SidebarCloseIcon } from "./icons/SidebarCloseIcon";
import { useSetRecoilState } from "recoil";
import { activeSidebarOption, showIsArchivedDocuments, sidebarOpen } from "../atoms";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./DropdownMenu";
import { LogOut } from "lucide-react";
import HomeIcon from "./icons/HomeIcon";
import FavoritesIcon from "./icons/FavourtieIcon";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const setIsSidebarOpen = useSetRecoilState(sidebarOpen);
    const navigate = useNavigate()
    const location = useLocation()
    const setSidebarOption = useSetRecoilState(activeSidebarOption)
    const setShowArchivedDocuments = useSetRecoilState(showIsArchivedDocuments)
  return (
    <>

      <div className="flex item z-50">
      <motion.div
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.2, ease: "easeInOut" }}
       className="p-2 z-50 fixed md:relative border-b border-gray-400/10 md:border-gray-400/30  ">
        <SidebarCloseIcon onClick={() => setIsSidebarOpen((val) => !val)} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: "easeInOut" }}
        className="w-full fixed md:relative flex justify-center items-center border-b border-gray-400/30 z-49 bg-black py-3"
      >
        <div className="w-[70vw] md:w-[80vw] flex justify-between items-center">
          <h1 className="font-primary font-extrabold text-3xl tracking-tighter bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
            sanityAI
          </h1>


        <DropdownMenu >
        <DropdownMenuTrigger className="focus:outline-none">
        <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user text-white size-4"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#191919] border-gray-600/40 z-100">
        <DropdownMenuItem onClick={()=>{navigate('/dashboard')
                            if(location.pathname !=='dashboard'){
                                navigate('/dashboard')
        
                            }
            setSidebarOption({option:'home'})
            setShowArchivedDocuments(false)
        }}
         className="w-full flex gap-1 w-full  rounded-sm px-2 py-1.5 text-md outline-none text-white  transition-colors  hover:bg-gray-800 rounded-lg transition-all ease-in-out cursor-pointer">
                            <HomeIcon className="size-6 text-inherit"/>
                            <span className="font-primary font-normal text-md  tracking-tighter text-inherit ">Home</span>
                    
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>{
                    if(location.pathname !=='dashboard'){
                        navigate('/dashboard')

                    }
                    setSidebarOption({option:'home'})
                    setShowArchivedDocuments(false)
                }}
                 className="w-full flex gap-1 w-full  rounded-sm px-2 py-1.5 text-md outline-none text-white  transition-colors  hover:bg-gray-800 rounded-lg transition-all ease-in-out cursor-pointer">
                            <FavoritesIcon className="size-6 text-inherit"/>
                            <span className="font-primary font-normal text-md  tracking-tighter text-inherit ">Favourite</span>
                    
                </DropdownMenuItem>
                <DropdownMenuSeparator
                 className="bg-gray-600/30" />
                <DropdownMenuItem  onClick={()=>{
                    localStorage.removeItem("token")
                    navigate('/')
                }}
                 className="w-full flex gap-1 w-full  rounded-sm px-2 py-1.5 text-md outline-none text-white hover:text-red-600 transition-colors  hover:bg-gray-800 rounded-lg transition-all ease-in-out cursor-pointer">
                            <LogOut className="size-6 text-inherit"/>
                            <span className="font-primary font-normal text-md tracking-tighter text-inherit ">Logout</span>
                    
                </DropdownMenuItem>
                </DropdownMenuContent>

        </DropdownMenu>

        </div>
      </motion.div>
      </div>

    </>
  );
};
