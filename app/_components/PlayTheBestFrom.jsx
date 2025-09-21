"use client"
import { use, useState } from "react"
import { AppContext } from "../_context/appContext"
import { useParams } from "next/navigation"
import Categories from "./categories"
import ListenItem from "./listenItem"

export default function PlayTheBestFrom() {
    const [ListenItemState,setListenItemState]=useState(null)
    const {soundCollection}=use(AppContext)
    const params=useParams()
    const FsoundCollection=soundCollection.filter((item)=>item.category==params.ctr)
    console.log(FsoundCollection.length)
    
   return <div className="w-full h-fit py-5 items-center  flex flex-wrap gap-4">


{FsoundCollection.length==0?<span className="flex text-2xl text-gray-400 w-full justify-center items-center"> Hmm... looks like this one is empty </span>:<>{FsoundCollection.map((el,i)=> <Categories Open={()=>setListenItemState(el)}  img="/disc.jpg" tittle={el.name} audio={el.audio} key={i}/>)}
</>}

   {ListenItemState&&<ListenItem sound={ListenItemState} close={()=>setListenItemState(null)}/>}
   </div>
}