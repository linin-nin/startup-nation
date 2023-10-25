    
import React from 'react'
import { useState } from 'react';
import sidebarCSS from './sidebar.module.css'
import Link from 'next/link';

const SideBar = () => {
<<<<<<< HEAD
=======
>>>>>>> 9c56512811b03a10cc364628ed739f64aa1b1419

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => { 
        setIsOpen(!isOpen);
    };

    return (
        <div className={isOpen ? sidebarCSS.open : ''}>
            <button className={sidebarCSS.button} onClick={handleClick}>
            </button>
            <nav className={sidebarCSS.nav}>
                <ul className={`${sidebarCSS.ul} ${sidebarCSS.menu}`}>
                    <Link href="/startup-directory">
                        <li className={sidebarCSS.li}>
                            Startup Directory
                        </li>
                    </Link>
                    <Link href="/about"><li className={sidebarCSS.li}>About Us</li></Link>
                    <Link href="/"><li className={sidebarCSS.li}>Services</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar