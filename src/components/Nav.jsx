import { Link, NavLink } from "react-router-dom"
import { hamburger, headerLogo } from "../assets/icons" 
import { navLinks } from "../constants"
import { useState } from "react"

const Nav = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (

    <header className="bg-white px-8 flex justify-between items-center md:px-32 z-50 relative">
        <nav className="container mx-auto flex items-center justify-between px-4">
            
            {/* This is the header logo */}
            <Link to="/" className="flex items-center">
                <img src={headerLogo} alt="header logo" className="cursor-pointer mt-5" />
            </Link>

            {/* This is navigation links - Desktop */}
            <ul className="hidden md:flex space-x-6 text-xl font-medium text-navy-blue">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <NavLink to={item.href}
                            className="hover:text-blue-500 transition-all rounded-md"
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Hamburger Icon for Mobile */}
            <div onClick={toggleMenu} className="xl:hidden block items-center focus:outline-none cursor-pointer">
                <img src={hamburger} alt="hamburger" width={25} height={25} />
            </div>
               
            <ul className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col
                items-center gap-6 font-semibold text-lg transform transition-transform ${
                isMenuOpen ? "opacity-100" : "opacity-0"}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                {navLinks.map((item) => (
                    <li key={item.label} className="mr-10">
                        <NavLink to={item.href}
                            className="hover:text-blue-500 transition-all rounded-md"
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Nav
