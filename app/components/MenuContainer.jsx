'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import PopUp from './PopUp';

const MenuContainer = ({name,image,price,url}) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick(){
    setIsOpen(!isOpen)
  }

  return (
    
    <div className='flex flex-col items-center bg-slate-100  w-[300px] pb-14 rounded-3xl'>
        <div className=' w-full rounded-3xl'>
            <Image
                src={image}
                width={200}
                height={200}
                alt=''
                className=' w-full h-[200px] object-cover rounded-t-3xl'
            />
        </div>
        <div className='flex flex-col items-center gap-7 p-7'>
            <h2 className='text-2xl text-slate-600'>{name}</h2>
            <h2 className='text-2xl font-bold text-[#fa6969]'><span>CA&#36;</span>{price}</h2>
        </div>
        <div>
            
            <button className='flex w-[100px] h-[40px] justify-center items-center text-slate-50 gap-2 px-2 bg-[#fa6969] p-1 rounded-xl'>
            <FaCartShopping className='text-sm' /><span className=' text-sm'>Order</span>
            </button>
        </div>

        {
            isOpen &&
        <div>
            <PopUp/>
        </div>

        }

    </div>
    


  )
}

export default MenuContainer