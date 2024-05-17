import React from "react";
import { OurTopClients } from "../../assets/Data/data";

const InfiniteScrollClients = () => {
  return (
    <>
      <h1 className="p-4 mb-5 text-3xl max-w-[1150px] font-bold md:text-center mx-auto md:pt-10 md:pb-10 md:text-5xl ">
        Our Clients
      </h1>
      <div className="flex overflow-hidden mb-24 ">
        <div className="animate-loop-scroll pr-9 flex gap-32 z-0 ">
          {OurTopClients?.map((i) => (
            <img className="w-[150px]" src={i.img} alt="" />
          ))}
        </div>
        <div
          className="animate-loop-scroll flex pl-9  gap-32 z-10 bg-white"
          aria-hidden="true"
        >
          {OurTopClients?.map((i) => (
            <img className="w-[150px]" src={i.img} alt="" />
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScrollClients;
