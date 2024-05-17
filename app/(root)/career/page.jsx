"use client"
import React, { useEffect } from "react";
import CareerIntro from "@/components/Careers/CareerIntro";
// import Footer from "../Components/Footer";
import JobListing from "@/Components/Careers/JobListing";
// import Navbar from "@/components/Navbar";
import UseDocumentTitle from "@/Hooks/UseDocumentTitle";
import Carousel from "@/components/Careers/Carousel";



const Careers = () => {
  UseDocumentTitle("LYMDATA LABS | Unlock Your Career Potential");
  return (
    <>
      <title>LYMDATA LABS  | Unlock Your Career Potential</title>
      <meta name="description" content=" Unlock your career potential with the leading web design company. Get expert guidance and take your skills to new heights. " />
      <link rel="canonical" href=" https://www.lymdata.com/careers  " />
      <meta property="og:title" content="LYMDATA LABS  | Unlock Your Career Potential" />
      <meta property="og:description" content = "  Unlock your career potential with the leading web design company. Get expert guidance and take your skills to new heights. " />
 <meta name="image" property="og:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      <meta property="og:url" content=" https://www.lymdata.com/careers   " />
      <meta name="twitter:title" content="LYMDATA LABS  | Unlock Your Career Potential" />
      <meta name="twitter:description" content=" Unlock your career potential with the leading web design company. Get expert guidance and take your skills to new heights.  " />
 <meta name="twitter:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />

      {/* <Navbar /> */}
      <CareerIntro />
      <Carousel />
      <JobListing />
      {/* <Footer /> */}
    </>
  );
};

export default Careers;
