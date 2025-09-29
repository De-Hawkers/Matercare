"use client"
import { Bell, FileWarning, Folder, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const SideBar = () => {
    const links:{link: string,text:string,icon:ReactNode}[] = [
        {link: "/dashboard",text:"dashboard",icon: <LayoutDashboard size={20} /> },
        {link: "/record",text:"record",icon: <Folder size={20} /> },
        {link: "/reminder",text:"Reminder",icon: <Bell size={20} /> },
        {link: "/emergency",text:"emergency",icon: <FileWarning size={20} /> },
    ]
    const pathname = usePathname()
    return ( 
        <div className="h-full bg-white w-[60%] md:w-[300px] flex flex-col items-start justify-start gap-4 p-3 border-r-green-300 border-r ">
            <p className="">
                <Image 
                src={'/matercare.jpg'}
                alt="logo"
                width={200}
                height={300}
                className=""
                />
            </p>
            <nav className="w-full flex flex-col gap-3 items-center justify-center ">
                {links.map((link,index)=>(
                    <Link 
                    href={link.link} 
                    key={index}
                    className={` ${pathname===link.link?"bg-green-300 text-white ":""} hover:bg-green-300 hover:text-white text-sm capitalize rounded-lg flex items-center justify-start w-full gap-1 p-3 `}
                    >
                        {link.icon}
                        <span className="">
                            {link.text}
                        </span>
                    </Link>
                ))}
            </nav>
        </div>
     );
}
 
export default SideBar;