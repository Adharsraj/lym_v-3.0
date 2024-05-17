// import React from "react";
// import { BsArrowRight } from "react-icons/bs";

// const JobListing = () => {
//   return (
//     <div className="max-w-[1640px] mx-auto p-4 text-[#040404] mb-10">
//       <div className="flex  justify-between p-3 w-[300px] md:w-[450px] lg:w-[600px] lg:text-xl mx-auto">
//         <div className="w-[150px] md:w-[350px]  md:text-lg lg:text-xl">
//           <h5>OPEN APPLICATION</h5>
//           <h3 className="mt-3">India / Remote</h3>
//         </div>

//         <div className="w-[150px] md:w-[350px] md:text-lg ">
//           <h2>
//             We're not actively hiring at the moment, but always looking for
//             great people to collaborate with.
//           </h2>
//           <div className="w-[102px] h-[53px] mt-2 mb-6 bg-[#262626] text-white hover:-rotate-45 transition-transform">
//             <span className="flex justify-end">
//               <BsArrowRight size={30} />
//             </span>
//             <h5 className="flex justify-center">Get in touch</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobListing;










import React from "react";
import { jobCards } from "../../assets/Data/data";

const JobListing = () => {
  const handleClick = () => {
    const emailTo = 'careers@lymdata.com';
    const subject = 'Job Application'; 

    const emailLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}`;

    window.location.href = emailLink;
  };


  return (
    // <div className="max-w-[1640px] mx-auto p-4 text-[#040404] mb-10">
    //   <div className="lg:flex flex flex-col">

    //   <div className="lg:w-[300px]">
    //     <h5 className="lg:px-24 font-bold text-3xl some-ele lg:mb-5">Engineering</h5>
    //   </div>

    //   {/* 1 */}
    //   <div className="px-24">
    //   <div className="flex justify-between lg:w-full lg:pl-20 gap-5 mt-5 border-t p-10 rounded-3xl border some-ele ">
    //     <div>
    //     <h5 className="font-bold text-2xl">Backend Engineer (Senior)</h5>
    //     <div className="flex gap-7 mt-7">
    //     <h5 className=" rounded-full p-3 bg-blue-100">Engineering</h5>
    //     <h5 className="rounded-full p-3 bg-gray-100">Remote</h5>
    //     <h5 className=" rounded-full p-3 bg-gray-100">Los Angeles</h5>
    //     </div>
    //     </div>
    //     <div className="pr-7 mt-5">
    //     <h5 className=" bg-black text-white rounded-full p-3 w-[150px] text-center cursor-pointer">Apply Now</h5>
    //   </div>
    //   </div>
    //   </div>


    //   {/* 2 */}
    //   <div className="px-24">
    //   <div className="flex justify-between lg:w-full lg:pl-20  gap-5 mt-5 border-t p-10 rounded-3xl border some-ele ">
    //     <div>
    //     <h5 className="font-bold text-2xl">Backend Engineer (Staff/Principal/Lead/Architect)</h5>
    //     <div className="flex gap-7 mt-7">
    //     <h5 className=" rounded-full p-3 bg-blue-100">Engineering</h5>
    //     <h5 className=" rounded-full p-3 bg-gray-100">Remote</h5>
    //     <h5 className="rounded-full p-3 bg-gray-100">Los Angeles</h5>
    //     </div>
    //     </div>
    //     <div className="pr-7 mt-5">
    //     <h5 className="bg-black text-white rounded-full p-3 w-[150px] text-center cursor-pointer">Apply Now</h5>
    //   </div>
    //   </div>
    //   </div>

    //   {/* 3 */}
    //   <div className="px-24">
    //   <div className="flex justify-between lg:w-full lg:pl-20  gap-5 mt-5 border-t p-10 rounded-3xl border some-ele ">
    //     <div>
    //     <h5 className="font-bold text-2xl">iOS Engineer (Senior)</h5>
    //     <div className="flex gap-7 mt-7">
    //     <h5 className="rounded-full p-3 bg-blue-100">Engineering</h5>
    //     <h5 className="rounded-full p-3 bg-gray-100">Remote</h5>
    //     <h5 className=" rounded-full p-3 bg-gray-100">Los Angeles</h5>
    //     </div>
    //     </div>
    //     <div className="pr-7 mt-5">
    //     <h5 className=" bg-black text-white rounded-full p-3 w-[150px] text-center cursor-pointer">Apply Now</h5>
    //   </div>
    //   </div>
    //   </div>
    //   </div>

    // </div>




    <div className="px-[3%] md:px-[10%] flex flex-col gap-10 md:mb-12 mb-10">
      {/* <h5 className="font-bold text-3xl some-ele">Engineering</h5> */}
      {jobCards.map((m)=>(
        <div className="flex flex-col gap-10 some-ele">

      <div className="border rounded-3xl p-[4%]  md:flex  md:justify-between items-center">
        <div>
        <h5 className="font-bold md:text-2xl text-xl">{m.post}</h5>
        <div className="flex justify-around flex-col md:flex-row gap-7 mt-7">
          <p className="rounded-3xl p-3 bg-blue-100  w-[150px] text-center">{m.stream}</p>
          <p className="rounded-full p-3 w-[100px] bg-gray-100  text-center">{m.workway}</p>
          <p className="hidden md:flex rounded-full p-3 bg-gray-100  md:px-10 ">{m.place}</p>

        </div>

        </div>
        <div>
          <button className="bg-black text-white rounded-full p-3 w-[150px] text-center cursor-pointer mt-5" 
          onClick={handleClick}>Apply now</button>
        </div>
      </div>
      </div>

      ))}
    </div>
  );
};

export default JobListing;