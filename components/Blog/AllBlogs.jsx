import React from "react";
import Link from 'next/link';
// import { blogsData } from "../../assets/Data/data";

const AllBlogs = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 font-roboto ">
      <div className="mb-6">
        <div className=" lg:flex lg:justify-between mt-32 lg:p-8">
          <h2 className="text-3xl  uppercase mb-5  lg:text-6xl md:text-5xl">
            enabling blog
          </h2>
          <h3 className="md:text-lg  md:mt-12">
            Take a look behind the scenes, learn from us, be entertained or
            inspired.
          </h3>
        </div>
        <h3 className="mb-6 lg:text-right lg:mt-[-40px] lg:text-lg lg:mr-8">
          We are happy that you are here.
        </h3>
        <img
          className="mx-auto"
          src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691416490/LYMDATALABS/Pages/Blog/IMAGE_4_qugcon_qyutdm.png"
          alt="featured"
        />
      </div>
      <div className="flex justify-center">
        <div className="grid  md:grid-cols-2 gap-5">
          {/* {blogsData.map((m) => (
            <Link key={m.id} to={`/blog/${m.id}`}>
              <div>
                <img src={m.img} alt="Featured" />

                <h3 className="uppercase mt-4 lg:text-lg">{m.title}</h3>
                <h3 className="mt-4 text-gray-500">{m.Date}</h3>
                <h3 className="text-gray-500">{m.Genere}</h3>
                <h3 className="text-gray-500 text-sm mb-6">{m.Time}</h3>
              </div>
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
