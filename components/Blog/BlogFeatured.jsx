import React from "react";

const BlogFeatured = () => {
  return (
    <div className="max-w-[1640px]  mx-auto p-4   font-roboto ">
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
    </div>
  );
};

export default BlogFeatured;
