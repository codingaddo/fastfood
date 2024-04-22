import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { FaCartShopping } from "react-icons/fa6";

const MenuContainer = ({name,image,price,url}) => {
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
            <Button txt={'Order'} icon={<><FaCartShopping /></>} url={url}/>
        </div>
    </div>
    


  )
}

export default MenuContainer