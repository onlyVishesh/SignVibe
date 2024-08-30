import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top ">
      <div className="container flex flex-wrap items-center justify-between w-full py-3 md:py-0 px-2 text-lg text-gray-700">
        <div>
          <Link
            to="/home"
            className={`navbar-brand h1`}
          >
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
              alt="Logo"
            />
            Sign Kit
          </Link>
        </div>
        <a href="#" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto bg-dark`}
        >
          <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/convert" className="nav-link text-white">
                Convert
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/learn-sign" className="nav-link text-white">
                Learn Sign
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all-videos" className="nav-link text-white">
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/feedback" className="nav-link text-white">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
