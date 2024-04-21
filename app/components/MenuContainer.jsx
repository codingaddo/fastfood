import Image from 'next/image'
import React from 'react'
import Button from './Button'

const MenuContainer = ({name,image,price}) => {
  return (
    
    <div className='flex flex-col items-center bg-slate-100  w-[300px] pb-14 rounded-3xl'>
        <div className=' w-full rounded-3xl'>
            <Image
                src={'/wk.jpg'}
                width={200}
                height={200}
                alt=''
                className=' w-full h-[200px] object-cover rounded-t-3xl'
            />
        </div>
        <div className='flex flex-col items-center gap-7 p-7'>
            <h2 className='text-2xl text-slate-600'>{name}</h2>
            <h2 className='text-2xl font-bold text-[#fa6969]'><span>&#36;</span>{price}</h2>
        </div>
        <div>
            <Button txt={'Order'}/>
        </div>
    </div>
    

  )
}

export default MenuContainer