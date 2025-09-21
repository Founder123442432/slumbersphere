"use client"

import Link from "next/link";
import Categories from "./_components/categories";
import DailySleepTip from "./_components/DailySleepTip";

const Calm_Soothing_Style=[
  {
    id:1,
    tittle:"Nature",
    description:"sounds from natural environments.",
    image:"/desktop-wallpaper-firewatch-inspired-minimalist-orange.jpg"
  },
  {
    id:2,
    tittle:"ASMR",
    description:"intended for sensory relaxation.",
    image:"/asmr.jpg"
  },
  {   id:3,
    tittle:"Night Sounds",
    description:"includes white/brown noise or mechanical hums.",
    image:"/Starry Night.jpg"
  }
]
const CTGS=[{
tittle:"ASMR",
img:"/asmr.jpg",
},
{
tittle:"Noise",
img:"/nois.jpg",
},
{
tittle:"Music",
img:"/Music.jpg",
},
{
tittle:"Everyday",
img:"/evryday.jpg",
},
{
tittle:"Sounds",
img:"/sound.jpg",
},
{
tittle:"Transport",
img:"/trn.jpg",
},
{
tittle:"Meditation",
img:"Meditation.jpg",
},
{
tittle:"Nature",
img:"/Nature.jpg",
},
]


export default function Home() {

return (
     <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-light mb-12">Welcome back, Ready To fall asleep</h1>
        
        {/* Featured Stories */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Choose one of These</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* The Whispering Woods */}
       

             {Calm_Soothing_Style.map((item)=>(
             <div key={item.tittle}>

                 <div className="group cursor-pointer">
              <div className="relative mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-800 to-teal-900 h-48">
              <img src={item.image} alt="Forest" className="absolute inset-0 w-full h-full object-cover hover:rotate-12 transition-all hover:scale-150 "/>
              </div>
              <h3 className="text-xl font-medium mb-2"> {item.tittle} </h3>
              <p className="text-slate-400 text-sm"> {item.description} </p>
            </div>
             </div>
             ))}
          </div>
        </section>

        {/* Continue Listening */}
           <section className="mb-16 h-auto">
          <h2 className="text-2xl font-medium mb-8">Categories</h2>
          <div className="flex flex-wrap  gap-4 items-center justify-center">
            {/* The Whispering Woods */}
            {CTGS.map((ctg)=> <Link href={`/listen/${ctg.tittle}`} key={ctg.tittle}><Categories img={ctg.img} tittle={ctg.tittle}  /></Link>)}
          </div>
          
        </section>
        <div className="bg-[#f8c38e] rounded-2xl mt-30 h-auto">
          <DailySleepTip/>
        </div>
      </div>
    </div>
  );
  
}
