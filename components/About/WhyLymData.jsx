import React from "react";
import { whyLymData } from "@/assets/Data/data";

const WhyLymData = () => {
  return (
    <div className="max-w-[1640px]  mx-auto p-4 bg-[#F8F8F8]  font-roboto">
      <div className="flex flex-col justify-center  text-center ">
        <h1 className="text-sm text-gray-400  text-left md:text-lg lg:text-xl md:ml-5 lg:ml-10 mt-6 mb-6">
          Why LymData
        </h1>
        <span className="mb-10 text-3xl md:text-6xl text-left md:ml-5 lg:ml-10">
          What its like to <br /> work with us
        </span>
      </div>

      <div className="lg:grid lg:grid-cols-3 gap-6 mx-auto md:text-lg ">
        {whyLymData.map((m) => (
          <div
            key={m.id}
            className=" border-slate-200 mb-4 w-[290px] sm:w-[400px]  lg:w-[290px] mx-auto lg:ml-9 "
          >
            <h1 className="text-xl  ml-2  mb-4">{m.number}</h1>
            <h1 className="border-t mt-4 mb-4"></h1>
            <h1 className="text-xl  mb-4">{m.title}</h1>

            <h3 className="mb-5">{m.desc}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyLymData;
