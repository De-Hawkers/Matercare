'use client'
import SideBar from "@/components/sidebar";
import TopNav from "@/components/topNav";
import { toggleNav } from "@/lib/redux/slice/navSlice";
import { RootState } from "@/lib/redux/store";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

const Layout = ({children}:{children:ReactNode}) => {
    const nav = useSelector((state:RootState)=>state.nav.nav)
    const dispatch = useDispatch()
    const pathname = usePathname()
    return ( 
        <div className="flex w-full items-start justify-start h-screen  ">
            <div 
            className={` ${nav?"-translate-x-0 md:translate-none  ":" -translate-x-full md:translate-none "} h-screen flex items-start justify-between duration-300 tranform transition-all absolute inset-0 md:static w-full md:w-fit backdrop-blur md:backdrop-blur-none bg-black/20 md:bg-transparent  `}>
                <SideBar />
                <div className="p-3 md:hidden">
                    <div 
                    onClick={()=>dispatch(toggleNav(false))}
                    className=" md:hidden bg-white cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-lg shadow ">
                        <X  />
                    </div>
                </div>
            </div>
            <div className="h-full w-full overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar ">
                <TopNav
                name={"sarah johnson"}
                date={Date()}
                week={28}
                page={pathname.split("/")[1]} 
                 />
                {children}
            </div>
        </div>
     );
}
 
export default Layout;