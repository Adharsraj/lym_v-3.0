import React from "react";
const BuildingTogether = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px] font-aeonic  mx-auto p-2    ">
        <h3 className=" md:hidden mt-32">Recognition</h3>
        <h3 className="hidden md:block md:mt-24"></h3>

        <div className="relative overflow-hidden ">
          <h2 className="text-6xl px-1 z-20  text-[#282728] xxl:px-10 lg:text-[170px] xxl:text-[220px] md:text-8xl mt-24 lg:mt-14 font-bold absolute">
            building
            <h1 className="lg:ml-20">—together</h1>
          </h2>
          <img
            src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187632/assets/assets/contactusimg_xyclvw.png"
            className=" w-full top-0 h-[300px] lg:h-[600px] opacity-10 scale-x-150"
            alt="imgrotate"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingTogether;
