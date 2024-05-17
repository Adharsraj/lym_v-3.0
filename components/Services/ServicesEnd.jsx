import React from "react";
import Within7ForService from "@/components/Home/Within7ForService";

const ServicesEnd = () => {
  const imageStyle = {
    maxWidth: "100%",
    marginLeft: "10px",
    transform: "scale(1.8)",

    // Adjust the scale value as needed
  };
  return (
    <>
      <div className="bg-[#F4F4F4]">
        <div
          id="#ind"
          className="max-w-[1640px]  mx-auto p-4 font-dm  relative  md:text-xl bg-[#F4F4F4]  "
        >
          <div className="relative mt-20   xl:mt-40 text-[#000] text-5xl lg:text-6xl xl:w-full   xl:text-8xl  lg:mx-auto lg:w-[900px]">
            <div className="xl:mt-[-150px] md:mt-[-130px] mt-[-200px]  mb-20">
              <div className="relative overflow-hidden md:h-[400px] h-[550px] lg:h-[500px] mb-10 ">
                <img
                  style={imageStyle}
                  className="mt-32"
                  src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187629/assets/assets/lines2_tfqf81.png"
                  alt="Sample Image"
                />
                <h4 className="absolute xl:mt-[-200px] md:mt-[-100px] lg:mt-[-150px]">
                  <span className="opacity-20 hover:opacity-50 hover:cursor-pointer">
                    services
                  </span>
                  <span className="text-[#424142] ">/ industries / </span>{" "}
                  <span className="opacity-20 hover:opacity-50 hover:cursor-pointer">
                    {" "}
                    archive
                  </span>{" "}
                  <br />{" "}
                  <span className="text-[#424142] mb-10 ">
                    we are experts in.
                  </span>
                </h4>
                <img
                  className="absolute lg:ml-20 mt-80 md:mt-28 animate-bounce mb-10"
                  src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Within7ForService />
      </div>

      <div className="max-w-[1640px]  mx-auto p-4 font-dm  relative  md:text-xl bg-[#F4F4F4]  ">
        <div className="relative mt-20   xl:mt-40 text-[#000] text-5xl lg:text-6xl xl:w-full   xl:text-8xl  lg:mx-auto lg:w-[900px]">
          <div className="xl:mt-[-150px] md:mt-[-130px] mt-[-200px]  mb-20">
            <div className="relative overflow-hidden md:h-[400px] h-[550px] lg:h-[500px] mb-10 ">
              <img
                style={imageStyle}
                className="mt-32"
                src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187629/assets/assets/lines2_tfqf81.png"
                alt="Sample Image"
              />
              <h4 className="absolute xl:mt-[-200px] md:mt-[-100px] lg:mt-[-150px]">
                <span className="opacity-20 hover:opacity-50 hover:cursor-pointer">
                  services
                </span>
                <span className="opacity-20 hover:opacity-50 hover:cursor-pointer ">
                  / industries /{" "}
                </span>{" "}
                <span className="text-[#424142]"> archive</span> <br />{" "}
                <span className="text-[#424142] mb-10 ">
                  15+ years of solved challenges
                </span>
              </h4>
              <img
                className="absolute lg:ml-20 mt-80 md:mt-28 animate-bounce mb-10"
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesEnd;
