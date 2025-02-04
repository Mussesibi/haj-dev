"use client";
import React, { useState } from "react";

function ProductSlider({ prodcuts }) {
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
  return (
    <>
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
    </>
  );
}

export default ProductSlider;
