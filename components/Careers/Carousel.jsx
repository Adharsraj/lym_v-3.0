"use client"
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

// import img1 from "../../assets/Images/career1.jpeg";
// import img2 from "../../assets/Images/career2.jpeg";
// import img3 from "../../assets/Images/career3.jpeg";
// import img4 from "../../assets/Images/career4.jpeg";
// import img5 from "../../assets/Images/career5.jpeg";

const Carousel = () => {
  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <>
      <div className="md:hidden">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border flex flex-col justify-around  rounded-full min-h-[17rem] overflow-hidden some-ele">
              <div className="flex pt-0 justify-center ">
                <h3 className="text-center mt-[0px]  text-5xl font-bold">01</h3>
                <h3 className="text-center">/05</h3>
              </div>
              <div>
                <h3 className="text-left pl-10 font-semibold text-2xl">
                  First Glance
                  <br />
                  Gateway
                </h3>
              </div>
              <div>
                <h3 className="text-left pl-10">
                  Discuss their background, motivations, and alignment with your
                  company's mission.
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex flex-col justify-around    rounded-full min-h-[17rem] overflow-hidden some-ele">
              <div className="flex pt-0 justify-center ">
                <h3 className="text-center mt-[0px]  text-5xl font-bold">02</h3>
                <h3 className="text-center">/05</h3>
              </div>
              <div>
                <h3 className="text-left pl-10 font-semibold text-2xl">
                  Technical <br />
                  Assessment
                </h3>
              </div>
              <div>
                <h3 className="text-left pl-10">
                  problem-solving exercises, or technical interviews to evaluate
                  the candidate's proficiency in relevant technologies.{" "}
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex flex-col justify-around    rounded-full min-h-[17rem] overflow-hidden some-ele">
              <div className="flex pt-0 justify-center ">
                <h3 className="text-center mt-[0px]  text-5xl font-bold">03</h3>
                <h3 className="text-center">/05</h3>
              </div>
              <div>
                <h3 className="text-left pl-10 font-semibold text-2xl">
                  Leadership Roundtable
                </h3>
              </div>
              <div>
                <h3 className="text-left pl-10">
                  assess how well they would collaborate within your startup's
                  dynamic environment.{" "}
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex flex-col justify-around    rounded-full min-h-[17rem] overflow-hidden some-ele">
              <div className="flex pt-0 justify-center ">
                <h3 className="text-center mt-[0px]  text-5xl font-bold">04</h3>
                <h3 className="text-center">/05</h3>
              </div>
              <div>
                <h3 className="text-left pl-10 font-semibold text-2xl">
                  Onboarding
                </h3>
              </div>
              <div>
                <h3 className="text-left pl-10">
                  startup's culture and provide them with the necessary
                  resources and information.{" "}
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex flex-col justify-around    rounded-full min-h-[17rem] overflow-hidden some-ele mb-10">
              <div className="flex pt-0 justify-center ">
                <h3 className="text-center mt-[0px]  text-5xl font-bold">05</h3>
                <h3 className="text-center">/05</h3>
              </div>
              <div>
                <h3 className="text-left pl-10 font-semibold text-2xl">
                  Evaluate and Iterate
                </h3>
              </div>
              <div>
                <h3 className="text-left pl-10">
                  providing ongoing support and guidance. Encourage open
                  communication to address any concerns or challenges early on{" "}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:flex mt-20 w-full">
        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          spaceBetween={0}
          centeredSlides={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" md:grid md:grid-cols-2 bg-gray-100 border border-black min-h-[15rem] md:min-h-[20rem] lg:min-h-[27rem]  md:w-[] rounded-full">
              <div className=" flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187575/assets/assets%20%283%29/asset_34_xw8ije.svg"
                  alt="img2"
                />
              </div>
              <div className=" flex flex-col justify-around some-ele">
                <div className="flex">
                  <h3 className="font-bold text-9xl">01</h3>
                  <h3 className="font-light text-[20px] mt-3">/05</h3>
                </div>
                <h3 className="font-semibold text-2xl">
                  First Glance <br />
                  Gateway
                </h3>
                <h3>
                  Discuss their background, motivations,
                  <br /> and alignment with your company's <br />
                  mission.{" "}
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:grid md:grid-cols-2 bg-gray-100 border border-black min-h-[15rem] md:min-h-[20rem] lg:min-h-[27rem]  md:w-[] rounded-full">
              <div className=" flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187563/assets/assets%20%283%29/asset_40_bin1o9.svg"
                  alt="img1"
                />
              </div>
              <div className=" flex flex-col justify-around some-ele">
                <div className="flex">
                  <h3 className="font-bold text-9xl">02</h3>
                  <h3 className="font-light text-[20px] mt-3">/05</h3>
                </div>
                <h3 className="font-semibold text-2xl">
                  Technical <br />
                  Assessment
                </h3>
                <h3>
                  problem-solving exercises, or technical <br />
                  interviews to evaluate the candidate's <br />
                  proficiency in relevant technologies.{" "}
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:grid md:grid-cols-2 bg-gray-100 border border-black min-h-[15rem] md:min-h-[20rem] lg:min-h-[27rem]  md:w-[] rounded-full">
              <div className="flex justify-center items-center">
                <img
                  src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/Mediamodifier-Design+(10).svg"
                  alt="img5"
                />
              </div>
              <div className="flex flex-col justify-around some-ele">
                <div className="flex">
                  <h3 className="font-bold text-9xl">03</h3>
                  <h3 className="font-light text-[20px] mt-3">/05</h3>
                </div>
                <h3 className="font-semibold text-2xl">
                  Leadership Roundtable
                </h3>
                <h3>
                  assess how well they would collaborate <br />
                  within your startup's dynamic <br />
                  environment.{" "}
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:grid md:grid-cols-2 bg-gray-100 border border-black min-h-[15rem] md:min-h-[20rem] lg:min-h-[27rem]  md:w-[] rounded-full">
              <div className="flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187580/assets/assets%20%283%29/asset_35_rrxuyo.svg"
                  alt="img4"
                />
              </div>
              <div className="flex flex-col justify-around some-ele">
                <div className="flex">
                  <h3 className="font-bold text-9xl">04</h3>
                  <h3 className="font-light text-[20px] mt-3">/05</h3>
                </div>
                <h3 className="font-semibold text-2xl">Onboarding</h3>
                <h3>
                  startup's culture and provide them with <br />
                  the necessary resources and <br />
                  information.{" "}
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:grid md:grid-cols-2 bg-gray-100 border border-black min-h-[15rem] md:min-h-[20rem] lg:min-h-[27rem]  md:w-[] rounded-full">
              <div className="flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187553/assets/assets%20%283%29/asset_38_yz6gqj.svg"
                  alt="img3"
                />
              </div>
              <div className="flex flex-col justify-around some-ele">
                <div className="flex">
                  <h3 className="font-bold text-9xl">05</h3>
                  <h3 className="font-light text-[20px] mt-3">/05</h3>
                </div>
                <h3 className="font-semibold text-2xl">Evaluate and Iterate</h3>
                <h3>
                  providing ongoing support and guidance. Encourage open
                  communication to <br />
                  address any concerns or challenges
                  <br /> early on{" "}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="hidden md:flex gap-20 p-2 justify-center lg:ml-[-470px] lg:gap-3 lg:mb-10 lg:mt-10 mb-7">
        <button
          onClick={goPrev}
          className="bg-black flex justify-center items-center w-14 h-14 rounded-full"
        >
          <ArrowLeftOutlined className="text-white" />
        </button>
        <button
          onClick={goNext}
          className="bg-black flex justify-center items-center w-14 h-14 rounded-full"
        >
          <ArrowRightOutlined className="text-white" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
