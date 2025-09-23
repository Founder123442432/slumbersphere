import PlayTheBestFrom from "@/app/_components/PlayTheBestFrom"

export const metadata={
        title:"listen"
    }
export default function CategoriePage({params}) {
    const {ctr}=params
    
    return <div className="mx-auto"> 
        <h1 className="text-2xl font-bold mt-7 ml-10"> play the best from {ctr} </h1>
        <div className="ml-10">
           <PlayTheBestFrom ctr={ctr}/> 
        </div>
        
    </div>

}