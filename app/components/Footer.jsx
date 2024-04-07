import Link from 'next/link'
import React from 'react'
import Search from './Search'
import Socials from './Socials'
import { FaPhone, FaLocationArrow, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <>
    <footer className=' w-full bg-[#fa6969] md:h-72 md:flex-row flex-col  flex justify-between py-10 px-20'>
        <section>
            <div>
                LOGO
            </div>
        </section>
        <section className='flex flex-col gap-5'>
        <h3 className='font-semibold text-2xl'>Quick Search</h3>
            <div>
                <Search/>
            </div>
            <div>
                <Socials/>
            </div>
            <div className='text-xl'>
                &copy; <span>{date} | All rights reserved</span>
            </div>
        </section>
        <section className='navigation'>
            <div className='flex flex-col gap-1 '>
                <h3 className='font-semibold text-2xl'>Quick Links</h3>
                <ul className='flex flex-col gap-1'>
                    <li className="text-white text-[1.1rem] hover:text-slate-300"><Link href={'/'}>Home</Link></li>
                    <li className="text-white text-[1.1rem] hover:text-slate-300"><Link href={'/about'}>About</Link></li>
                    <li className="text-white text-[1.1rem] hover:text-slate-300"><Link href={'/menu'}>Menu</Link></li>
                    <li className="text-white text-[1.1rem] hover:text-slate-300"><Link href={'/catering'}>Catering</Link></li>
                    <li className="text-white text-[1.1rem] hover:text-slate-300"><Link href={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </section>
        <section className='flex flex-col gap-1'>
        <h3 className='font-semibold text-2xl'>Contact Info</h3>
        <div className='flex flex-col gap-2 text-white'>
            <div className='flex items-center gap-2'>
                <FaLocationArrow/>
            <Link href={''}>41 Brybeck crescent, Kitchener Ontario N2M 2C5</Link>
            </div>
            <div className='flex items-center gap-2'> 
            <FaPhone/>
            <Link href={''}>+1(519)725-4996</Link>
            </div>
            <div className='flex items-center gap-2'> 
            <FaMailBulk/>
            <Link href={''}>xyz@gmail.com</Link>
            </div>
        </div>
            
        </section>
    </footer>
    </>

  )
}

export default Footer