import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SlSocialDribbble, SlSocialLinkedin } from "react-icons/sl";
import { ourValues } from "../../assets/Data/data";
const OurValues = () => {
  return (
    <div className="max-w-[1640px]  mx-auto p-4 bg-black text-white font-roboto ">
      <div className="mt-32">
        <h1 className="mb-8 mt-8 text-2xl  md:text-4xl lg:text-5xl  lg:ml-10 md:ml-5 font-times">
          About{" "}
          <span className="text-yellow-300 font-times  text-2xl md:text-4xl lg:text-4xl  ">
            Lymdata
          </span>
        </h1>
        <h2 className=" w-[290px]  md:text-xl  lg:w-[635px] md:w-[500px] md:ml-5 lg:ml-10 font-dm ">
          LymData labs is a group of creative technologists dedicated to design
          and build outstanding products and user experiences for our clients
          worldwide.
        </h2>
      </div>

      <div className="flex gap-5 sm:mt-28 mt-20  mb-20 md:ml-5 lg:ml-10">
        <span>
          <BsFacebook />
        </span>
        <span>
          <AiFillInstagram />
        </span>
        <span>
          <FaTwitter />
        </span>
        <span>
          <SlSocialDribbble />
        </span>
        <span>
          <SlSocialLinkedin />
        </span>
      </div>
      <div className="flex flex-col justify-center items-center text-center mb-16">
        <h1 className="text-sm text-gray-400 mb-4 md:text-lg lg:text-xl">
          Our Values & Culture
        </h1>
        <span className="mb-10 text-3xl md:text-6xl">
          Weaving a culture, despite the distance
        </span>
        <h3 className="text-lg">
          Despite being a remote team, there are few things we value from our
          team members that embodies the spirit of the company.
        </h3>
      </div>

      {ourValues.map((m) => (
        <div
          key={m.id}
          className="mb-6 lg:flex  w-[290px] mx-auto md:w-[600px] lg:w-[800px] border-b "
        >
          <h1 className="mb-6 lg:w-[400px] text-xl ml-2 md:text-2xl ">
            {m.title}
          </h1>
          <h3 className="  mx-auto  lg:w-[400px] lg:text-left mb-5 md:text-lg ">
            {m.desc}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default OurValues;
