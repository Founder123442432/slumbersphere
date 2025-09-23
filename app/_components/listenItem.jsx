"use client"
import { motion} from "framer-motion"
import { Expand } from 'lucide-react';
import Loader from "./loader";
import { Suspense, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ListenItem({close,sound,ctr,ListenItemState}){
    console.log(ctr)
    const router=useRouter()
    const SearchParams=useSearchParams()
    const pathName=usePathname()
     console.log(ListenItemState)

 
    useEffect(()=>{
        if(ListenItemState){
               const UrlParams=new URLSearchParams(SearchParams)
      UrlParams.set("play","true")
   UrlParams.set("voice",sound.name)
             router.replace(`/listen/${ctr}/?`+UrlParams.toString())
        }
       
    },[SearchParams])
    return (
          <motion.section initial={{y:1000}} animate={{y:0}}    transition={{duration:0.7,ease:"easeInOut"}}
 className="w-full  h-screen fixed left-0 top-0 bg-[#fef3c3] z-2000">
    <button onClick={close} className="w-10 z-50 flex justify-center items-center hover:scale-80 duration-700 h-10 bg-black right-5 top-5 cursor-pointer absolute"><Expand size={27} /></button>
<Suspense fallback={<Loader/>}>
        <iframe className="absolute  bottom-[40%]" src={sound.audio} scrolling="no" width="100%" height="252" frameborder="0" ></iframe>
</Suspense>
       
    </motion.section>
    )
}