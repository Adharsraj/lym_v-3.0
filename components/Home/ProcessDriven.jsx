import React from "react";
import Link from 'next/link';

const ProcessDrivendhn = () => {
  return (
    <div className="bg-[#BEBDBE] relative">
      <div className="max-w-[1640px] relative bg-[#BEBDBE]   mx-auto  font-dm  md:text-xl overflow-hidden ">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414521/LYMDATALABS/Pages/Home/giphy_2_udzb4u.webp"
            className="scale-150 opacity-60"
          />
        </div>

        <div className="">
          <div className="  flex flex-between">
            <h4 className="md:hidden z-10  text-sm font-mono py-1">
              Fields of expertise
            </h4>
            <div className="hidden  md:flex md:flex-col w-[200px] ml-auto mr-16 text-white text-sm">
              <h4 className=" z-10  mt-5 mb-1">
                We are enthusiastic about empowering businesses to build amazing
                user experiences through data-driven design.
              </h4>
              <h4 className="z-10">
                Our strategy centres on utilising data and insights to
                create successfully engage, delight, and convert people.
              </h4>
            </div>
          </div>

          <div className="">
            {/* Text Content */}
            <div className="relative z-10">
              <div className="hidden md:block text-white">
                <div>
                  <h4 className="text-[100px] lg:text-[150px] xl:text-[200px]">
                    <span className="lg:text-[135px] xl:text-[180px]">D</span>
                    ata
                  </h4>
                </div>
                <div className="flex items-center justify-around text-[100px] xl:text-[200px] xl:mt-32 lg:text-[140px] mt-14 lg:mt-20 ">
                  <img
                    className="lg:w-20 hover:animate-spin"
                    src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
                    alt="imgsmallviewstar "
                    style={{ animationDuration: "3s" }}
                  />
                  <h6>driven</h6>
                  <h6>design</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden relative   md:flex text-white mt-32 xl:ml-20  justify-between md:items-center w-[600px] xl:w-[900px] lg:mb-16 ">
            <h4 className="">Fields of expertise </h4>
            <div className="flex   xl:gap-1  gap-4 w-[200px] justify-end md:w-[200px]  items-center xl:w-[560px] ">
              <Link href="/services">
                <div className="flex group">
                  <h4 className="p-4  xl:w-[160px] flex text-center items-center justify-center lg:w-[160px] lg:h-10 rounded-full w-[220px] bg-[#000] transition-all duration-300  transform group-hover:-translate-x-[-56px]">
                    What we do
                  </h4>
                  <h4 className="p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#000]">
                    <img
                      className="lg:w-56"
                      src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"
                      alt="arrow"
                    />
                  </h4>
                </div>
              </Link>
            </div>
          </div>

          <div className="md:hidden font-helvetica relative text-white text-6xl">
            <h4>
              <span className="text-6xl">D</span>
              ata
            </h4>
            <div className=" md: items-center flex gap-2 justify-center">
              <img
                className="hover:animate-spin w-10"
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
                alt="imgsmallviewstar "
                style={{ animationDuration: "3s" }}
              />
              <h4>driven</h4>
            </div>
            <h4>design</h4>
          </div>

          <div className=" relative md:hidden md:flex-col w-[200px] mx-auto mr-16 text-white  text-sm">
            <h4 className=" mt-5 w-[200px]  mb-5 py-5">
              We are enthusiastic about empowering businesses to build amazing
              user experiences through data-driven design.
            </h4>
            <h4 className="w-[200px]">
              {" "}
              Our strategy centres on utilising data and insights to
              create successfully engage, delight, and convert people.
            </h4>
            <Link href="/services">
              <div className="flex gap-4 w-[200px] xl:w-[560px] mx-auto">
                <h4 className="text-center p-2 mt-10 rounded-full w-[220px] bg-[#000] transition-all ">
                  What we do
                </h4>
                <h4 className="p-2 mt-10 flex items-center rounded-full text-white w-[40px] bg-[#000]">
                  <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="arrow"/>
                </h4>
              </div>
            </Link>
          </div>

          <div className="z-10 relative mx-0 md:mx-0 ">
            <style>
              {`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessDrivendhn;
