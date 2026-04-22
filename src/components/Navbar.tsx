import { motion } from "framer-motion";
import { PanelTopClose, PanelTopOpen } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: "easeInOut" }}
        className="w-full flex  flex-col justify-center bg-neutral-750 backdrop-blur-sm border-b border-white/15 fixed  z-50"
      >
        <div className="w-full md:w-[80vw]  flex justify-between p-3 mx-auto">
          <h1
            className="font-primary font-extrabold text-[#FDFEFF] text-3xl tracking-tighter bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate("/")}
          >
            sanityAI
          </h1>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="about-us"
              smooth={true}
              duration={500}
              className="cursor-pointer font-primary rounded-lg border border-gray-600/50 tracking-tighter transition-all duration-300 ease-in-out text-white hover:text-blue-500 font-medium text-sm px-4 py-2"
            >
              About Us
            </Link>
            <button
              className="text-white font-primary tracking-tighter transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((val) => !val)}
              className="text-white flex items-center rounded-lg text-center transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-500"
            >
              {isMenuOpen ? <PanelTopClose /> : <PanelTopOpen />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex gap-2 pb-3 mx-2 md:hidden"
            >
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white font-primary font-medium text-black dark:text-neutral-950 hover:bg-white/90 h-10 px-4 py-2 tracking-tighter"
              >
                About Us
              </Link>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium font-primary hover:opacity-80 transition-all duration-300 h-10 px-4 py-2 w-full tracking-tighter"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
