'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = ()=>{
    const [isScroll, setIsScroll] = useState(false)

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
        <div className={ isScroll? "fixed w-full bg-white shadow-2xl flex justify-between items-center md:px-14 p-4":'fixed w-full bg-white flex justify-between items-center md:px-14 p-4'}>
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
        <div className="menu open">
            <div className="dash top "></div>
            <div className="dash middle"></div>
            <div className="dash down"></div>
        </div>


            {/* Responsive NavBar */}
            {/* <ul className="md:hidden">
            <li className="hover:text-red-600"><Link href={'/'}>Home</Link></li>
                <li className="hover:text-red-600"><Link href={'/about'}>About</Link></li>
                <li className="hover:text-red-600"><Link href={'/menu'}>Menu</Link></li>
                <li className="hover:text-red-600"><Link href={'/catering'}>Catering</Link></li>
                <li className="hover:text-red-600"><Link href={'/contact'}>Contact</Link></li>
            </ul> */}
        </div>
    )

}

export default Navbar;

