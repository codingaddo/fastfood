import React from 'react'
import Button from './Button'
import { FaCartShopping } from "react-icons/fa6";
import Link from 'next/link';


const List = ({size,price,url}) => {
  return (
    
        <Link href={url} className='flex md:gap-7 gap-5 justify-between rounded-2xl cursor-pointer items-center w-full hover:shadow-2xl hover:bg-slate-200 py-3 px-3 md:px-5 '>
            <h2 className='text-left w-[95px] text-slate-700 font-semibold'>{size}</h2>
            <h2 className='text-left w-[50px] text-slate-700 font-semibold'><span>CA&#36;</span>{price}</h2>
            {/* <Button txt={'Order'} icon={<><FaCartShopping /></>} url={url} width={'51px'}/> */}
            <button className='flex items-center text-slate-50 gap-2 px-2 bg-[#fa6969] p-1 rounded-xl'>
            <FaCartShopping className='text-sm' /><span className=' text-sm'>Order</span>
            </button>
         </Link>
    
  )
}

export default List