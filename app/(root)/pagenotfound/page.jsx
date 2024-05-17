import React from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div className="max-w-screen-xl mx-auto p-4 font-dm mb-20 gap-8 ">
        <div className="mt-24 md:mt-32 flex flex-col items-center justify-center">
          <h1 className="font-bold text-2xl md:text-4xl font-sans text-center">
            Oops! Something went wrong.
          </h1>
          <h3 className="mt-5 text-lg md:text-xl text-center">
            But don't worry, we've got you covered.
          </h3>

          <img
            src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187573/assets/Logos/Companylogo_lok0s3.svg"
            alt="Image13"
            className="mt-8 md:mt-10 w-full md:w-auto"
          />

          <Link href="/" className="mt-5">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mt-5">
              JUST TAKE ME OUT OF HERE
            </button>
          </Link>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default PageNotFound;
