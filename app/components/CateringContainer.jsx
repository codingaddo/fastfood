import Image from 'next/image'
import React from 'react'

const CateringContainer = ({url,foodName,children}) => {
  return (
    <div className='flex items-center  flex-col shadow-md  gap-1 rounded-2xl md:w-[500px] w-full pb-5'>
        <div className=' h-[200px] w-full'>
            <Image
            src={url || '/wk.jpg'}
            width={300}
            height={200}
            alt=''
            className='rounded-t-2xl w-full h-[200px] object-cover'
            />
        </div>

            <div className='flex flex-col gap-2 items-center px-2 md:px-5  w-full '>
               <h1 className='text-center  text-3xl p-2  text-[#fa6969] font-bold'>{foodName}</h1>
                {children}
            </div>
    </div>
  )
}

export default CateringContainer