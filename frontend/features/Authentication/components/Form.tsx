import { Loader } from "lucide-react";
import { ReactNode } from "react";

interface Props{
    children:ReactNode;
    handleSubmit: (e:React.FormEvent<HTMLFormElement>)=>void
    btnText:string
    isLoading: boolean
}
const Form = ({children,handleSubmit,btnText, isLoading}:Props) => {
    return ( 
        <form onSubmit={(e)=>handleSubmit(e)} 
        className="w-full sm:w-[500px] p-2 flex flex-col gap-4 items-center justify-center">
            {children}
            <button 
            type="submit"
            className=" w-full border border-green-300/50 bg-green-300 hover:bg-green-300/50 rounded-lg font-bold text-base capitalize text-white py-2 px-1 cursor-pointer flex items-center justify-center gap-2  "
            >
                {isLoading?(
                    <Loader className="h-5 w-5 animate-spin " />
                ):(
                    <span>
                        {btnText}
                    </span>
                )}
            </button>
        </form>
     );
}
 
export default Form;