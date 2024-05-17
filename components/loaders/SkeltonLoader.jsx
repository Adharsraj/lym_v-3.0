import React from "react";
import Link from 'next/link';
import { blogCards } from "@/assets/Data/data";

const SkeltonLoader = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 font-roboto overflow-hidden ">
      <div className="mb-6">
        <div className=" lg:flex lg:justify-between mt-32 lg:p-8">
          <h2 className="text-3xl bg-gray-200 text-transparent  uppercase mb-5  lg:text-6xl md:text-5xl">
            enabling blog
          </h2>
          <h3 className="md:text-lg bg-gray-200 text-transparent  md:mt-12">
            Take a look behind the scenes, learn from us, be entertained or
            inspired.
          </h3>
        </div>

        <div className=" bg-gray-200 w-screen mt-4 "></div>
      </div>
      <div className="flex justify-center">
        <div className="grid  md:grid-cols-2 gap-5">
          {blogCards.map((m) => (
             <Link key={m.id} to={`/blog/${m.id}`}>
             <div className='w-full lg:w-[300px] lg:mt-10 h-[450px] bg-white cursor-pointer rounded-3xl mx-auto shadow-2xl'>
           <img src={m.img} className='h-[200px] w-full rounded-t-3xl' alt="" />
           <div className='flex flex-col justify-between h-[160px] lg:px-5 px-3 pt-2 lg:pt-3 some-element'>
           <h1 className='font-bold lg:mt-5'>{m.title}</h1>
           <h2 className='lg:text-[14px] text-[12px] lg:mt-20'>{m.desc}</h2>
         
           </div>
             </div>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeltonLoader;
