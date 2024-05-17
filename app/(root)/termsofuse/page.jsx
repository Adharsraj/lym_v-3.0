"use client"
import React, { useEffect } from "react";
// import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";
import UseDocumentTitle from "@/Hooks/UseDocumentTitle";

const TermsOfUse = () => {

  return (
    <>
      <title>LYMDATA LABS | Terms & Conditions  </title>
      <meta name="description" content="Discover the comprehensive terms and conditions of LYMDATA LABS. Get insights into our policies and guidelines. Explore now!" />
      <link rel="canonical" href="   https://www.lymdata.com/terms  " />
      <meta property="og:title" content="LYMDATA LABS | Terms & Conditions  " />
      <meta property="og:description" content = " Discover the comprehensive terms and conditions of LYMDATA LABS. Get insights into our policies and guidelines. Explore now!" />
 <meta name="image" property="og:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      <meta property="og:url" content="https://www.lymdata.com/terms   " />
      <meta name="twitter:title" content="LYMDATA LABS | Terms & Conditions  " />
      <meta name="twitter:description" content="  Discover the comprehensive terms and conditions of LYMDATA LABS. Get insights into our policies and guidelines. Explore now!" />
 <meta name="twitter:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />

      {/* <Navbar /> */}
      <div className="max-w-[1640px] mx-auto p-4 grid justify-center mb-20  gap-8 ">
        <div className="mt-32 some-ele">
          <h2 className="md:text-lg lg:w-[700px] lg">Welcome to LYMData!</h2>
          <h1 className="mt-5 text-6xl font-bold ">
            Terms and conditions
          </h1>
          <div>
            <h3 className="mt-16 text-xl ">
            Last Updated: [10/11/2023] 
            </h3>
            <h4 className="mt-20 lg:w-[1000px] md:text-lg">
            These Terms and Conditions ("Terms") constitute a legally binding agreement between LYMDATA LABS private limited, referred to as "the Company," and the users or customers accessing and using our software and website, referred to as "the User" or "the Customer." 
            </h4>
            

            <h3 className="mt-12 text-4xl">
            1. Acceptance of Terms 
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            By accessing or using our website and software, the User acknowledges and agrees to be bound by these Terms and any other policies or guidelines referenced herein. 
            </h4>

            <h3 className="mt-12 text-4xl">
            2. License and Usage 
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            The Company grants the User a limited, non-exclusive, non-transferable license to access and use our software and website for its intended purposes, subject to these Terms. 
            </h4>

            <h3 className="mt-12 text-4xl">
            3. Registration and Accounts 
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            Some areas of our website or software may require the User to register or create an account. The User is responsible for maintaining the confidentiality of their account information and is liable for all activities associated with their account. 
            </h4>

            <h3 className="mt-12 text-4xl">
            4. Data Privacy 
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            The Company may collect and use personal and non-personal data as outlined in our Privacy Policy. By using our software and website, the User consents to such data collection and usage. 
            </h4>

            <h3 className="mt-12 text-4xl">
            5. Restrictions  
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            The User shall not:  
            </h4>
            <ul className="list-disc mt-3 px-10">
              <li>Reverse engineer, decompile, or disassemble the software. </li>
              <li>Use the software or website for any illegal, unauthorized, or malicious purposes. </li>
              <li>Share, sublicense, or make the software or website available to third parties without prior written consent from the Company. </li>
            </ul>

            <h3 className="mt-12 text-4xl">
            6. Intellectual Property 
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            The Company retains all rights, title, and interest in and to the software, website, and any related intellectual property. 
            </h4>

            <h3 className="mt-12 text-4xl">
            7. Warranty Disclaimer 
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            The software and website are provided "as is," without warranties of any kind. The Company disclaims all liability for any data loss, damage, or other issues resulting from the use of the software and website.  
            </h4>

            <h3 className="mt-12 text-4xl">
            8. Limitation of Liability 
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            The Company is not liable for any direct, indirect, special, incidental, or consequential damages, including but not limited to loss of profits, data, or business interruption. 
            </h4>


            <h3 className="mt-12 text-4xl">
            9. Termination  
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            The Company reserves the right to terminate or suspend a User's access to the software or website at its discretion.  
            </h4>


            <h3 className="mt-12 text-4xl">
            10. Governing Law and Jurisdiction 
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            These Terms are governed by the laws of Ernakulam Jurisdiction, and any disputes shall be resolved in the courts of Ernakulam Jurisdiction.  
            </h4>

            <h3 className="mt-12 text-4xl">
            11. Changes to Terms 
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            The Company may update or modify these Terms at any time. It is the User's responsibility to review these Terms periodically. 
            </h4>

            <h3 className="mt-12 text-4xl">
            12. Contact Information 
            </h3>
            <h4 className="mt-7 lg:w-[1000px] md:text-lg">
            If you have any questions or concerns about these Terms, please contact us at info@lymdata.com. 
            </h4>
        
            
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default TermsOfUse;
