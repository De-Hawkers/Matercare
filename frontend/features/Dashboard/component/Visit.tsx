import { CheckCircle2, X } from "lucide-react";
import { ReactNode } from "react";

interface Prop{
    icon: ReactNode
    title: string
    header: string
    desc?: string
    completed: boolean
    location?: string
}
const Visit = ({icon,title,header,desc,completed,location}:Prop) => {
    return ( 
        <div className=" w-full h-[184px] shadow border border-[#e4e4e4] rounded-md flex flex-col gap-2 items-start justify-center p-3 ">
            <div className="flex items-center justify-between gap-3 w-full ">
                <div className={` ${completed?"text-green-300":"text-red-300"} flex gap-2 items-center justify-start `} >
                    {icon}
                    <p className="">
                        {header}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center ">
                <h2 className=" font-semibold text-xl  ">
                    {title}
                </h2>
                {desc&&<p className="text-sm">
                    {desc}
                </p>}
                {location&&<p className="text-sm">
                    {location}
                </p>}
            </div>
            {completed?(
                <div className=" text-green-300 p-1 text-xs rounded-full w-fit h-[39px] flex items-center justify-start gap-1 border border-green-300 ">
                    <CheckCircle2 />
                    completed
                </div>
            ):(
                <div className=" text-red-300 p-1 text-xs rounded-full w-fit h-[39px] flex items-center justify-start gap-1 border border-red-300">
                    <X />
                    upComing
                </div>
            )}
        </div>
     );
}
 
export default Visit;