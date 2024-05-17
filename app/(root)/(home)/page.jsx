"use client"
import React, { useState } from "react";
import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import HowweThinkdhn from "@/components/Home/HowWeThink";
// import IndustriesWeknowdhn from "@/components/Home/IndustriesWeknow";
import ProcessDrivendhn from "@/components/Home/ProcessDriven";
import ProcessDrivenFive from "@/components/Home/ProcessDrivenFive";
import Marque from "@/components/Home/Marque";
import Within7Industriesdhn from "@/components/Home/Within7Industries";
import UseDocumentTitle from "@/Hooks/UseDocumentTitle";
import DataSlide1 from "@/components/Home/DataSlide1";
import DhnnScroller from "@/components/Home/DhnnScroller";
import Services from "@/components/Home/Services";
import Insights from "@/components/Home/Insights";
import HorizontalScroll from "@/components/Home/HorizontalScroll";
import SmoothScroll from "@/components/Home/SmoothScroll";
import useLocoScroll from "@/Hooks/useLocoScroll";

const Home = () => {
  const [showImage, setShowImage] = useState(false);
  UseDocumentTitle("LYMDATA LABS | Best Web Development Company In Kochi");
  const handleMenuClose = () => {
    setShowImage(true);
  };
  return (
    <>
      <div id="scroll-container" data-scroll-container>
          <title>LYMDATA LABS | Best Web Development Company In Kochi</title>
          <meta
            name="description"
            content=" LYMDATA LABS is a dynamic technology and design company that is committed to helping businesses achieve rapid digital transformation With our expertise."
          />
          <link rel="canonical" href=" https://www.lymdata.com/ " />
          <meta
            property="og:title"
            content="LYMDATA LABS  | Best Web Development Company In Kochi"
          />
          <meta
            property="og:description"
            content="  LYMDATA LABS is a dynamic technology and design company that is committed to helping businesses achieve rapid digital transformation With our expertise."
          />
          <meta
            name="image"
            property="og:image"
            content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
          />
          <meta property="og:url" content=" https://www.lymdata.com/  " />
          <meta
            name="twitter:title"
            content=" LYMDATA LABS  | Best Web Development Company In Kochi "
          />
          <meta
            name="twitter:description"
            content=" LYMDATA LABS is a dynamic technology and design company that is committed to helping businesses achieve rapid digital transformation With our expertise.  "
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
          />
        {/* <Navbar onMenuClose={handleMenuClose} /> */}
        {/* <Hero showImage={showImage} /> */}
        {/* <DhnnScroller /> */}
        {/* <HorizontalScroll></HorizontalScroll> */}
        <SmoothScroll></SmoothScroll>
        {/* <LocomotiveScroll/> */}
        <HowweThinkdhn />
        <DataSlide1 />
        {/* <ProcessDrivendhn /> */}
        {/* <ProcessDrivenFive /> */}
        {/* <IndustriesWeknowdhn /> */}
        <Within7Industriesdhn />
        {/* <Services /> */}
        <Insights />
        <Marque />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
