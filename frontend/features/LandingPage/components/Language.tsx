'use client'
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import { useState } from "react";

const Language = () => {
    const [selected,setSelected] = useState<string>("english")
    const [open,setOpen] = useState<boolean>(false)
    const languages:string[] = [
        "english","igbo","yoruba","hausa"
    ]
    const changeOpen = ()=>setOpen(prev=>!prev)
    return ( 
       <div className=" relative flex flex-col gap-3 items-center justify-center w-full ">
            <div onClick={changeOpen} className="w-full border border-green-300/50 rounded-lg py-2 px-1 cursor-pointer flex items-center justify-start gap-2 ">
                <Globe size={20} color="#86efac" />
                <div className="flex gap-3 items-center justify-between w-full " >
                    <p className="capitalize">
                        {selected}
                    </p>
                    {
                        open?<ChevronUp />:<ChevronDown />
                    }
                </div>
            </div>
            {open&&<div className=" absolute top-12 p-3 w-full flex flex-col gap-2 items-start justify-center h-[200px] z-30 bg-white rounded-lg shadow  ">
                {languages?.map((lang,index)=>(
                    <p 
                    onClick={()=>setSelected(lang)}
                    className={` ${selected===lang?"bg-green-300":""} w-full p-2 rounded-sm capitalize text-base cursor-pointer hover:bg-green-400`} 
                    key={index} >
                        {lang}
                    </p>
                ))}
            </div>}
       </div>
     );
}
 
export default Language;