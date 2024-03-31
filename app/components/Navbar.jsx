import Link from "next/link";

const Navbar = ()=>{
    return(
        <div className="flex justify-between items-center">
            <div>
                <h1>Habibis</h1>
            </div>
            <ul className="flex">
                <li><Link href={''}>Home</Link></li>
                <li><Link href={''}>About</Link></li>
                <li><Link href={''}>Menu</Link></li>
                <li><Link href={''}>Catering</Link></li>
                <li><Link href={''}>Contact</Link></li>
            </ul>
        </div>
    )

}

export default Navbar;

