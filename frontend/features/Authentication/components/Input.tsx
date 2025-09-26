'use client'
import { LucideIcon } from "lucide-react";
import React from 'react';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  icon: LucideIcon;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  icon: Icon
}) => {
  return (
    <div className=" relative flex flex-col gap-1 items-start justify-center w-full ">
        <label htmlFor={name} className="block text-gray-700 text-sm font-bold capitalize ">
            {label}
        </label>
        <div className="w-full border border-green-300/50 rounded-lg py-2 px-1 cursor-pointer flex items-center justify-start gap-2 ">
            <Icon size={20} color="#86efac" />
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full bg-transparent focus:outline-none "
            />
        </div>
    </div>
  );
};

export default Input;