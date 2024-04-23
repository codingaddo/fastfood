import Link from 'next/link'
import React from 'react'

const ContactContainer = ({title,url,info,icon}) => {
  return (
    <Link href={url} target='_blank' className='flex flex-col gap-5 items-center border shadow-xl hover:shadow-2xl rounded-xl w-[300px] bg-slate-100 p-7'>
        <h1 className='text-xl text-slate-700 font-thin'>{title}</h1>
        <div className=''>{icon}</div>
        <h1 className='text-xl text-slate-700 font-thin'>{info}</h1>
    </Link>
  )
}

export default ContactContainer