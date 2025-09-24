
import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";


const Signup = () => {
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

      <form action="" className="mt-5">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Fullname"
            className="border border-[#32c232] outline-none px-5 rounded-lg py-2 font sm:w-[400px] w-[350px]"
          />
        </div>

        <div className="mt-3 flex items-center justify-center">
          <input
            type="text"
            placeholder="PhoneNumber"
            className="border border-[#32c232] outline-none px-5 rounded-lg py-2 font sm:w-[400px] w-[350px]"
          />
        </div>

        <div className="mt-3 flex items-center justify-center">
          <input
            type="password"
            placeholder="Password"
            className="border border-[#32c232] outline-none px-5 rounded-lg py-2 font sm:w-[400px] w-[350px]"
          />
        </div>

        <div className="mt-3 flex items-center justify-center">
          <button className="bg-[#c1fcc1] rounded-lg py-2 text-[#32c232] font font-semibold sm:w-[400px] w-[350px]">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
