"use client"
import React, { useEffect, useState } from "react";
import { servv, sevenIndustries } from "../../assets/Data/data";
import Link from 'next/link';

const Within7Industriesdhn = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoLoading, setVideoLoading] = useState({});
  const [videoUrls, setVideoUrls] = useState({});

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  const carouselData = [
    {
      id: 1,
      title: "Web Development",
      details:
        "Boost your online visibility with the assistance of our specialized web development services. Our team excels in crafting user-centric web experiences that prioritize the needs of your audience. From seamless navigation to visually stunning designs, we ensure every detail contributes to business success, creating a powerful online presence that leaves a lasting impression.        ",
    },
    {
      id: 2,
      title: "App Development      ",
      details:
        "By leveraging our proficiency in Mobile App Development, your organization can maximize its potential.Boasting a proven track record, we excel in creating highly popular and widely used apps. Our approach combines data insights with principles of behavioral science, ensuring your mobile app not only meets but exceeds user expectations, fostering engagement and success.        ",
    },
    {
      id: 3,
      title: "Performance Marketing      ",
      details:
        "Enhance your digital presence with reliability by utilizing our performance marketing services. Specializing in data-driven strategies, we offer a comprehensive range of solutions including SEO, PPC, social media, and email marketing. By aligning our efforts with your business objectives, we ensure every marketing initiative contributes to measurable success, driving growth and visibility.        ",
    },
    {
      id: 4,
      title: "Software Development      ",
      details:
        "Our Custom Software Development team specializes in tailor made solutions for your specific business needs.We understand that every business is distinct, requiring software solutions that align perfectly with specific objectives. Our expertise lies in developing customized software that enhances efficiency, scalability, and overall business performance, ensuring a seamless fit for your operations.        ",
    },
    {
      id: 5,
      title: "Data Engineering      ",
      details:
        "Recognizing the transformative power of data-driven insights, our Data Engineering services employ advanced analytics methodologies to achieve significant outcomes.Whether it's uncovering hidden trends, optimizing processes, or making informed decisions, our team harnesses the potential of data to propel your business forward. Experience the difference that data-driven intelligence can make for your organization.        ",
    },
    {
      id: 6,
      title: "Metaverse",
      details:
        "With the aid of our all-encompassing services, you can immerse yourself in the world of the Metaverse. Explore abundant possibilities and redefine the way you engage with your audience. From virtual experiences to innovative interactions, our Metaverse solutions open new avenues for creativity, collaboration, and connection. Don't just witness the future – be a part of it in this captivating digital realm you must experience.        ",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      for (const m of servv) {
        try {
          if (!videoUrls[m.id]) {
            setVideoLoading((prevLoading) => ({
              ...prevLoading,
              [m.id]: true,
            }));
            const response = await fetch(m.img);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setVideoUrls((prevUrls) => ({ ...prevUrls, [m.id]: url }));
          }
        } catch (error) {
          console.error("Error fetching video:", error);
        } finally {
          setVideoLoading((prevLoading) => ({ ...prevLoading, [m.id]: false }));
        }
      }
    };

    fetchVideos();
  }, []);

  const handleVideoError = (id) => {
    console.error(`Error loading video ${id}`);
    setVideoLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
  };
  console.log(videoUrls);
  return (
    <div
      id="withinseven"
      className="max-w-[1840px] textSliderContainerd mx-auto overflow-hidden"
      data-scroll-section
    >
      <div className="hidden md:block">
        {servv.map((m, index) => (
          <div
            key={m.id}
            id={m.id}
            className={`md:flex group md:px-8 w-full h-[320px] lg:text-lg lg:py-8 xl:py-16 hover:bg-black ${
              hoveredId === m.id ? "bg-image" : ""
            } ${index !== sevenIndustries.length - 1 ? "border-b" : ""}`}
            onMouseEnter={() => handleMouseEnter(m.id)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredId === m.id ? (
              <video
                autoPlay
                loop
                muted
                preload="auto"
                className={`w-full h-full object-cover duration-100 opacity-50 ${
                  index === 0 && "object-center"
                }`}
                onError={() => handleVideoError(m.id)}
                onLoadedData={() =>
                  setVideoLoading((prevLoading) => ({
                    ...prevLoading,
                    [m.id]: false,
                  }))
                }
              >
                <source src={m.img} type="video/mp4" />
              </video>
            ) : null}
            <div>
              <h1 className="mt-3 mb-8 h-10 textSliderContainerd  group-hover:text-white  md:w-[200px] lg:w-[320px] xl:w-[500px] font-semibold lg:text-xl xl:text-[30px]">
                {m.title}
              </h1>
            </div>
            <div>
              <h1 className=" textSliderContainerd group-hover:text-white text-xl">
                {m.desc}
              </h1>
              <Link href="inside-services" state={{ title: m.title }}>
                <div className="flex xl:gap-1   gap-4 w-full mt-5 md:w-[200px] items-center  xl:w-[560px]">
                  <div className="flex  group/item hover:cursor-pointer">
                    <h1 className="p-4 xl:w-[160px] text-base  rounded-full w-[120px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover/item:-translate-x-[-56px]">
                      What we do
                    </h1>
                    <h1 className="p-3 rounded-full textSliderContainerd  text-white flex text-center items-center w-[40px] xl:h-10 xl:w-[50px] bg-[#282728]">
                      <img
                        className="lg:w-56 "
                        src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/asset_60_lqw1hz.svg"
                        alt="Arrow Right"
                      />
                    </h1>
                  </div>
                </div>
              </Link>
            </div>{" "}
          </div>
        ))}
      </div>

      <div className="  md:hidden textSliderContainerd h-full mb-5">
        <h1 className="font-mono text-3xl uppercase font-bold text-center  lg:mt-10 mt-12 ">
          Services
        </h1>
        {servv
          .filter((i) => i.id == currentSlide + 1)
          .map((m, index) => (
            <div className="carousel-container">
              <div className="carousel-slide flex  flex-col justify-center ">
                <div className=" w-screen   px-10   text-center ">
                  <div className="border-r border-l  rounded-lg shadow ">
                    <h1 className="mt-10 mb-10 text-center px-2 font-bold">
                      {m.title}
                    </h1>
                    <h2 className="mt-3 h-[280px]  text-[15px] px-5 text-left serviceCard">
                      {m.desc}
                    </h2>
                    <Link href="inside-services" state={{ title: m.title }}>
                      <div className="flex  mb-5 py-5 shadow-xl pl-4 xl:gap-1 gap-4 w-full  md:w-[200px] justify-center  items-center xl:w-[560px]">
                        <h1 className="p-4 text-sm xl:w-[160px]  border rounded-full w-[140px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover:-translate-x-[-56px]">
                          Find out more
                        </h1>
                        <h1 className="p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#282728]">
                          <img
                            className="lg:w-56"
                            src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/asset_60_lqw1hz.svg"
                          />
                        </h1>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-buttons mb-5 mt-2 flex justify-center gap-5">
                <button
                  className="w-14 h-14 p-4 rounded-full flex items-center justify-center text-white bg-[#282728]"
                  onClick={prevSlide}
                >
                  <img
                    className="invert"
                    src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/services/left_arrow-removebg-preview.png"
                  />
                </button>
                <div className="text-gray-500 text-xl w-14 h-14 rounded-full  flex items-center justify-center">
                  {carouselData[currentSlide].id}/{carouselData.length}
                </div>
                <button
                  className="w-14 h-14 p-4 rounded-full flex items-center justify-center text-white bg-[#282728]"
                  onClick={nextSlide}
                >
                  <img
                    className="invert"
                    src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/services/right_arrow-removebg-preview.png"
                  />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Within7Industriesdhn;
