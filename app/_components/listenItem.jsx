"use client"
import {AnimatePresence, motion} from "framer-motion"
import { Expand } from 'lucide-react';
import Loader from "./loader";
import { Suspense } from "react";

export default function ListenItem({close,sound}){
    console.log(sound)
    return (
          <motion.section initial={{y:1000}} animate={{y:0}} exit={{y:1000, duration:0.5,}}   transition={{duration:0.7,ease:"easeInOut"}}
 className="w-full  h-screen fixed left-0 top-0 bg-[#fef3c3] z-2000">
    <button onClick={close} className="w-10 z-50 flex justify-center items-center hover:scale-80 duration-700 h-10 bg-black right-5 top-5 cursor-pointer absolute"><Expand size={27} /></button>
<Suspense fallback={<Loader/>}>
        <iframe className="absolute  bottom-[40%]" src={sound.audio} scrolling="no" width="100%" height="252" frameborder="0" ></iframe>
</Suspense>
       
    </motion.section>
    )
}