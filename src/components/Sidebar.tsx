import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { activeDocumentData, activeSidebarOption, showIsArchivedDocuments, sidebarOpen } from "../atoms";
import { SidebarOpenIcon } from "./icons/SidebarOpenIcon";
import HomeIcon from "./icons/HomeIcon";
import { SidebarOption } from "./SidebarOption";
import FavoritesIcon from "./icons/FavourtieIcon";
import {  motion } from "framer-motion";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DoucumentIcon } from "./icons/DocuementIcon";

export const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarOpen);
    const activeDocData = useRecoilValue(activeDocumentData);
    const setSidebarOption = useSetRecoilState(activeSidebarOption);
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const setShowArchivedDocuments = useSetRecoilState(showIsArchivedDocuments);

    return (
                    <motion.div
            animate={{ x: isSidebarOpen ? 0 : "-100%" }}
            initial={{ x: "-100%" }}
            transition={{
                type: "spring",
                bounce: 0.65,
                stiffness:200,
                damping: 20,
            }}
            className="bg-black top-0 left-0 w-70 h-screen fixed z-100 border-r border-gray-300/20"
        >
            <div className="flex px-2 py-2 items-center border-b border-gray-300/20">
                <SidebarOpenIcon onClick={() => setIsSidebarOpen(val => !val)} />
                <h3 className="text-xl font-bold tracking-tighter font-primary text-white lg:text-2xl">
                    Menu
                </h3>
            </div>

            <div>
                {id && activeDocData.documentName && (
                    <SidebarOption variant="doc" text={activeDocData.documentName} icon={<DoucumentIcon />} />
                )}
                <SidebarOption
                    onClick={() => {
                        setSidebarOption({ option: "home" });
                        setShowArchivedDocuments(false);
                        if (location.pathname !== "/dashboard") {
                            navigate("/dashboard");
                        }
                    }}
                    variant="home"
                    text="Home"
                    icon={<HomeIcon className="text-inherit" />}
                />
                <SidebarOption
                    onClick={() => {
                        if (location.pathname !== "/dashboard") {
                            navigate("/dashboard");
                            setSidebarOption({ option: "fav" });
                        }
                        setShowArchivedDocuments(true);
                    }}
                    variant="fav"
                    text="Favourite"
                    icon={<FavoritesIcon className="text-inherit" />}
                />
            </div>
        </motion.div>

    );
};
