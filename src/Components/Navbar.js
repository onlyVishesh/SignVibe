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
        scrolled
          ? "bg-gray-900 shadow-lg py-2"
          : "bg-gradient-to-r from-gray-900 to-gray-800 py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/home" className="flex items-center space-x-3 group">
            <img
              src={logo}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              alt="SignVibe Logo"
            />
            <span className="text-white text-xl font-bold tracking-tight">
              <span className="text-blue-400">Sign</span>Vibe
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-md p-1"
              aria-label="Toggle menu"
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
          <div className="hidden md:flex items-center space-x-1">
            {[
              { path: "/home", label: "Home" },
              { path: "/convert", label: "Convert" },
              { path: "/learn-sign", label: "Learn Sign" },
              { path: "/all-videos", label: "Videos" },
              { path: "/feedback", label: "Feedback" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "text-white bg-blue-600 shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2`}
        >
          <div className="flex flex-col space-y-1 py-2 px-1">
            {[
              { path: "/home", label: "Home" },
              { path: "/convert", label: "Convert" },
              { path: "/learn-sign", label: "Learn Sign" },
              { path: "/all-videos", label: "Videos" },
              { path: "/feedback", label: "Feedback" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  isActive(item.path)
                    ? "text-white bg-blue-600"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
