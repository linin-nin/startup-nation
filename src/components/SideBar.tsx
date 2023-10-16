import React from 'react'
import { useState } from 'react';
import sidebarCSS from './sidebar.module.css'

const SideBar = () => {

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
                    <li className={sidebarCSS.li}>item1</li>
                    <li className={sidebarCSS.li}>item2</li>
                    <li className={sidebarCSS.li}>item3</li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar