
import { Navbar } from "../components/Navbar"
import {motion, useMotionTemplate, useMotionValue, useMotionValueEvent, useScroll} from "motion/react"
import Aboutus from "../components/Aboutus"
import { useNavigate } from "react-router-dom";
import { RefObject, useEffect, useRef } from "react";
import { useTransform } from "motion/react";
import SearchFolderIcon from "../components/icons/SearchFolderIcon";
import UploadFolderIcon from "../components/icons/UploadFolder";
import MessagesIcon from "../components/icons/MessagesIcon";
import {  CirclePlay, Rocket, Waypoints } from "lucide-react";
import { Footer } from "@/components/Footer";
import ss2 from "../assets/ss2.png"

import stars from "../assets/stars.png"
import gridline from "../assets/grid-lines.png"
import { Testimonials } from "@/components/Testimonials";
import { Features2 } from "@/components/Features2";

const usrRelativeMousePosition = (to:RefObject<HTMLElement>)=>{
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event:MouseEvent)=>{
      if(!to.current){
        return;
      }
    const {top,left} = to.current.getBoundingClientRect();
      mouseX.set(event.x - left)
      mouseY.set(event.y - top)

  }
  useEffect(()=>{
    window.addEventListener('mousemove', updateMousePosition)
  
    return()=>{
      window.removeEventListener('mousemove',updateMousePosition)
    }
  },[])
  return [mouseX,mouseY]
}

export const Landing = () => {
  const navigate = useNavigate()
  const targetRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const iconRef2 = useRef<HTMLDivElement>(null)

  const iconRef3 = useRef<HTMLDivElement>(null)


  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center", "end start"],
    axis: "y",
  });
  
  const { scrollYProgress: iconScrollYProgress } = useScroll({
    target: iconRef,
    offset: ["center", "start center"],
    axis: "y",
  });
  
  const { scrollYProgress: iconScrollYProgress2 } = useScroll({
    target: iconRef2,
    offset: ["center", "start"],
    axis: "y",
  });
  
  const { scrollYProgress: iconScrollYProgress3 } = useScroll({
    target: iconRef3,
    offset: ["center", "end start"],
    axis: "y",
  });
  



  useMotionValueEvent(sectionScrollYProgress,"change",(latest)=>console.log(latest))
  const pos = useTransform(sectionScrollYProgress,[0,1],["0px","55vh"])
  const col = useTransform(iconScrollYProgress,[0,1],["#191919","#3B82F6"])
  const col2 = useTransform(iconScrollYProgress2,[0,1],["#191919","#3B82F6"])

  const col3 = useTransform(iconScrollYProgress3,[0,1],["#191919","#3B82F6"])


  
  const sectionRef = useRef<HTMLElement>(null)
  const {scrollYProgress}=useScroll({
    target:sectionRef,
    offset:['start end','end start']
  })


 
  const backgroundPositionY = useTransform(scrollYProgress,[0,1],[-300,300])
  const borderedDivRef = useRef<HTMLDivElement>(null)
  const [mouseX, mouseY] = usrRelativeMousePosition(borderedDivRef);

  const imgMask = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;
  return (
      <div className="overflow-x-hidden  ">
        <Navbar />
        <div className="flex flex-col items-center justify-center mt-[100px]">
        <motion.div 
                 initial={{ opacity: 0, y: 0 }}
                 animate={{ opacity: 1, y: 20 }}
         transition={{ type: "spring", stiffness: 200,bounce:0.1, duration:0.4,delay:0.5,damping:15}}
        className="px-4 rounded-full  bg-blue-600/20  flex gap-2 mb-5 py-2 max-w-fit flex items-center border border-blue-600/30 ">
              <Rocket className="  size-4 text-blue-500/70" />
              <h1 className="text-sm  font-primary tracking-tighter font-medium text-blue-500/70">sanityAI beta ready to use.</h1>
            </motion.div>
                    <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{
            ease: "easeInOut",
            type: "spring",
            bounce: 0.6, 
            stiffness: 120, 
            duration: 0.5,
            delay: 0.4,
          }}
          className="w-[85vw] md:w-1/2 text-center flex flex-col items-center justify-center"
        >
          <h1 className="max-w-[600px] font-primary font-bold text-5xl md:text-7xl tracking-tighter text-center text-white">
            Just Summarize with{" "}
            <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text  text-transparent">
              sanityAI
            </span>
          </h1>
          
          <h3 className="font-primary tracking-tighter font-semibold text-lg md:text-xl mt-3 text-white opacity-80">
            Summarize, Chat, and More.
          </h3>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{
              duration: 1.5,
              delay: 0.7,
              ease: "easeInOut",
              type: "spring",
              bounce: 0.6, 
              stiffness: 120, 
 
            }}
            className="mt-6 flex gap-4"
          >
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/login')}
        className="inline-flex font-primary tracking-tighter gap-2 items-center justify-center bg-gradient-to-b from-blue-400 to-blue-700 text-white  hover:opacity-80 transition-all duration-300  rounded-md px-6 py-3 md:px-8"
      >

        <Waypoints className="size-4"/>
        Start Now
      </motion.button>
      <motion.button
    
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('https://youtu.be/47pB5RoGcyo')}

        className="inline-flex font-primary flex gap-2 tracking-tighter items-center justify-center bg-white/5 text-white border border-white/15  to-blue-700 text-black  hover:opacity-80 transition-all duration-300  rounded-md px-4 md:px-10 "
      >
        <CirclePlay className="size-4"/>
        Watch Video
      </motion.button>

          </motion.div>
        </div>
  
        <div className="mt-[50px]">
          <motion.div
            initial={{ opacity: 0, y: 0}}
            animate={{ opacity: 1, y: -20}}
            transition={{
              duration: 0.7,
              delay: 0.9,
              type: "spring",
              bounce: 0.5,
              damping:30,
              visualDuration: 1.2,
            }}
            className="flex justify-center overflow-hidden"
          >

          </motion.div>
          <div className="w-[100vw] flex justify-center bg-gradient-to-b from-black to-blue-600 via-blue-600/50">
            <motion.div 
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1,}}
                        transition={{
                          duration: 1,
                          delay: 0.7,
                          ease: "easeInOut",
                      
                        
                        }}
            className="w-[90vw] md:w-[80vw] lg:w-[70vw] border border-white/20 p-2.5 rounded-xl mt-3">
                <div style={{backgroundImage :`url(${ss2})`}}
                className="aspect-video bg-cover border border-white/20 rounded-lg">

                </div>
            </motion.div>

            </div>
                  <Features2/>

            <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-primary font-medium text-white  py-[72px]">
          How it works
        </h2>
            <div className="w-full flex justify-center py-[50px]">
  
            
          <div className="h-[70vh] md:h-[50vh] lg:h-[70vh]  bg-[#191919] w-1 rounded-lg">
           <motion.span
          ref = {targetRef}
           style={{y:pos


           }}
          
          className="h-30  w-1 mb-[500px] absolute rounded-lg bg-gradient-to-b from-blue-400 to-blue-700  rounded-full drop-shadow-xl shadow-[0_0_30px_3px_rgba(0,123,255,0.8)]">

            
          </motion.span> 

  
          <div className="">

          <motion.div
          ref={iconRef}
          style={{ color: col }}
          className="absolute mb-6  -translate-x-38">
            <SearchFolderIcon className="text-inherit size-28" />
          </motion.div>
   
          <div className="w-40 h-24 mt-8 translate-x-4 ">
            <span className="rounded-full font-primary bg-[#3B82F6] px-4 py-2 text-white ">1</span>
            <h1 className="font-primary tracking-tighter font-normal text-xl text-white px-2 mt-4">Select a PDF</h1>
            <h1 className="font-primary tracking-tighter font-normal text-md text-white/50 px-2">Select a PDF you want to chat with.</h1>

          </div>

          </div>
          <div className="translate-y-20">
          <motion.div
          ref={iconRef2}
          style={{ color: col2 }}
          className="absolute mb-6  translate-x-8">
            <UploadFolderIcon className="text-inherit size-28" />
          </motion.div>

          <div className="w-40 h-24 mt-8 -translate-x-38 ">
            <span className="rounded-full font-primary bg-[#3B82F6] px-4 py-2 text-white ">2</span>
            <h1 className="font-primary tracking-tighter font-normal text-xl text-white px-2 mt-4">Upload </h1>
            <h1 className="font-primary tracking-tighter font-normal text-md text-white/50 px-2">Upload your PDF with one click.</h1>

          </div>

          </div>
          <div className="translate-y-36">
          <motion.div
          ref={iconRef3}
          style={{ color: col3 }}
          className="absolute mb-6  -translate-x-38">
            <MessagesIcon className="text-inherit size-28" />
          </motion.div>

          <div className="w-40 h-24 mt-8 translate-x-4 ">
            <span className="rounded-full font-primary bg-[#3B82F6] px-4 py-2 text-white ">3</span>
            <h1 className="font-primary tracking-tighter font-normal text-xl text-white px-2 mt-4">Chat</h1>
            <h1 className="font-primary tracking-tighter font-normal text-md text-white/50 px-2">Ask any question you want.</h1>

          </div>

          </div>
          
          </div>


      </div>


      
          <div className="w-full flex justify-center pt-10 ">
              <section 
              ref={sectionRef}
              className="py-20  w-[90vw]  md:w-[70vw]">
                <motion.div
                ref={borderedDivRef}
                animate={{
                  backgroundPositionX:"400px"
                }}
                transition={{
                    repeat:Infinity,
                    duration:40,
                    ease:'linear'
                }}
                 style={{backgroundPositionY,backgroundImage:`url(${stars})`}}
                 className="border border-white/15 py-24 rounded-xl overflow-hidden relative group ">
                    <div style={{backgroundImage:`url(${gridline})`}} className="absolute inset-0 bg-[rgba(0,48,135,1)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at+50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700">                    </div>
                    <motion.div
                     style={{maskImage:imgMask,backgroundImage:`url(${gridline})`}} className="absolute inset-0 bg-[rgba(0,48,135,1)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_0px_0px,black,transparent)] opacity-0 group-hover:opacity-100 duration-700">                    </motion.div>

                    <div className="relative">
                    <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tight text-center text-white font-primary font-medium">
                Document, Summarize, and More
              </h2>                        <p className="text-center text-lg md:text-xl  max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tighter font-primary ">Achieve clear , impactful results without the complexity.</p>
                        <div className="flex justify-center mt-8">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/login')}
                            className="inline-flex font-primary tracking-tighter items-center justify-center bg-gradient-to-b from-blue-400 to-blue-700 text-white font-normal hover:opacity-80 transition-all duration-300 h-11 rounded-md px-6 md:px-10"
                          >
                            Start Now
                          </motion.button>
                        </div>
                    </div>

                </motion.div>
              </section>


          </div>


          
           <div className="w-full flex justify-center">
           <Testimonials/>

           </div>



          <div id="about-us ">
            <Aboutus />
          </div>

          
        </div>
        <Footer/>
      </div>
    );
  };