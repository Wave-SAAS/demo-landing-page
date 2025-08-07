import { navLinks } from "../constants";
import { useState } from "react";
const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white p-3 text-black shadow-lg md:shadow-none z-50">
      <div className="container mx-auto flex flex-wrap sm:justify-center items-center">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-black rounded-md p-2 transition-all duration-200 ease-in-out"
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links - Centered on larger screens, stacked on mobile */}
        <div
          className={`w-full md:w-auto md:flex md:items-center md:space-x-8 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-center md:text-left mt-4 md:mt-0">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                onClick={() => setIsOpen(false)} // Close menu on link click for mobile
                className="text-gray-800 hover:text-gray-600 px-2 py-2 rounded-md text-lg font-medium transition-colors duration-200 ease-in-out block"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
