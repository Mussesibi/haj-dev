"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install if not installed
import { usePathname } from "next/navigation";
import LogOutBtn from "./authComponents/logout";
function Navbar({ navLinks }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let isDashboard = usePathname();
  isDashboard = isDashboard.includes("/admin/dashboard");
  let timeoutId;
  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Cancel closing if hovering again
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay closing by 200ms
  };

  return (
    <>
      {/* Top Bar */}
      <header className="bg-orange-500 text-white text-sm py-2 flex justify-between items-center px-4 relative">
        <div>This bar is changeable</div>
        {/* Icons Section */}
        <div className="icons items-center flex gap-4 relative">
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

          {/* Add a parent div with `group` class */}
          <div className="relative" onMouseEnter={handleMouseEnter}>
            <a className="focus:outline-none">
              <img
                src="/icons/language.svg"
                alt="Language"
                className="w-6 h-6"
              />
            </a>
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div
                className="absolute z-10 translate-y-[100%] bottom-0 right-0  w-32 bg-white text-black shadow-lg rounded-md"
                onMouseLeave={handleMouseLeave}
              >
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
        {isDashboard ? <LogOutBtn /> : null}
      </header>
      {/* Navbar */}
      <nav className="navbar relative shadow-md py-4 flex justify-between items-center px-4">
        <img
          src="https://placehold.co/150x50"
          alt="elbow45 logo"
          className="h-12"
        />
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((item, i) => {
            return (
              <a key={i} href={item.href}>
                {item.name}
              </a>
            );
          })}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col bg-white text-black p-4 absolute translate-y-48 left-0 z-10 w-48 shadow-lg">
            {navLinks.map((item) => {
              return (
                <a href={item.href} className="py-2 hover:bg-gray-200 rounded">
                  {item.name}
                </a>
              );
            })}
          </div>
        )}
      </nav>
      {/* Banner */}
      <div className="banner w-full p-2 bg-[rgba(153,0,0,1.000)] text-white text-lg flex justify-center items-center">
        <a href="#" className="underline">
          Helloooo
        </a>
      </div>
    </>
  );
}

export default Navbar;
