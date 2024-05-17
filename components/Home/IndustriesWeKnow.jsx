"use client"
import React from "react";
import { useEffect, useRef } from "react";

const IndustriesWeknowdhn = () => {
  const videoRef = useRef(null);
  const withinseven = () => {
    const component2Element = document.getElementById("withinseven");
    if (component2Element) {
      window.scrollTo({
        top: component2Element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <div className="max-w-[1640px] mx-auto p-4 overflow-hidden">
      <div className="grid md:flex md:items-center gap-4">
        <div className="col-span-3 md:col-span-1">
          <h4 className="font-mono lg:mb-20 text-sm">
            Industries we know <br /> and understand
          </h4>
          <h5 className="text-7xl lg:mb-10 lg:text-8xl xl:text-[190px] font-bold">
            experi <br /> ence
          </h5>
          <img
            onClick={withinseven}
            className="lg:ml-20 cursor-pointer animate-bounce"
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg"
            alt=""
          />
        </div>

        <div
          className="relative col-span-3 md:col-span-1"
          style={{ zIndex: "-1" }}
        >
          <video
            className="w-full h-full object-cover filter"
            src="https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691413588/LYMDATALABS/Pages/Home/home-phones_gkoiuf_s03eip.mp4"
            autoPlay
            loop
            muted
            ref={videoRef}
          ></video>
        </div>

        <div className="col-span-3 md:col-span-1">
          <img
            className="lg:mt-[-90px] lg:mb-20 hover:animate-spin"
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
            alt="star"
            style={{ animationDuration: "3s" }}
          />
          <h4 className="font-semibold text-2xl mt-2 mb-2 lg:mb-10">
            We know what we're doing
          </h4>
          <h5>
          we have dedicated ourselves to developing and refining digital solutions, gaining valuable insights into the key factors that contribute to the long-term success of businesses.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeknowdhn;
