import Link from 'next/link'
import React from 'react'
import Search from './Search'
import Socials from './Socials'
import { FaPhone, FaLocationArrow, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <>
    <footer className='w-full gap-5 md:gap-1 bg-[#fa6969] md:h-72 md:flex-row flex-col flex justify-center md:justify-between py-10 px-10 md:px-20'>
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
        <div className='flex flex-col  gap-4 md:gap-2 text-white'>
            <div className='flex items-center  gap-2'>
                <FaLocationArrow/>
            <Link href={'https://www.google.com/search?q=41+Brybeck+crescent%2C+Kitchener+Ontario+N2M+2C5&oq=41+Brybeck+crescent%2C+Kitchener+Ontario+N2M+2C5&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBNIBCDYyNTJqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8'} target='_blank'>41 Brybeck crescent, Kitchener Ontario N2M 2C5</Link>
            </div>
            <div className='flex items-center   gap-2'> 
            <FaPhone />
            <Link href={'tel:+1(519)725-4996'}>+1(519)725-4996</Link>
            </div>
            <div className='flex items-center  gap-2'> 
            <FaMailBulk/>
            <Link href={'mailto:xyx@gmail.com'}>xyz@gmail.com</Link>
            </div>
        </div>
            
        </section>
    </footer>
    </>

  )
}

export default Footer