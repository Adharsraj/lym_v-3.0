// import React from "react";
// const CareerIntro = () => {
//   return (
//     <div className="max-w-[1640px] mx-auto p-4  text-[#040404] ">
//       <span className="text-5xl mt-32 md:text-7xl lg:text-9xl flex justify-center text-center font-roboto uppercase  w-[200px] mx-auto">
//         Creative, curious, friendly & talented?
//       </span>
//       <div className="mt-8 md:grid md:grid-cols-4 md:gap-4">
//         <video
//           className="w-full hidden md:flex h-full object-cover filter blur-xl"
//           style={{ transform: "scaleX(-1)" }}
//           src="https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691417086/LYMDATALABS/Pages/Careers/careers_ypgzvs_pjdiqg.mp4"
//           autoPlay
//           loop
//           muted
//         ></video>
//         <video
//           className="w-full h-full object-cover col-span-2"
//           src="https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691417086/LYMDATALABS/Pages/Careers/careers_ypgzvs_pjdiqg.mp4"
//           autoPlay
//           loop
//           muted
//         ></video>
//         <video
//           className="w-full h-full hidden md:flex object-cover filter blur-xl"
//           style={{ transform: "scaleX(-1)" }}
//           src="https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691417086/LYMDATALABS/Pages/Careers/careers_ypgzvs_pjdiqg.mp4"
//           autoPlay
//           loop
//           muted
//         ></video>
//       </div>
//       <h1 className="w-[300px] md:w-[450px] lg:w-[590px] text-lg md:text-2xl   mx-auto mt-12 font-times">
//       LYM Data Labs is a team of designers, developers, strategists, copywriters and
//         producers brought together by good fortune, great clients, and a shared
//         drive to make amazing things. Individually, we’re great; together, we
//         become extraordinary.
//       </h1>
//     </div>
//   );
// };

// export default CareerIntro;

import React from "react";
// import img from "../../assets/Career.jpeg";
const CareerIntro = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 text-[#040404] overflow-hidden ">
      <div className="text-center relative mt-10">
        <div className="absolute top-[-20%] md:top-[10%] w-full text-8xl md:text-9xl md:leading-[10px] font-aeonic">
          <h2 className="text-6xl px-1 z-20  text-[#282728] xxl:px-40 lg:text-[170px] xxl:text-[220px] md:text-8xl mt-52 lg:mt-10 font-bold absolute">
            Join the
            <h1 className="lg:ml-20">—team</h1>
          </h2>
        </div>
        <img
          className="pt-10 md:w-[500px] xl:w-[700px] xl:h-[600px] lg:w-[520px] mx-auto object-cover"
          src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/075ffc.webp"
          alt="career_image"
          srcset=""
        />
      </div>
      {/* <div className="relative overflow-hidden text-center">
          <h2 className="text-6xl px-1 z-20  text-[#282728] xxl:px-10 lg:text-[170px] xxl:text-[220px] md:text-8xl mt-24 lg:mt-14 font-bold absolute">
            Join the
            <h1 className="lg:ml-20">—team</h1>
          </h2>
          <img
            src={img}
            className=" w-full top-0 h-[300px] xl:w-[700px] lg:h-[600px] scale-x-150 lg:px-[-100px]"
            alt="imgrotate"
          />
        </div> */}
      <div className="some-ele font-bold">
        <h3 className="mt-10 mb-10 text-2xl xl:text-3xl md:w-[500px] xl:w-[720px] xl:mt-24 mx-auto leading-7">
          At our company, we are always seeking individuals who are eager to
          take on new and thrilling challenges.
        </h3>
        <h3 className="text-2xl xl:text-3xl md:w-[500px] xl:w-[720px] mx-auto leading-7 mb-10">
          Let's connect and introduce ourselves to each other. We are forward to
          getting to know you better.
        </h3>
      </div>
    </div>
  );
};

export default CareerIntro;
