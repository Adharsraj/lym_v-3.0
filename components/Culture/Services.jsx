import React from "react";
import Link from 'next/link';
const Services = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px]   mx-auto p-4 font-dm  md:text-xl overflow-hidden  ">
        <div className="lg:mt-20">
          <div className="md:hidden">
            <div className="flex justify-between align-middle items-center some-element">
              <h3>services</h3>
              {/* <img
                className="hover:animate-spin"
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
                alt="image2"
                style={{ animationDuration: "3s" }}
              /> */}
            </div>

            <div className="text-[25px]  xl:text-[82px] xl:w-[560px] mx-auto text-left   leading-10  text-[#000]  mt-10  mb-16 some-element">
              <h3>
                We’re challengers and problem solvers.See what this amazing team
                is capable of.See what this amazing team is capable of.
              </h3>
            </div>
          </div>
          <Link href="/contact">
            <div className="flex md:hidden group hover:cursor-pointer gap-4 w-[240px] xl:w-[560px] md:mx-auto md:w-[600px">
              <h3 className="p-2 md:mt-10 text-white rounded-full w-[230px] bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px] some-element">
                Lets build together
              </h3>
              <h3 className="p-2 md:mt-10 flex items-center rounded-full w-[50px] bg-[#282728]">
                <img
                  className="invert"
                  src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/services/right_arrow-removebg-preview.png"
                  alt="arrow"
                />
              </h3>
            </div>
          </Link>

          <div className="hidden md:block mt-20 relative">
            <div className="flex justify-between xl:px-16 lg:px-5  align-middle items-center">
              <h3 className="text-sm some-element">services</h3>
              <h3 className="text-[38px] xl:text-[42px] hidden w-[600px]  leading-10 some-element">
                We're challengers at heart and <br />
                builders by nature.
              </h3>
              <img
                className="hover:animate-spin"
                src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187585/assets/assets/asset_40_gvfj4b.svg"
                alt="image3"
                style={{ animationDuration: "3s" }}
              />
            </div>

            <div className="text-[42px] lg:mt-[-40px] lg:text-[3px]  w-[600px] xl:text-[42px] xxl:w-[820px]  mx-auto text-left    leading-10   text-[#000]    mb-16">
              <h3 className="lg:text-4xl  lg:w-[670px] z-10 xxl:w-[940px] xxl:text-5xl some-element">
                We’re challengers and problem solvers.
                <br />
                See what this amazing team is capable of.
              </h3>
            </div>
            <Link href="/contact">
              <div className="flex group hover:cursor-pointer gap-4 w-[600px] xxl:w-[830px]  mx-auto lg:mb-40">
                <h3 className="p-2  flex justify-center rounded-full w-[220px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px] some-element">
                  Lets build together
                </h3>
                <h3 className="p-2  flex items-center rounded-full w-[40px] bg-[#282728] ">
                  <img
                    src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/asset_60_lqw1hz.svg"
                    alt="arrow"
                  />
                </h3>
              </div>
            </Link>

            <img
              className="hidden xl:flex absolute -z-10 top-0 scale-150"
              src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418193/LYMDATALABS/Pages/Culture/lines_rnz7i6_ey9ikb.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
