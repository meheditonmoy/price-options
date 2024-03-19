import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/products', name: 'Our Products' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '*', name: '404 Not Found' }
    ];

    return (
        <nav className="p-6">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoCloseSharp></IoCloseSharp>  : <IoMdMenu className=" "></IoMdMenu>
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static bg-gray-400 text-white rounded-xl
            ${open ? 'left-16 top-16' : '-left-60 top-16'}
            p-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;