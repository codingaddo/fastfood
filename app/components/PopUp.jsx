'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaPhone, FaTimesCircle, FaWhatsapp } from 'react-icons/fa'

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <>
    { isOpen &&
    <div className='relative  bg-slate-100 w-[280px] h-[200px] shadow-2xl flex flex-col items-center pt-7 gap-10 rounded-2xl'>
        <h1 className='text-xl font-bold text-[#fa6969]'>Order Via</h1>
        <div className='flex gap-10'>
        <Link href={'https://wa.me/+15197254996'}><FaWhatsapp className='text-4xl text-green-600'/></Link>
        <Link href={'tel:+1(519)725-4996'}><FaPhone className='text-4xl text-blue-600'/></Link>
        </div>
        <div className='absolute left-[92%] bottom-[92%] cursor-pointer' onClick={()=>setIsOpen(false)}>
            <FaTimesCircle className='text-slate-500 text-3xl'/>
        </div>
    </div>
    }
    </>

  )
}

export default PopUp