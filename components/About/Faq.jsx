"use client"
import React, { useState } from "react";
import { accordionData } from "@/assets/Data/data/";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  return (
    <div className="font-times max-w-[1640px]  mx-auto">
      <div className="lg:mx-36 mb-10  ">
        <h1 className=" lg:text-7xl md:text-6xl text-4xl text-center mt-10 ">
          Frequently <i>Asked</i> Questions
        </h1>

        <h2 className="text-center text-3xl mb-10 py-14">
          The most common queries.
        </h2>
        {accordionData.map((item, index) => (
          <div key={index} className="hover:bg-black hover:text-white">
            <button
              className="flex items-center justify-between w-full p-4  hover:bg-black hover:text-white font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              <span className="lg:text-xl md:text-lg text-left font-zuume ">
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  index === activeIndex ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {index === activeIndex && (
              <div className="p-4 xl:w-[900px] lg:w-[700px] font-dm ">
                <p className="lg:text-lg ">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
