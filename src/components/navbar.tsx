"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const navLinks = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/research", label: "Research" },
      { href: "/team", label: "Team" },
      { href: "/events", label: "Events" },
      { href: "/blog", label: "Blog" },
    ],
    []
  );

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const renderLinks = (isMobile: boolean) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`${
          isMobile ? "block" : "inline-block"
        } text-white hover:text-_purple-500 transition-colors duration-300 font-medium ${
          isMobile ? "px-4 py-2" : "px-4"
        }`}
        onClick={() => isMobile && setIsClick(false)}
      >
        {link.label}
      </Link>
    ));

  return (
    <nav className="bg- fixed top-0 left-0 w-full z-50 shadow-lg border-b border-gray-600 backdrop-blur-lg bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              AI Guild
            </Link>
          </div>
          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-6">
              {renderLinks(false)}
              {/* Register Now Button */}
              <Link
                href="/register"
                className="bg-_purple-500 text-white px-4 py-1 rounded-2xl hover:bg-_purple-600 transition-colors duration-300 font-semibold"
              >
                Register Now
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={isClick ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-_purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-_purple-500"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Links */}
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2">{renderLinks(true)}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
