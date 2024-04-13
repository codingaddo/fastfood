'use client'
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Context, { useMyContext } from "../hooks/context";

const Navbar = ()=>{
    const [isScroll, setIsScroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    // const {isOpen,setIsOpen} = useMyContext()
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
                <li className="hover:text-red-600"><Link href={'/'}>Home</Link></li>
                <li className="hover:text-red-600"><Link href={'/about'}>About</Link></li>
                <li className="hover:text-red-600"><Link href={'/menu'}>Menu</Link></li>
                <li className="hover:text-red-600"><Link href={'/catering'}>Catering</Link></li>
                <li className="hover:text-red-600"><Link href={'/contact'}>Contact</Link></li>
            </ul>
        <div className={isOpen? " md:hidden pb-4 menu open cursor-pointer " :"md:hidden pb-4 menu cursor-pointer "} onClick={handleOpenNav}>
            <div className="dash top "></div>
            <div className="dash middle"></div>
            <div className="dash down"></div>
        </div>


            {/* Responsive NavBar */}
    </div>
        <div className={isOpen?" open-nav bg-slate-200 rounded-bl-xl shadow-2xl z-50 p-10 md:hidden":"Rnav bg-slate-200 rounded-bl-xl shadow-2xl z-50 p-10 md:hidden"}>
             <ul className="text-xl flex flex-col gap-4">
            <li className="hover:text-red-600"><Link href={'/'} onClick={()=>{setIsOpen(false)}}>Home</Link></li>
                <li className="hover:text-red-600"><Link href={'/about'} onClick={()=>{setIsOpen(false)}}>About</Link></li>
                <li className="hover:text-red-600"><Link href={'/menu'} onClick={()=>{setIsOpen(false)}}>Menu</Link></li>
                <li className="hover:text-red-600"><Link href={'/catering'} onClick={()=>{setIsOpen(false)}}>Catering</Link></li>
                <li className="hover:text-red-600"><Link href={'/contact'} onClick={()=>{setIsOpen(false)}}>Contact</Link></li>
            </ul> 
        </div>
    </>

    )

}

export default Navbar;

