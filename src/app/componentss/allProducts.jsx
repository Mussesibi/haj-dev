import React from "react";

function AllProducts({ stuff }) {
  return (
    <div>
      {" "}
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
    </div>
  );
}

export default AllProducts;
