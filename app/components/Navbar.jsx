'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMyContext } from "./hooks/context";
import { usePathname } from "next/navigation";

const Navbar = ()=>{
    const [isScroll, setIsScroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    // const {isOpen,setIsOpen} = useMyContext()

    const pathName = usePathname()

    const handleOpenNav = ()=>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        document.addEventListener("scroll",()=>{
            if(window.scrollY > 10){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])
    return(
        <>
        <div className={ isScroll? " z-50 fixed w-full bg-white shadow-2xl flex justify-between items-center md:px-14 p-4 md:py-4 py-5":'fixed z-50  w-full bg-white flex justify-between items-center md:px-14 p-4 md:py-4 py-5'}>
            <div>
                <h className='text-xl text-black font-bold'>Habibis</h>
            </div>
            <ul className="hidden md:flex justify-between items-center gap-10 font-medium">
                <li className="hover:text-red-600"><Link className={pathName==='/' ?"text-[#fa6969]" :''} href={'/'}>Home</Link></li>
                <li className="hover:text-red-600"><Link className={pathName==='/about' ?"text-[#fa6969]" :''} href={'/about'}>About</Link></li>
                <li className="hover:text-red-600"><Link className={pathName==='/menu' ?"text-[#fa6969]" :''} href={'/menu'}>Menu</Link></li>
                <li className="hover:text-red-600"><Link className={pathName==='/catering' ?"text-[#fa6969]" :''} href={'/catering'}>Catering</Link></li>
                <li className="hover:text-red-600"><Link className={pathName==='/contact' ?"text-[#fa6969]" :''} href={'/contact'}>Contact</Link></li>
            </ul>
        <div className={isOpen? " md:hidden pb-4 menu open cursor-pointer " :"md:hidden pb-4 menu cursor-pointer "} onClick={handleOpenNav}>
            <div className="dash top "></div>
            <div className="dash middle"></div>
            <div className="dash down"></div>
        </div>


    </div>
            {/* Responsive NavBar */}
        <div className={isOpen?" open-nav  z-50 p-10 md:hidden":"Rnav  z-50 p-10 md:hidden"} onClick={()=>{setIsOpen(false)}}>
             <ul className="text-xl flex flex-col gap-4 bg-slate-200 relative left-28 bottom-10 p-10 pb-20 rounded-bl-xl shadow-2xl">
            <li className="hover:text-red-600"><Link  href={'/'} className={pathName==='/' ?"text-[#fa6969]" :''} onClick={()=>{setIsOpen(false)}}>Home</Link></li>
                <li className="hover:text-red-600"><Link className={pathName==='/about' ?"text-[#fa6969]" :''} href={'/about'} onClick={()=>{setIsOpen(false)}}>About</Link></li>
                <li className="hover:text-red-600"><Link className={pathName==='/menu' ?"text-[#fa6969]" :''} href={'/menu'} onClick={()=>{setIsOpen(false)}}>Menu</Link></li>
                <li className="hover:text-red-600"><Link className={pathName==='/catering' ?"text-[#fa6969]" :''} href={'/catering'} onClick={()=>{setIsOpen(false)}}>Catering</Link></li>
                <li className="hover:text-red-600"><Link className={pathName==='/contact' ?"text-[#fa6969]" :''} href={'/contact'} onClick={()=>{setIsOpen(false)}}>Contact</Link></li>
            </ul> 
        </div>
    </>

    )

}

export default Navbar;

