"use client"
import React, { useContext, useState } from "react";
import {
  OurTechStack,
  fullstackcard,
  insideServiceContent,
} from "@/assets/Data/data";
import Scene from "@/components/Services/ServicesGsap";
import ServiceCarousel from "./ServiceCarousel";
import TopClients from "./TopClients";
import FaqServices from "@/components/Services/FaqServices";
import { showPopupContext } from "@/components/Services/ContextPopup";
import GetInTouch from "@/components/Services/GetInTouch";
import Link from 'next/link';
import InfiniteScrollClients from "@/components/Services/InfiniteScrollClients";

const ServicesNew = () => {
  // const { showPopup, setShowPoup } = useContext(showPopupContext);
  // const description = insideServiceContent.filter(
  //   (details) => details.title == title?.title
  // );
  const [showh3, setshowh3] = useState("");
  const setshow = (e) => {
    if (showh3 === e) {
      setshowh3(null);
    } else {
      setshowh3(e);
    }
    // setshowh3((prevdata)=>prevdata===e?null:e)
  };
  return (
    <>
      <div className="pt-20 p-2 max-w-[1640px] lg:max-w-[1150px] mx-auto">
        {/* 1st div */}
    

        {/* 2nd div */}
        <div className="md:grid-cols-2 md:grid">
          <img
            className="md:sticky md:top-0 md:pb-20 md:pr-20 pb-10 pt-1"
            src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187553/assets/assets%20%283%29/asset_4_udsfcg.jpg"
            alt="typing img"
          />

          <div className="text-2xl ">
            <h1 className="md:text-5xl text-3xl font-bold md:leading-[50px]">
              Full-stack <br />
              Development
            </h1>
            {fullstackcard.map((m) => (
              <div className="mt-10 px-2 lg:w-[450px] lg:mt-32">
                {/* <h1>{m.id}</h1> */}
                <img className="w-20 h-20 " src={m.img} alt="imges" />
                <p className="text-3xl font-bold mt-4 md:mt-8  md:mb-8">
                  {m.title}
                </p>
                <p
                  className={`font-extralight text-[16px] ${
                    m.id == "6" ? "md:mb-32" : "md:mb-0"
                  }  md:text-[18px] px-2 leading-[30px] mt-4`}
                >
                  {/* {m.description} */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 3rd div */}
      <div className="bg-black md:min-h-[100vh] flex justify-center items-center text-white">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div>
              <h2 className="text-4xl md:w-[500px] md:text-6xl lg:text-7xl font-bold  pt-16">
                Values that Makes LYM
              </h2>
            </div>
            <div
              className="flex justify-center cursor-pointer"
              onClick={() => setShowPoup(true)}
            >
              <div className="flex gap-2 w-[300px] lg:ml-56 xl:mx-auto  xl:w-[300px]  lg:mt-5 pb-10 px-5 items-center justify-center">
                <h4 className="p-3 text-sm flex items-center justify-center mt-10 rounded-full w-[500px] bg-white text-black font-bold transition-all transform hover:translate-x-14">
                  Get in touch
                </h4>
                <h4 className="p-3 mt-10 flex items-center rounded-full w-[70px] bg-white text-black">
                  <img
                    src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/asset_49_lb3zxr.svg"
                    alt="arrow"
                  />
                </h4>
              </div>
            </div>
          </div>
          <div class="h-3 mt-12 w-full strip-blue"></div>

          <div className="mt-20 md:grid md:grid-cols-3 ">
            <div className="">
              <h2 className="text-xl font-bold mb-4 md:text-3xl lg:text-4xl">
                100% In-House Developers
              </h2>
              <p className="text-[17px] leading-8 font-extralight mb-14 lg:w-[280px] ">
                With 30+ dedicated In-House team, we make sure to deliver
                top-notch quality output
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 md:text-3xl lg:text-4xl">
                100% In-House Developers
              </h2>
              <p className="text-[17px] leading-8 font-extralight mb-14 lg:w-[280px] ">
                With 30+ dedicated In-House team, we make sure to deliver
                top-notch quality output
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 md:text-3xl lg:text-4xl">
                100% In-House Developers
              </h2>
              <p className="text-[17px] leading-8 font-extralight mb-14 lg:w-[280px] ">
                With 30+ dedicated In-House team, we make sure to deliver
                top-notch quality output
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4th div */}
      <div className="max-w-[1150px] mx-auto px-2">
        <h2 className="text-2xl text-[#2FA7E3] font-bold uppercase mt-16">
          Our Tech stack
        </h2>
        <h1 className="text-3xl font-bold mt-3 mb-10 ">
          Technologies we work on
        </h1>
        <div className=" grid grid-cols-2 gap-3 md:gap-10 md:grid-cols-4 mb-10">
          {OurTechStack.map((m) => (
            <div className="bg-[#F7F7F7] p-2 md:px-8 flex flex-col justify-center items-center ">
              <img
                className="w-20 h-14 mt-10 md:mt-24  md:w-[126px] md:h-[78px]"
                src={m.img}
                alt="images"
              />
              <h1 className="h-10 mt-10 font-bold">{m.title}</h1>
              <p className="text-center h-[200px] lg:h-[150px] md:h-[230px]">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5th div */}

      <div className="  px-2 bg-[#F7F7F7] pt-10 min-h-screen">
        <div className="max-w-[1150px] md:hidden mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold md:pt-24 md:leading-[60px] pb-10">
            Proven-Process. <br /> Strategy-led Approach.
          </h1>
          <div className="flex justify-between items-center bg-white h-24">
            <img
              className="w-full h-14"
              src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/research.svg"
              alt="image"
            />
            <p className="w-full font-bold flex justify-center  text-lg">
              Research
            </p>
            <p
              onClick={() => setshow("one")}
              className="w-full flex justify-center text-3xl"
            >
              {showh3 === "one" ? "-" : "+"}
            </p>
          </div>
          {showh3 === "one" && (
            <div className="bg-white px-5">
              Initiates the project through user-centric ideation, research and
              analysis.
            </div>
          )}

          <div className="flex justify-between items-center bg-white h-24 mt-5">
            <img
              className="w-full h-14"
              src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/design.svg"
              alt="image"
            />
            <p className="w-full font-bold flex justify-center  text-lg">
              Design
            </p>
            <p
              onClick={() => setshow("two")}
              className="w-full flex justify-center text-3xl"
            >
              {showh3 === "two" ? "-" : "+"}
            </p>
          </div>
          {showh3 === "two" && (
            <div className="bg-white px-5">
              Involves the creation of prototypes for UX and UI design.
            </div>
          )}

          <div className="flex justify-between items-center bg-white h-24 mt-5">
            <img
              className="w-full h-14"
              src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/development.svg"
              alt="image"
            />
            <p className="w-full font-bold flex justify-center  text-lg">
              Development
            </p>
            <p
              onClick={() => setshow("three")}
              className="w-full flex justify-center text-3xl"
            >
              {showh3 === "three" ? "-" : "+"}
            </p>
          </div>
          {showh3 === "three" && (
            <h3 className="bg-white px-5 ">
              Gears up work with varied frameworks,libraries and programming
              languages.
            </h3>
          )}
          <div className="flex justify-between items-center bg-white h-24 mt-5">
            <img
              className="w-full h-14"
              src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/testing2.svg"
              alt="image"
            />
            <p className="w-full font-bold flex justify-center  text-lg">
              Testing
            </p>
            <p
              onClick={() => setshow("four")}
              className="w-full flex justify-center text-3xl"
            >
              {showh3 === "four" ? "-" : "+"}
            </p>
          </div>
          {showh3 === "four" && (
            <h3 className="bg-white px-5">
              Initiates the most crucial process of checking and testing the
              final products.
            </h3>
          )}
          <div className="flex justify-between items-center bg-white h-24 mt-5">
            <img
              className="w-full h-14"
              src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/launch.svg"
              alt="image"
            />
            <p className="w-full font-bold flex justify-center  text-lg">
              Launch
            </p>
            <p
              onClick={() => setshow("five")}
              className="w-full flex justify-center text-3xl"
            >
              {showh3 === "five" ? "-" : "+"}
            </p>
          </div>
          {showh3 === "five" && (
            <h3 className="bg-white px-5 ">
              Aids in presenting the final products to the market and tracking
              user interaction.
            </h3>
          )}
          <div className="flex justify-between items-center bg-white h-24 mt-5 ">
            <img
              className="w-full h-14"
              src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/support2.svg"
              alt="image"
            />
            <p className="w-full font-bold flex justify-center  text-lg">
              Support
            </p>
            <p
              onClick={() => setshow("six")}
              className="w-full flex justify-center text-3xl"
            >
              {showh3 === "six" ? "-" : "+"}
            </p>
          </div>
          {showh3 === "six" && (
            <h3 className="bg-white px-5 ">
              Provides consistent support to ensure quality and performance
              post-implementation.
            </h3>
          )}
        </div>

        <div className="max-w-[1150px] hidden md:block mx-auto">
          <Scene />
        </div>
      </div>
      {/* <ServiceCarousel /> */}

      {/* <div className="bg-black  text-white h-[450px] max-w-[1150px] md:mx-auto md:h-[200px] mb-10 mx-2 py-5 mt-10 ">
  <div className="flex flex-col md:flex-row h-full justify-around items-center">
    <img  className="w-24 h-24 lg:w-[134px] lg:h-[134px] p-2  bg-white rounded-full" src="https://www.brucira.com/assets/img/bulb.svg" alt="" srcset="" />
    <h1 className="text-2xl text-center w-[250px] md:w-[400px] lg:w-[500px] leading-10 font-bold">

We have more awesome stuff to show</h1>
    <h2 className="bg-yellow-500 w-16 h-16 rounded-full flex justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg></h2>
  </div>
</div> */}
      {/* <TopClients /> */}
      {/* <InfiniteScrollClients></InfiniteScrollClients> */}
      {/* <FaqServices /> */}
    </>
  );
};

export default ServicesNew;
