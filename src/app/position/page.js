"use client";
import { CircleChevronDown, CircleChevronRight } from "lucide-react";
import React, { useState } from "react";

function Page() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="flex items-center h-screen">
        <hr />
        <hr />
        <hr />
        <br />
        <div className="ml-20">
          <div class="flex">
            {clicked ? <CircleChevronDown /> : <CircleChevronRight />}{" "}
            <h3
              onClick={() => {
                setClicked(!clicked);
              }}
              className="font-semibold"
            >
              Click me
            </h3>
          </div>
          <div className={clicked ? "block" : "max-md:hidden"}>
            <p>Halal</p>
            <p>Halal</p>
            <p>Halal</p>
            <p>Halal</p>
            <p>Halal</p>
            <p>Halal</p>
            <p>Halal</p>
            <p>Halal</p>
            <p>Halal</p>
            <p>Halal</p>
            <p>Halal</p>
            <p>Halal</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
