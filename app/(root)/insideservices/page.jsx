"use client"
import React, { useEffect, useLayoutEffect } from "react";
// import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";
import Approaches from "@/console.assert(first, second)omponents/Services/Approaches";
import ServicesEnd from "@/components/Services/ServicesEnd";
import ServicesLanding from "@/components/Services/ServicesLanding";
import UseDocumentTitle from "@/Hooks/UseDocumentTitle";
import ServicesNew from "@/components/Services/ServicesNew";

const vices = () => {
  const location = useRouter();
  const title = location?.state?.title;
  UseDocumentTitle("LYM DATA | Services");
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // },[]);

  useEffect(() => {
    const handleScrollTop = () => {
      window.scrollTo({ top: 0 });
      window.removeEventListener("scroll", handleScrollTop);
    };
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  return (
    <>
        <title>LYMDATA LABS | Top Web Design Company - Expert Services</title>
        <meta
          name="description"
          content="  Looking for expert web design services? Choose the top web design company for professional solutions that drive results."
        />
        <link rel="canonical" href="  https://www.lymdata.com/services  " />
        <meta
          property="og:title"
          content="LYMDATA LABS  | Top Web Design Company - Expert Services"
        />
        <meta
          property="og:description"
          content="   Looking for expert web design services? Choose the top web design company for professional solutions that drive results.  "
        />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
        />
        <meta
          property="og:url"
          content="  https://www.lymdata.com/services    "
        />
        <meta
          name="twitter:title"
          content="LYMDATA LABS  | Top Web Design Company - Expert Services"
        />
        <meta
          name="twitter:description"
          content="  Looking for expert web design services? Choose the top web design company for professional solutions that drive results.  "
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
        />
      {/* <Navbar /> */}
      {/* <ServicesLanding /> */}
      <ServicesNew title={title} />
      {/* <Footer /> */}
    </>
  );
};

export default vices;
