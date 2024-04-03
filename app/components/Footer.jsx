import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className=' w-full bg-[#fa6969] h-72 flex justify-between py-10 px-20'>
        <section>
            <div>
                LOGO
            </div>
        </section>
        <section>
            <div>
                Search
            </div>
            <div>
                Social Media
            </div>
            <div>
                Alright Reserved
            </div>
        </section>
        <section className='navigation'>
            <div className='flex flex-col gap-1 '>
                <h3 className='font-bold text-2xl'>Quick Links</h3>
                <ul className='flex flex-col gap-2'>
                    <li className="text-white text-[1.15rem] hover:text-slate-300"><Link href={'/'}>Home</Link></li>
                    <li className="text-white text-[1.15rem] hover:text-slate-300"><Link href={'/about'}>About</Link></li>
                    <li className="text-white text-[1.15rem] hover:text-slate-300"><Link href={'/menu'}>Menu</Link></li>
                    <li className="text-white text-[1.15rem] hover:text-slate-300"><Link href={'/catering'}>Catering</Link></li>
                    <li className="text-white text-[1.15rem] hover:text-slate-300"><Link href={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </section>
        <section>
            Contact info
        </section>
    </footer>
    </>

  )
}

export default Footer