export default function Categories({img,tittle,Open}) {
    return <div onClick={Open} className=" flex flex-col justify-center hover:animate-pulse cursor-pointer items-center">
  <>
    <div className="w-50 h-50 flex rounded-2xl justify-center  bg-amber-100  items-center">
    <img src={img} className="object-cover w-43 h-43  rounded-3xl"/>
    
    </div>
  </>
    <span className="inline-block mt-5 font-medium text-gray-50 opacity-90">{tittle} </span>
</div>
}