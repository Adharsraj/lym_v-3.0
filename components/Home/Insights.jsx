import React from "react";
import Link from 'next/link';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { blogCards } from "../../assets/Data/data"; // Adjust the import path as needed

const Insights = () => {
  const [insightsHeading] = useTypewriter({
    words: ["Insights", "Stay updated !"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 4000,
  });

  return (
    <div className="max-w-[1640px] mx-auto bg-black" data-scroll-section>
      <h4 className="lg:text-[40px] lg:p-12 lg:px-28 text-[35px] lg:font-bold p-3 some-ele text-white">
        {insightsHeading}
        <Cursor cursorColor="white" cursorStyle="|"></Cursor>
      </h4>
      <div className="flex flex-col lg:flex-row lg:justify-around gap-4 p-2 lg:px-10">
        {blogCards.slice(0, 3).map((card) => (
          <Link href={`/blog/${card.name}`} key={card.id}>
            <div className="flex lg:flex-col gap-2 shadow-2xl cursor-pointer">
              <div className="relative xxl:w-[348px] lg:w-[240px] md:w-[348px] md:h-[229px] h-20 rounded-[6px] overflow-hidden group">
                <img
                  src={card.img}
                  alt={card.title}
                  className="md:h-[200px] md:w-[348px] w-[130px] h-[65px] rounded-[6px] cover"
                />
                <div className="hidden lg:flex flex-col justify-center items-center absolute inset-0 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black z-[10] bg-opacity-70">
                  <p className="lg:text-[14px]">Read More</p>
                </div>
                <div className="hidden lg:flex justify-between items-center md:px-2 md:pt-1 some-ele">
                  <h5 className="lg:text-[14px] lg:font-bold text-[#ffffff98] xl:text-[10px]">
                    Blog . <span className="font-light">{card.desc}</span>
                  </h5>
                  <h5 className="lg:text-[14px] text-[#ffffff98]">
                    {card.date}
                  </h5>
                </div>
              </div>
              <div className="text-left md:pt-2 pt-3 some-ele pl-2">
                <h4 className="lg:hidden font-bold lg:text-[16px] text-[12px] text-white">
                  Blog . {card.desc}
                </h4>
                <h4 className="font-bold lg:text-[16px] text-[10px] text-white lg:w-[330px]">
                  {card.title}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link href="/blog">
        <div className="flex justify-center">
          <div className="flex gap-2 w-[300px] lg:ml-56 xl:mx-auto xl:w-[300px] mx-44 lg:mb-7 pb-10 px-5 items-center justify-center">
            <h4 className="p-3 text-sm flex items-center justify-center mt-10 rounded-full w-[500px] bg-white text-black font-bold transition-all transform hover:translate-x-14">
              Explore all insights
            </h4>
            <h4 className="p-3 mt-10 flex items-center rounded-full w-[70px] bg-white text-black">
              <img
                src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/asset_49_lb3zxr.svg"
                alt="arrow"
              />
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Insights;
