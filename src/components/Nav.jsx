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

    <header className="bg-white px-8 flex justify-between 
        items-center md:px-32 z-50 fixed top-0 left-0 w-full">
        <nav className="container mx-auto flex items-center justify-between px-4">
            
            {/* This is the header logo */}
            <Link to="/" className="flex items-center">
                <img 
                    src={headerLogo} 
                    alt="header logo" 
                    className="cursor-pointer mt-5 w-[120px] h-auto sm:w-[150px] md:w-[200px] lg:w-auto" 
                />
            </Link>

            {/* This is navigation links - Desktop */}
            <ul className="hidden md:flex space-x-6 text-xl font-medium text-navy-blue">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <NavLink to={item.href}
                            className={({ isActive }) =>
                                `cursor-pointer transition-all pb-1 ${
                                  isActive ? 'text-navy-blue border-b-2 border-navy-blue' : ''
                            }`}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Hamburger Icon for Mobile */}
            <div onClick={toggleMenu} className="xl:hidden block items-center focus:outline-none cursor-pointer">
                <img 
                    src={hamburger} 
                    alt="hamburger menu" 
                    width={20} height={20} />
            </div>
               
            <div className={`fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg transition-transform ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-2xl">
                        &times;
                    </button>
                </div>
                <ul className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col
                    items-center gap-6 font-semibold text-lg transform transition-transform ${
                    isMenuOpen ? "opacity-100" : "opacity-0"}`}
                    style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    {navLinks.map((item) => (
                        <li key={item.label} className="mr-10">
                            <NavLink to={item.href}
                                className={({ isActive }) =>
                                    `cursor-pointer transition-all pb-1 ${
                                      isActive ? 'text-navy-blue border-b-2 border-navy-blue' : ''
                                }`}
                                onClick={() => {
                                    setIsMenuOpen(false)
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Nav
