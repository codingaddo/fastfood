import Image from 'next/image'
import React from 'react'

const CateringContainer = ({url,foodName,children}) => {
  return (
    <div className='flex items-center  flex-col md:flex-row gap-5 border rounded-2xl md:w-[580px] w-full pb-5 md:p-5 bg-slate-100'>
        <div className='md:w-[200px] w-full'>
            <Image
            src={'/wk.jpg'}
            width={300}
            height={300}
            alt=''
            className='rounded-2xl w-full'
            />

            <h1 className='text-center text-xl pt-5 text-slate-600 font-semibold'>{foodName}</h1>

        </div>
            <div className='flex flex-col gap-5 items-center  md:w-[500px]'>
                {children}
            </div>
    </div>
  )
}

export default CateringContainer