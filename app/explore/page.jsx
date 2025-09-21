"use client"
import { use } from "react"
import { AppContext } from "../_context/appContext"
import { useParams } from "next/navigation"
import Categories from "../_components/categories"

export default function Explore() {
    const {soundCollection}=use(AppContext)
    console.log(soundCollection)
    const params=useParams()
    const FsoundCollection=soundCollection.filter((item)=>item.category==params.ctr)
    console.log(FsoundCollection)
    
   return <div className="w-full h-screen  bg-amber-300  py-5 items-center  flex flex-wrap gap-4">
    {FsoundCollection.map((el,i)=> <Categories img="/disc.jpg" tittle={el.name} key={i}/>)}
   
   </div>
}