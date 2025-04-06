import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-gray-900 bg-opacity-90"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/home" className="flex items-center space-x-2">
            <img src={logo} className="h-8 w-auto" alt="SignVibe Logo" />
            <span className="text-white text-xl font-bold">SignVibe</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className={`text-sm uppercase font-medium ${
                isActive("/home")
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/convert"
              className={`text-sm uppercase font-medium ${
                isActive("/convert")
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
            >
              Convert
            </Link>
            <Link
              to="/learn-sign"
              className={`text-sm uppercase font-medium ${
                isActive("/learn-sign")
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
            >
              Learn Sign
            </Link>
            <Link
              to="/all-videos"
              className={`text-sm uppercase font-medium ${
                isActive("/all-videos")
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
            >
              Videos
            </Link>
            <Link
              to="/feedback"
              className={`text-sm uppercase font-medium ${
                isActive("/feedback")
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
            >
              Feedback
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-4`}>
          <div className="flex flex-col space-y-4 pb-3">
            <Link
              to="/home"
              className={`text-sm uppercase font-medium ${
                isActive("/home")
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/convert"
              className={`text-sm uppercase font-medium ${
                isActive("/convert")
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Convert
            </Link>
            <Link
              to="/learn-sign"
              className={`text-sm uppercase font-medium ${
                isActive("/learn-sign")
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Learn Sign
            </Link>
            <Link
              to="/all-videos"
              className={`text-sm uppercase font-medium ${
                isActive("/all-videos")
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Videos
            </Link>
            <Link
              to="/feedback"
              className={`text-sm uppercase font-medium ${
                isActive("/feedback")
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
