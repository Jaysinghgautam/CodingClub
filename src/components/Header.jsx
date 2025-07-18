 
 import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; // Not used in the provided code, can be removed if not needed elsewhere
import logo from "../assets/logo.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full mb-6 bg-gradient-to-r from-blue-300 to-gray-300 shadow sticky z-50 top-0">
      <header className="flex justify-between items-center text-black py-4 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-200 drop-shadow-md">
        {/* Logo and Club Name */}
        <Link to="/" className="flex items-center gap-2 text-lg font-bold">
          <img src={logo} alt="Coding Club Logo" className="w-10 md:w-12 transition-all" />
          Coding Club
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-12 font-semibold text-base">
          <li className="p-2 hover:bg-pink-400 hover:text-white rounded-md transition-all cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 lg:border-0 hover:text-white lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p-2 hover:bg-pink-400 hover:text-white rounded-md transition-all cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 lg:border-0 hover:text-white lg:p-0`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="p-2 hover:bg-pink-400 hover:text-white rounded-md transition-all cursor-pointer">
            <NavLink
              to="/event"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 lg:border-0 hover:text-white lg:p-0`
              }
            >
              Events
            </NavLink>
          </li>
          <li className="p-2 hover:bg-pink-400 hover:text-white rounded-md transition-all cursor-pointer">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 lg:border-0 hover:text-white lg:p-0`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li className="p-2 hover:bg-pink-400 hover:text-white rounded-md transition-all cursor-pointer">
            <NavLink
              to="/course"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 lg:border-0 hover:text-white lg:p-0`
              }
            >
              Courses
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <button
          className="lg:hidden text-4xl cursor-pointer focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <i className="bx bx-x"></i> // 'x' icon when menu is open
          ) : (
            <i className="bx bx-menu"></i> // Hamburger icon when menu is closed
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[4.5rem] left-0 w-full bg-white flex flex-col items-center gap-4 font-semibold text-lg transition-all duration-300 ease-in-out overflow-hidden
            ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          <li
            className="list-none w-full text-center p-4 hover:bg-pink-400 hover:text-white transition-all cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="list-none w-full text-center p-4 hover:bg-pink-400 hover:text-white transition-all cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            className="list-none w-full text-center p-4 hover:bg-pink-400 hover:text-white transition-all cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/event">Events</Link>
          </li>
          <li
            className="list-none w-full text-center p-4 hover:bg-pink-400 hover:text-white transition-all cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/blog">Blogs</Link>
          </li>
          <li
            className="list-none w-full text-center p-4 hover:bg-pink-400 hover:text-white transition-all cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/course">Courses</Link>
          </li>
        </div>
      </header>
    </div>
  );
}

export default Header;