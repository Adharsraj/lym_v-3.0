import React from "react";
import { allWorks } from "../../assets/Data/data";

const AllWorksListing = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-2 text-[#040404] mb-10">
      {allWorks.map((m) => (
        <div key={m.id} className="grid grid-cols-2 gap-4 mb-10 ">
          <div className="flex items-center justify-center md:justify-between lg:ml-40 md:ml-20">
            <div className=" mr-5 border-b-2 lg:text-xl">
              <h1 className="text-lg underline  md:text-xl mb-4 font-times ">
                {m.title}
              </h1>
              <h1 className="font-dm lg:text-xl">{m.head1}</h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-[150px]" src={m.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllWorksListing;
