import Link from 'next/link'
import React from 'react'

const Button = ({txt,url,icon,width}) => {
  let w = '150px'
  return (
    <Link href={`${url}`} className={`bg-[#fa6969] text-white flex items-center gap-3 justify-center text-center text-lg md:text-sm rounded-2xl  md:font-semibold md:py-4 py-4 px-5 w-[${width || w}] ease-in-out duration-500 shadow-xl hover:shadow-2xl hover:scale-[1.1] hover:bg-white hover:text-[#fa6969]`}>
        {icon}
        {txt}
      
    </Link>

  )
}

export default Button