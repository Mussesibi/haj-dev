"use client";
import React, { useState, useEffect } from "react";
import "../../globals.css";
import Navbar from "../navbar";
import { Linkedin } from "lucide-react";
import Carousel from "../carousel/carousel";
import ProductSlider from "../carousel/productSlider";
import AllProducts from "../allProducts";
import Footer from "../footer";
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
  return (
    <div>
      <Carousel images={images} />
      {/* Banners Section */}
      <div className="banners">
        <div className="banner-1 w-full bg-[rgba(244,245,250,1.000)] h-20 text-xl flex justify-center items-center">
          Pipes, Fittings, and More
        </div>
      </div>
      <div className="hero flex justify-center gap-10 p-9 bg-yellow-200">
        <div className="flex flex-col items-center gap-3">
          <h3>Valves</h3>
          <p> pvc,cpvc, and metals</p>
          <button>More</button>
        </div>
        <div className="flex gap-3">
          <img src="https://placehold.co/70x70" />
          <img src="https://placehold.co/70x70" />
          <img src="https://placehold.co/70x70" />
          <img src="https://placehold.co/70x70" />
        </div>
      </div>
      <div className="w-full h-20 bg-gray-200"></div>
      <ProductSlider prodcuts={prodcuts} />
      <div className="bg-orange-300 w-full text-[48px] font-bold">
        <h2>Pipes and stuff</h2>
      </div>

      <AllProducts stuff={stuff} />
      <Footer />
    </div> // use above this
  );
}

export default Page;
