"use client"
import { useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import { Lock, Mail } from "lucide-react";
import ImageComp from "@/components/Image";
interface FormProps{
    email:string;
    password:string;
}
const Login = () => {
    const initialForm:FormProps = {
        email:"",
        password:""
    }
    const [form,setForm] = useState(initialForm)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        setIsLoading(true);
        e.preventDefault();
        console.log(form);
        setTimeout(()=>{
            setIsLoading(false);
            setForm(initialForm);
        },2000)
    }
    return ( 
        <div className="flex flex-col justify-center gap-4 items-center h-screen w-full ">
            <Form
            btnText="log in"
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            >
                <ImageComp src="/pregnant-woman.png" />

                <Input 
                value={form.email}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setForm({...form,email:e.target.value})}
                label="email"
                type="email"
                name={"email"}
                required={true}
                placeholder="Enter your email"
                icon={Mail}
                />

                <Input 
                value={form.password}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setForm({...form,password:e.target.value})}
                label="password"
                type="password"
                name={"password"}
                required={true}
                placeholder="Enter your password"
                icon={Lock}
                />
            </Form>
        </div>
     );
}
 
export default Login;