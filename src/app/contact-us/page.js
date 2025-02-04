import React from "react";
import Navbar from "../componentss/navbar";
import Footer from "../componentss/footer";

function Page() {
  return (
    <div>
      <div className="bg-gray-400 text-black text-5xl font-semibold p-4 flex justify-center mb-2">
        <h3>contact45</h3>
      </div>
      <form className="flex justify-center">
        <div className="bg-white flex flex-col p-3 gap-4 w-[1180px] justify-center -translate-y-5">
          <div class="flex gap-5">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Name:</label>
              <input
                className="border px-[10px] py-3 border-gray-200 "
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                className="border px-[10px] py-3 border-gray-200 "
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <label htmlFor="phone">Phone:</label>
              <input
                className="border px-[10px] py-3 border-gray-200 "
                id="phone"
                type="text"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="message">Message</label>
              <textarea
                className="h-full p-3 border border-gray-200"
                id="message"
                name="message"
                placeholder="Enter your message"
              />
            </div>
          </div>
          <button className="self-start mt-2 px-[10px] py-3 bg-priceOrangeColor w-[220px] h-10 text-white flex justify-center items-center">
            <span>Send</span>
          </button>
        </div>
      </form>
      <Footer />
    </div> //dont use this
  );
}

export default Page;
