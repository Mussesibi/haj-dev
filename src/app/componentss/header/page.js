"use client";
import React, { useState, useEffect } from "react";
import "../../globals.css";
import { Linkedin, Menu, X } from "lucide-react"; // Install if not installed

// Carousel Images
const images = [
  "https://placehold.co/1000x50/FF5733/FFF?text=Image+1",
  "https://placehold.co/1000x50/33FF57/FFF?text=Image+2",
  "https://placehold.co/1000x50/3357FF/FFF?text=Image+3",
];
const stuff = [
  { title: "Item 1", image: "https://placehold.co/360x360" },
  { title: "Item 2", image: "https://placehold.co/360x360" },
  { title: "Item 3", image: "https://placehold.co/360x360" },
  { title: "Item 4", image: "https://placehold.co/360x360" },
  { title: "Item 5", image: "https://placehold.co/360x360" },
  { title: "Item 6", image: "https://placehold.co/360x360" },
  { title: "Item 7", image: "https://placehold.co/360x360" },
  { title: "Item 8", image: "https://placehold.co/360x360" },
  { title: "Item 9", image: "https://placehold.co/360x360" },
  { title: "Item 10", image: "https://placehold.co/360x360" },
  { title: "Item 11", image: "https://placehold.co/360x360" },
  { title: "Item 12", image: "https://placehold.co/360x360" },
];
const navLinks = [
  { name: "All Pipes", href: "#" },
  { name: "All Fittings", href: "#" },
  { name: "By Use", href: "#" },
  { name: "Installation", href: "#" },
  { name: "Sanitary", href: "#" },
  { name: "Contact45", href: "#" },
];

const prodcuts = [
  {
    imgUrl: "https://placehold.co/165x165",
    title: "Product1",
    cost: 1,
  },
  {
    imgUrl: "https://placehold.co/165x165",
    title: "Product1",
    cost: 2,
  },
  {
    imgUrl: "https://placehold.co/165x165",
    title: "Product1",
    cost: 3,
  },
  {
    imgUrl: "https://placehold.co/165x165",
    title: "Product1",
    cost: 4,
  },
  {
    imgUrl: "https://placehold.co/165x165",
    title: "Product1",
    cost: 5,
  },
  {
    imgUrl: "https://placehold.co/165x165",
    title: "Product1",
    cost: 6,
  },
  {
    imgUrl: "https://placehold.co/165x165",
    title: "Product1",
    cost: 7,
  },
  {
    imgUrl: "https://placehold.co/165x165",
    title: "Product1",
    cost: 8,
  },
  {
    imgUrl: "https://placehold.co/165x165",
    title: "Product1",
    cost: 9,
  },
];
function Page() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4; // Show 4 items at a time

  const nextSlide = () => {
    if (startIndex + itemsPerPage < prodcuts.length) {
      if (startIndex + itemsPerPage + 2 == prodcuts.length) {
        console.log("is there");
        setStartIndex(startIndex + 2);
      } else if (startIndex + itemsPerPage + 3 == prodcuts.length) {
        setStartIndex(startIndex + 1);
      } else if (startIndex + itemsPerPage + 1 == prodcuts.length) {
        setStartIndex(startIndex + 3);
      }
    } else {
      setStartIndex(startIndex + 4);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 4);
    }
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      <nav className="navbar relative shadow-md py-4 flex justify-between items-center px-4">
        <img
          src="https://placehold.co/150x50"
          alt="elbow45 logo"
          className="h-12"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((item) => {
            return <a href={item.href}>{item.name}</a>;
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

      {/* Banners Section */}
      <div className="banners">
        <div className="banner-1 w-full bg-[rgba(244,245,250,1.000)] h-20 text-xl flex justify-center items-center">
          Pipes, Fittings, and More
        </div>

        {/* Carousel */}
        <div className="relative w-full h-20 overflow-hidden">
          {/* Images */}
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-20 object-cover transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Previous Button */}
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          >
            ❯
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hero flex justify-center gap-10 p-9 bg-yellow-200">
        <div className="flex flex-col items-center gap-3">
          <h3>Valves</h3>
          <p> pvc,cpvc, and metals</p>
          <button>More</button>
        </div>
        <div className="flex gap-3">
          <img src="https://placehold.co/50x50" />
          <img src="https://placehold.co/50x50" />
          <img src="https://placehold.co/50x50" />
          <img src="https://placehold.co/50x50" />
        </div>
      </div>
      <div className="w-full h-20 bg-gray-200"></div>

      <div className="flex justify-center gap-10 p-5 text-white">
        {prodcuts
          .slice(startIndex, startIndex + itemsPerPage)
          .map((product, index) => {
            return (
              <div key={index} className=" flex flex-col bg-gray-700 p-3">
                <img src={product.imgUrl} />

                <h4 className="mb-4">{product.title}</h4>
                <p className="text-gray-200">Price:</p>
                <p className="text-priceOrangeColor font-semibold">
                  {product.cost} SAR
                </p>
              </div>
            );
          })}
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-5 mt-4">
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="px-4 py-2 bg-gray-500 rounded-md hover:bg-gray-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          disabled={startIndex + itemsPerPage == prodcuts.length}
          className="px-4 py-2 bg-gray-500 rounded-md hover:bg-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <div className="bg-orange-300 w-full text-[48px] font-bold">
        <h2>Pipes and stuff</h2>
      </div>

      <div className="flex w-[80%] justify-center flex-wrap mx-auto gap-3 bg-white p-10 translate-y-[-10px]">
        {stuff.map((stuff, index) => {
          return (
            <div key={index} className="flex flex-col">
              <img src={stuff.image} />
              <h3>{stuff.title}</h3>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-10 ">
        <div className="flex flex-col">
          <img src="https://placehold.co/120x120" />
        </div>
        <div className="flex flex-col justify-center">
          <h2>send your inquiries +966 9200 35 145</h2>
          <p>is theeeeeeeeeeeere</p>
        </div>
      </div>
      <div className="flex text-white justify-center gap-20 mt-10">
        <a href="https://www.google.com" className="bg-black p-5">
          Google Play
        </a>
        <button className="bg-black p-5">Apple Store</button>
      </div>
      <div className="flex justify-evenly mt-10">
        <div className="flex flex-col gap-10">
          FIND OUT MORE
          <div className="flex flex-col gap-3 flex-wrap h-[55%] gap-x-8">
            <h5>Innovation</h5>
            <h5>Efficiency</h5>
            <h5>Sustainability</h5>
            <h5>Technology</h5>
            <h5>Reliability</h5>
            <h5>Performance</h5>
            <h5>Durability</h5>
            <h5>Security</h5>
            <h5>Automation</h5>
            <h5>Precision</h5>
            <h5>Flexibility</h5>
            <h5>Connectivity</h5>
            <h5>Optimization</h5>
            <h5>Productivity</h5>
            <h5>Evolution</h5>
          </div>
        </div>
        <div className="flex flex-col ">
          <h4>keep in touch with us subscribe to our newsletter</h4>
          <div className="flex">
            <input className="px-10 py-3" />
            <button>Send</button>
          </div>
          <div className="flex justify-evenly">
            <Linkedin />
            <Linkedin />
            <Linkedin />
            <Linkedin />
            <Linkedin />
            <Linkedin />
            <Linkedin />
          </div>
        </div>
        <div className="flex flex-col">
          <img src="https://placehold.co/165x165" />
        </div>
      </div>
    </div> // use above this
  );
}

export default Page;
