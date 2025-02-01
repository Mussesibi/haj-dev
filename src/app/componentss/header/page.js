"use client";
import React from "react";
import "../../globals.css";
import { useState } from "react";
function page() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
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
      <nav className="navbar shadow-md py-4 flex items-center px-4 gap-x-2">
        {" "}
        <img
          src="https://placehold.co/150x50"
          alt="elbow45 logo"
          className="h-12 "
        />
        <div className="flex space-x-4 ">
          <a href="#" className="">
            All Pipes
          </a>
          <a href="#" className="">
            all fittings
          </a>
          <a href="#" className="">
            by use
          </a>
          <a href="#" className="">
            installation
          </a>
          <a href="#" className="">
            Sanitary
          </a>
          <a href="#" className="">
            contact45
          </a>
        </div>
      </nav>
      <div className="banner w-full p-2  bg-[rgba(153,0,0,1.000)] text-white text-l flex justify-center items-center ">
        <a href="#" className="underline">
          Helloooo
        </a>
      </div>
      <div className="banners">
        <div className="banner-1 w-full bg-[rgba(244,245,250,1.000)] h-20 text-xl  flex justify-center items-center">
          pipes fitting and more
        </div>
        <div className="banner-2]">
          <img src="https://placehold.co/1000x50" className="w-full h-20 object-cover"></img>hellooo
        </div>
      </div>
    </div>
  );
}

export default page;
