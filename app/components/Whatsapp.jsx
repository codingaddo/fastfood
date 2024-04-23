import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Whatsapp = () => {
  return (
    <>
    <Link href={'https://wa.me/+15197254996'} className= ' animate-pulse fixed  p-2 right-0 md:right-0 md:bottom-44 bottom-64 rounded-l-lg z-30 cursor-pointer  bg-[#fa6969] text-center hover:scale-[1.1]'>
        <FaWhatsapp className='text-white text-5xl'/>
    </Link>
    </>

  )
}

export default Whatsapp