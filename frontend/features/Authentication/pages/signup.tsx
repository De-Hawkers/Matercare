
"use client"
import { assets } from "@/app/assets/assets";
import axios from "axios";
import Image from "next/image";;
import Link from "next/link";
import React, { useState } from "react";


const Signup = () => {
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);

  const baseUrl:string | undefined = process.env.NEXT_PUBLIC_API_URL;
  
  
  const HandleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
setLoading(true)
    try {
      if (!fullName || !phoneNumber || !password) {
        return alert("Please Fill in the details") 
      }

      const response = await axios.post(`${baseUrl}/api/auth/signup`,{
        fullName,
        phoneNumber,
        password
      },{
        withCredentials: true
      })
      console.log(response);
      

      if (response.status === 201) {
          alert("registration Successfull")
      } else {
        alert("an error occured")
      }

      setFullName("")
      setPhoneNumber("")
      setPassword("")
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          alert(`Error: ${error.response.data?.message || "Server error"}`);
        } else if (error.request) {
          alert("Network error: No response from server");
        } else {
          alert(`Request error: ${error.message}`);
        }
      } else if (error instanceof Error) {
        alert(`Unexpected error: ${error.message}`);
      } else {
        alert("An unknown error occurred");
      }
      
    }finally{
      setLoading(false)
    }
    
  }
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className=" md:w-[500px] w-[300px] h-[200px]">
        <Image
          src={assets.image_1}
          className="w-full h-full rounded-2xl object-cover"
          width={1000}
          height={1000}
          alt="pregnant woman"
        />
      </div>

      <div className="text-center font">
        <p className="text-3xl font-bold mt-5 mb-3">
          Welcome to Motherhood <br /> Journey
        </p>
        <span className="text-[#222222]">
          <p>Your companion for a healthy pregnancy and beyond.</p>
        </span>
      </div>

      <form onSubmit={HandleSubmit} className="mt-5">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Fullname"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
            className="border border-[#32c232] outline-none px-5 rounded-lg py-2 font sm:w-[400px] w-[350px]"
        
          />
        </div>

        <div className="mt-3 flex items-center justify-center">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
            placeholder="PhoneNumber"
            className="border border-[#32c232] outline-none px-5 rounded-lg py-2 font sm:w-[400px] w-[350px]"
          />
        </div>

        <div className="mt-3 flex items-center justify-center">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="border border-[#32c232] outline-none px-5 rounded-lg py-2 font sm:w-[400px] w-[350px]"
          />
        </div>

        <div className="mt-3 flex items-center justify-center">
          <button type="submit" className="bg-[#c1fcc1] rounded-lg py-2 text-[#32c232] font font-semibold sm:w-[400px] w-[350px]">
          {loading ? "Loading..." :  "Sign Up"}
          </button>
        </div>
      </form>
      <div>
        <p>Already Have an account? <Link className="text-blue-400 underline" href="/login"> Login</Link></p> 
      </div>
    </div>
  );
};

export default Signup;
