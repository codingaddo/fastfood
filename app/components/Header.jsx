import Image from 'next/image'
import React from 'react'

const Header = ({img,text,color}) => {
  return (
    <div className='relative bg-slate-200 w-full h-72 md:h-80'>
        <div className='w-full h-72 md:h-80'>
            <Image
            src={img}
            width={500}
            height={50}
            alt=''
            className='w-full h-72 md:h-80 object-cover'
            />
        </div>
        <h1 className={`relative bottom-36 md:bottom-44 text-center text-5xl  md:text-7xl  ${color} uppercase`}>
            {text}
        </h1>
    </div>
  )
}

export default Header