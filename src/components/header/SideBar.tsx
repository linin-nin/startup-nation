import React from "react";
import { useState } from "react";
import sidebarCSS from "./sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuNavbar } from "@/lib/menu-navbar";

const revealUl = {
  hidden: {
    opacity: 1
  },
  visiable: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const revealLi = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visiable: {
    y: 0,
    opacity: 1
  }
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={isOpen ? sidebarCSS.open : ""}>
      <button className={sidebarCSS.button} onClick={handleClick}></button>
      <nav className={sidebarCSS.nav}>
        <ul className={`${sidebarCSS.ul} ${sidebarCSS.menu}`}>
          {MenuNavbar.map((item, index) => (
            <Link href={item.pathUrl} key={index}>
              <li
                className={`${
                  item.pathUrl === pathName && "bg-yellow-300 text-black"
                } ${sidebarCSS.li}`}
              >
                {item.menuName}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;