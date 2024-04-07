import Link from 'next/link';
import React from 'react'
import { FaFacebookF,FaWhatsapp,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='flex items-center gap-3'>
        <Link href={''} target='_blank' className='bg-slate-300 px-3 cursor-pointer py-2 text-[#fa6969] font-semibold text-xl rounded-md ease-in-out duration-200 hover:scale-[1.1]'>
            <FaFacebookF />
        </Link>
        <Link href={'https://wa.me/+15197254996'} target='_blank' className='bg-slate-300 px-3 cursor-pointer py-2 text-[#fa6969] font-semibold text-xl rounded-md ease-in-out duration-200 hover:scale-[1.1]'>
             <FaWhatsapp/>
        </Link>
        <Link href={''} target='_blank' className='bg-slate-300 px-3 cursor-pointer py-2 text-[#fa6969] font-semibold text-xl rounded-md ease-in-out duration-200 hover:scale-[1.1]'>
            <FaInstagram/>
        </Link>
        <Link href={''} target='_blank' className='bg-slate-300 px-3 cursor-pointer py-2 text-[#fa6969] font-semibold text-xl rounded-md ease-in-out duration-200 hover:scale-[1.1]'>
            <FaXTwitter/>
        </Link>
    </div>
  )
}

export default Socials