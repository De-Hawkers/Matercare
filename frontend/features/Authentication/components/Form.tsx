import { ReactNode } from "react";

interface Props{
    children:ReactNode;
    handleSubmit: (e:React.FormEvent<HTMLFormElement>)=>void
}
const Form = ({children,handleSubmit}:Props) => {
    return ( 
        <form onSubmit={(e)=>handleSubmit(e)} className="">
            {children}
        </form>
     );
}
 
export default Form;