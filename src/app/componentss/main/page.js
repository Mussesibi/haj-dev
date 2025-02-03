"use client";
import React, { useState } from "react";
import "../../globals.css";
import { Menu, X } from "lucide-react"; // Install icons if not installed

function Page() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <header className="bg-orange-500 text-white text-sm py-2 flex justify-between items-center px-4 relative">
        <div>This bar is changeable</div>

        {/* Icons Section */}
        <div className="icons flex gap-4 relative">
          <a href="#">
            <img src="/icons/search.svg" alt="Search" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="/icons/cart.svg" alt="Cart" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="/icons/profile.svg" alt="Profile" className="w-6 h-6" />
          </a>

          {/* Language Dropdown - Keep Open When Hovering */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="focus:outline-none">
              <img
                src="/icons/language.svg"
                alt="Language"
                className="w-6 h-6"
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black shadow-lg rounded-md">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  Arabic
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar shadow-md py-4 px-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src="https://placehold.co/150x50"
          alt="elbow45 logo"
          className="h-12"
        />

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-4">
          <a href="#">All Pipes</a>
          <a href="#">All Fittings</a>
          <a href="#">By Use</a>
          <a href="#">Installation</a>
          <a href="#">Sanitary</a>
          <a href="#">Contact45</a>
        </div>

        {/* Mobile Menu Button (Visible on Small Screens) */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-white text-black p-4 absolute top-16 right-0 w-48 shadow-lg">
          <a href="#" className="py-2 hover:bg-gray-200 rounded">All Pipes</a>
          <a href="#" className="py-2 hover:bg-gray-200 rounded">All Fittings</a>
          <a href="#" className="py-2 hover:bg-gray-200 rounded">By Use</a>
          <a href="#" className="py-2 hover:bg-gray-200 rounded">Installation</a>
          <a href="#" className="py-2 hover:bg-gray-200 rounded">Sanitary</a>
          <a href="#" className="py-2 hover:bg-gray-200 rounded">Contact45</a>
        </div>
      )}

      {/* Banner */}
      <div className="banner w-full p-2 bg-[rgba(153,0,0,1.000)] text-white text-lg flex justify-center items-center">
        <a href="#" className="underline">
          Helloooo
        </a>
      </div>

      {/* Banners */}
      <div className="banners">
        <div className="banner-1 w-full bg-[rgba(244,245,250,1.000)] h-20 text-xl flex justify-center items-center">
          Pipes, Fittings, and More
        </div>
        <div className="banner-2">
          <img
            src="https://placehold.co/1000x50"
            className="w-full h-20 object-cover"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
