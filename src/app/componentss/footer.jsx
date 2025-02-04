import { Linkedin } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <>
      {" "}
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
    </>
  );
}

export default Footer;
