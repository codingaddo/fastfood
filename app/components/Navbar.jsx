import Link from "next/link";

const Navbar = ()=>{
    return(
        <div className="flex justify-between items-center md:px-14 p-4">
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
        </div>
    )

}

export default Navbar;

