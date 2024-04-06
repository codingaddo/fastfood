import Link from 'next/link'
import React from 'react'

const Button = ({txt,url}) => {
  return (
    <Link href={`${url}`} className={`bg-[#fa6969] text-white text-center text-sm rounded-2xl font-semibold py-4 px-5 w-[150px] ease-in-out duration-500 shadow-xl hover:shadow-2xl hover:scale-[1.1] hover:bg-white hover:text-[#fa6969]`}>

        {txt}
      
    </Link>

  )
}

export default Button