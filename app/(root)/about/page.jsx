import React from "react";
import Faq from "@/components/About/Faq";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import OurTechGurus from "@/components/About/OurTechGurus";
import OurValues from "@/components/About/OurValues";
import WhyLymData from "@/components/About/WhyLymData";


const About = () => {

  return (
    <>
      {/* <Navbar /> */}
      <OurValues />
      <WhyLymData />
      <OurTechGurus />
      <Faq />
      {/* <Footer /> */}
    </>
  );
};

export default About;
