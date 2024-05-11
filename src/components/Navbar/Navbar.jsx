import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/chemberlogo.png";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  // {
  //   id: 1,
  //   name: "About",
  //   link: "/#about",
  // },
  {
    id: 3,
    name: "Services",
    link: "/#services",
  },
  {
    id: 4,
    name: "Team",
    link: "/#team",
  },
  {
    id: 5,
    name: "Posts",
    link: "/#post",
  },
  {
    id: 6,
    name: "Contact",
    link: "/#contact",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="relative z-10 w-full dark:bg-black dark:text-white duration-300
    "
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a
            href="#"
          >
            <img src={Logo} alt="" className=" w-20" />
            <span className="text-2xl sm:text-3xl font-semibold">
              LegalWise
            </span>
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4 text-xl">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button className="primary-btn">Login</button>
              {/* <DarkMode /> */}
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
