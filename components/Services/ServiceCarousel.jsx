"use client"
import React, { useEffect, useState } from "react";

const images = [
  {
    image1: "https://plus.unsplash.com/premium_photo-1700567963303-1b83673c52a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    image2: "https://images.unsplash.com/photo-1682685797741-f0213d24418c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    text1: "ruttl",
    desc1:"We have developed ruttl, which is a live website review tool.    ",
    text2:"Aerotime    ",
    desc2:"Our modern yet minimalistic designs were well-received by its users    ",

  },
  {
    image1: "https://images.unsplash.com/photo-1682687221175-fd40bbafe6ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    image2: "https://images.unsplash.com/photo-1682685794761-c8e7b2347702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    text1: "American Technology",
    desc1:"Incorporated UI and UX principles to attract more visitors while reflecting the company’s core values.    ",
    text2:"Stories Plus    ",
    desc2:"Designed their website and created user experience    ",  },
  {
    image1: "https://images.unsplash.com/photo-1682687982298-c7514a167088?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "https://images.unsplash.com/photo-1682686581663-179efad3cd2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    text1: "Vedantu    ",
    desc1:"Powering the next generation education with Vedantu    ",
    text2:"American Technology ",
    desc2:"Incorporated UI and UX principles to attract more visitors while reflecting the company’s core values.    ",  },
];

function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000); 
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    console.log(newIndex)
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-white md:min-h-screen pb-20">

    <div className="carousel hidden md:block   max-w-[1150px] mx-auto lg:pb-10   md:min-h-screen">
<h1 className="text-5xl font-bold pt-10 pb-10 lg:pt-20 lg:pb-20">Case Studies
</h1>
      <div className="carousel-inner flex relative min-h-[500px] ">
      <button onClick={handlePrevious} className="carousel-button absolute top-[50%] left-[-2%] previous bg-yellow-200 rounded-full flex justify-center items-center h-10 w-10 my-auto">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
      </button>
      
        <div className="carousel-image-container gap-10  grid grid-cols-2 md:h-[50vh] w-full ">
            <div className=" flex flex-col">
          <img
            src={images[currentIndex].image1}
            alt="img"
            className="carousel-image max-w-[570px] h-[400px] mb-10  "
          />
          <h1 className="text-3xl font-bold mb-6 " >{images[currentIndex].text1}</h1>
          <p className="">{images[currentIndex].desc1}</p>
            </div>
            <div className="flex flex-col">
          <img
            src={images[currentIndex].image2}
            alt="img"
            className="carousel-image max-w-[570px] h-[400px] mb-10   "
          />
                    <h1 className="text-3xl font-bold mb-6">{images[currentIndex].text2}</h1>
                    <p>{images[currentIndex].desc2}</p>


            </div>
        </div>
        <button onClick={handleNext} className="carousel-button top-[50%] right-[-2%] next absolute bg-yellow-200 rounded-full h-10 w-10 my-auto flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>

      </button>
      </div>
     
      
    </div>
    <div className="carousel  md:hidden   max-w-[1150px] mx-auto lg:pb-10   md:min-h-screen">
<h1 className="text-3xl p-2 font-bold pt-10 pb-10 lg:pt-36 lg:pb-20 ">Case Studies
</h1>
      <div className="carousel-inner flex relative min-h-[500px] ">
      <button onClick={handlePrevious} className="carousel-button absolute top-[50%] left-[-2%] previous bg-yellow-200 rounded-full flex justify-center items-center h-10 w-10 my-auto">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
      </button>
      
        <div className="carousel-image-container gap-10  grid  md:h-[50vh] w-full ">
            <div className=" flex flex-col px-2">
          <img
            src={images[currentIndex].image1}
            alt="img"
            className="carousel-image max-w-[300px] mx-auto h-[400px] mb-10  "
          />
          <h1 className="text-3xl font-bold mb-6 " >{images[currentIndex].text1}</h1>
          <p className="">{images[currentIndex].desc1}</p>
            </div>
            {/* <div className="flex flex-col">
          <img
            src={images[currentIndex].image2}
            alt="img"
            className="carousel-image max-w-[570px] h-[400px] mb-10   "
          />
                    <h1 className="text-3xl font-bold mb-6">{images[currentIndex].text2}</h1>
                    <p>{images[currentIndex].desc2}</p>


            </div> */}
        </div>
        <button onClick={handleNext} className="carousel-button top-[50%] right-[-2%] next absolute bg-yellow-200 rounded-full h-10 w-10 my-auto flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>

      </button>
      </div>
     
      
    </div>
    </div>

  );
}

export default ServiceCarousel;
