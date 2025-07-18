import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full mb-6  bg-gradient-to-r from-blue-300 to-gray-300 shadow sticky z-50 top-0">
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-gray-200 drop-shadow-md">
        <a href="#">
          <img src={logo} className="w-12   transition-all" />
          Coding Club
        </a>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-pink-400 hover:text-white rounded-md transitioin-all cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p-3 hover:bg-pink-400 hover:text-white rounded-md transitioin-all cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="p-3 hover:bg-pink-400 hover:text-white rounded-md transitioin-all cursor-pointer">
            <NavLink
              to="/event"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
              }
            >
              Events
            </NavLink>
          </li>

          <li className="p-3 hover:bg-pink-400 hover:text-white rounded-md transitioin-all cursor-pointer">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li className="p-3 hover:bg-pink-400 hover:text-white rounded-md transitioin-all cursor-pointer">
            <NavLink
              to="/course"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
              }
            >
              Courses
            </NavLink>
          </li>
        </ul>

        <i
          className="bx bx-menu xl:hidden block text-4xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {" "}
        </i>

        <div
          className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transorm 0.3s ease,opacity 0.3s ease" }}
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



 