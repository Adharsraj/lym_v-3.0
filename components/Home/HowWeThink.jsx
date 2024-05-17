"use client"
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Link from 'next/link';
const HowweThinkdhn = () => {
  const content =
    " At LYM Data Labs, constant learning is our driving force. We actively invest in cutting-edge tools and technologies,empowering our team to stay ahead in the dynamic landscape of digital solutions. At the core of our approach is a deep understanding of our Client’s needs and goals. We specialize in crafting tailored solutions across the realms of digital marketing, branding, web design, web development, and mobile apps.";
  const words = content.split(" ");
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  const linesHorizontalMovement = useTransform(
    scrollYProgress,
    [0, 10.1],
    ["0%", "-70%"]
  );

  return (
    <div
      id="howethink"
      className="bg-[#F8FAFC] overflow-hidden textSliderContainerd  min-h-screen"
      data-scroll-section
    >
      <div className="max-w-[1640px]  mx-auto p-4 font-helvetica  md:text-xl bg-[#F8FAFC] ">
        <div className="lg:mt-20">
          <div className="md:hidden">
            <div className="flex justify-between align-middle items-center">
              <h1 className="mt-10 ">How we think</h1>
              <img
                className=" hover:animate-spin w-10"
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
                alt=""
                style={{ animationDuration: "3s" }}
              />
            </div>

            <div className="text-[25px] mt-5 some-element ">
              <h1>Pioneers in Innovation,</h1>
              <h1>Masters in Execution.</h1>
            </div>
            <div className="text-[20px] some-element  xl:text-[42px] xl:w-[560px] mx-auto text-left   leading-10  text-[#7b7b7b] mt-14  mb-4">
              <h1>
                At LYM Data Labs, constant learning is our driving force. We
                actively invest in cutting-edge tools and technologies,
                empowering our team to stay ahead in the dynamic landscape of
                digital solutions. At the core of our approach is a deep
                understanding of our Client’s needs and goals. We specialize in
                crafting tailored solutions across the realms of digital
                marketing, branding, web design, web development, and mobile
                apps.
              </h1>
            </div>
            <Link href="/about">
              <div className="flex z-30  group hover:cursor-pointer gap-2 w-[300px] lg:ml-56 xl:mx-auto  xl:w-[560px]  lg:mb-7">
                <h1 className="p-2 text-sm flex items-center justify-center mt-10 rounded-full w-[150px] bg-black text-white transition-all ">
                  Dive into our culture
                </h1>
                <h1 className="p-2 mt-10 flex items-center rounded-full w-[35px] bg-black text-white">
                  <img src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/asset_60_lqw1hz.svg" />
                </h1>
              </div>
            </Link>
          </div>

          <div className="hidden md:block mt-20 relative">
            <div className="flex justify-between xl:px-5  align-middle items-center">
              <h1>How we think</h1>
              <h1 className="text-[35px]  xl:text-[42px]  some-element  xl:w-[750px]  lg:w-[600px] leading-10">
                Pioneers in Innovation, Masters in Execution
              </h1>
              <img
                className="hover:animate-spin"
                src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/asset_48_v3glxe.svg"
                alt=""
                style={{ animationDuration: "3s" }}
              />
            </div>
            <div className="text-[40px] w-[700px]  lg:ml-56 xl:mx-auto  xl:text-[30px] xl:w-[700px] mx-auto text-left   leading-9  text-[#5a5a5a]  mt-16 mb-14 lg:mb-10">
              <h1 className="flex flex-wrap" ref={element}>
                {words.map((word, i) => {
                  const start = i / words.length;
                  const end = start + 1 / words.length;
                  const opacity = useTransform(
                    scrollYProgress,
                    [start, end],
                    [0, 1]
                  );

                  return (
                    <span>
                      <span className="absolute opacity-[0.2]">{word}</span>
                      <motion.span
                        style={{ opacity: opacity }}
                        className="mt-[2px] me-[12px] relative"
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </h1>
            </div>

            <div className="hidden xl:flex absolute lines z-0 top-[140px] opacity-[50%] pt-3 left-0">
              <motion.img
                src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/lines_rnz7i6.png"
                alt="img"
                style={{
                  x: linesHorizontalMovement,
                  transition: "transform 0.3s ease-out",
                  transformOrigin: "top left",
                  scale: 1.6,
                  width: "100%",
                  height: "auto",
                  zIndex: "-1000",
                }}
              />
            </div>
            <div className="flex  gap-4 w-[600px] lg:ml-10 xl:mx-auto  xl:w-[700px] mx-auto lg:mb-7">
              <Link href="/about">
                <div className="flex  group  gap-2  z-[100]">
                  <h1 className="p-2 flex border  items-center justify-center mt-7 z-100 rounded-full w-[220px] bg-black text-white transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    Dive into our culture
                  </h1>
                  <h1 className="p-2 mt-7  flex items-center rounded-full w-[45px] bg-black text-white">
                    <img
                      src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/asset_60_lqw1hz.svg"
                      alt="Arrow Right"
                    />
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowweThinkdhn;
