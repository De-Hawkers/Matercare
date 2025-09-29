import { toggleNav } from "@/lib/redux/slice/navSlice"
import { Menu } from "lucide-react"
import { useDispatch } from "react-redux"

interface Prop{
    page: string
    week: number|string
    name: string
    date: string
}
const TopNav = ({page,week,name,date}:Prop) => {
    const dispatch = useDispatch()
    return ( 
        <div className="sticky top-0 bg-white/20 backdrop-blur flex items-center justify-between gap-4 p-4 border-b border-b-green-300 ">
            <div className="flex gap-2 items-center justify-center ">
                <div 
                onClick={()=>dispatch(toggleNav(true))}
                className=" md:hidden cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-lg shadow ">
                    <Menu  className=" " />
                </div>
                <h2 className="capitalize text-2xl font-medium ">
                    {page}
                </h2>
            </div>
            <div className="flex flex-wrap-reverse md:flex-nowrap gap-1 items-center justify-end ">
                <p className="w-[150px] rounded-full h-[39px] text-[#19E36B] border-[#19E36B] border flex items-center justify-center font-semibold ">
                    week {week}
                </p>
                <div className="">
                    <p className=" capitalize font-semibold text-lg  ">{name}</p>
                    <p className=" capitalize  text-sm ">
                        due: {new Date(date).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default TopNav;