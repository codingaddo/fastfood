import React from 'react'
import { FaFacebookF,FaWhatsapp,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='flex items-center gap-3'>
        <div className='bg-slate-300 px-3 cursor-pointer py-2 text-[#fa6969] font-semibold text-xl rounded-md ease-in-out duration-200 hover:scale-[1.1]'>
            <FaFacebookF />
        </div>
        <div className='bg-slate-300 px-3 cursor-pointer py-2 text-[#fa6969] font-semibold text-xl rounded-md ease-in-out duration-200 hover:scale-[1.1]'>
             <FaWhatsapp/>
        </div>
        <div className='bg-slate-300 px-3 cursor-pointer py-2 text-[#fa6969] font-semibold text-xl rounded-md ease-in-out duration-200 hover:scale-[1.1]'>
            <FaInstagram/>
        </div>
        <div className='bg-slate-300 px-3 cursor-pointer py-2 text-[#fa6969] font-semibold text-xl rounded-md ease-in-out duration-200 hover:scale-[1.1]'>
            <FaXTwitter/>
        </div>
    </div>
  )
}

export default Socials