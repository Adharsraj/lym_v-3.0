"use client"
import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";

const Cultureandmore = () => {
  const handleClicktofourculture = () => {
    const component2Element = document.getElementById("fourculture");
    if (component2Element) {
      window.scrollTo({
        top: component2Element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    gsap.fromTo(
      "#arrowbottom",
      {
        x: 0,
        y: 70,
        rotate: 0,
      },
      {
        x: 0,
        y: 80,
        rotate: 0,
        delay: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px] p-4 overflow-hidden  mx-auto  font-dm  md:text-xl ">
        <div className="lg:mt-20">
          <div className="md:hidden">
            <div className="flex justify-between align-middle items-center some-ele">
              <h3>Culture @ LYM</h3>
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
                className="invisible"
                alt="image1"
              />
            </div>

            <div className="text-[25px] leading-10  some-ele">
              <h3>
                We believe that a human-centric approach to digital design is
                essential for creating successful online experiences. By
                focusing on the needs and desires of real people, we can create
                websites that are intuitive, engaging, and easy to use. This not
                only leads to happier users, but also drives business results
                for our clients.
              </h3>
              {/* <h3 className="mt-6 text-[#7b7b7b]">
              The objective of LYM Data Labs is to bring about a change in our environment and individuals by means of design, understanding, and an unwavering pursuit of excellence. 
              </h3> */}
            </div>
          </div>

          <div className="hidden md:block mt-20 relative">
            <div className="flex justify-between xl:px-5  align-middle some-ele">
              <h3 className="text-sm whitespace-nowrap">Culture @ LYM</h3>
              <h3 className="text-[38px]  w-[600px] lg:w-[640px] lg:text-[30px] leading-10 text-[#7b7b7b] font-thin">
                We believe that a human-centric approach to digital design is
                essential for creating successful online experiences. By
                focusing on the needs and desires of real people, we can create
                websites that are intuitive, engaging, and easy to use. This not
                only leads to happier users, but also drives business results
                for our clients.
                {/* <h3 className="mt-6 text-[#7b7b7b] lg:text-[30px] font-thin">
                The objective of LYM Data Labs is to bring about a change in our environment and individuals by means of design, understanding, and an unwavering pursuit of excellence. 
                </h3> */}
              </h3>
              <img
                src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187567/assets/assets%20%283%29/asset_33_b9ifoq.svg"
                className="mt-10 ml-[-30px] md:ml-10 md:mt-10 md:w-[350px] md:h-[350px]"
                alt="img1"
                srcset=""
              />
            </div>
          </div>
        </div>

        <div className="md:grid md:mt-10 mt-10 md:grid-cols-2 ">
          <img
            src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187563/assets/assets%20%283%29/asset_54_ewy4pq.svg"
            className="md:mt-0 md:ml-10 lg:h-[350px] md:w-[300px] lg:w-[450px] ml-20 lg:ml-12"
            alt=""
            srcset=""
          />
          <div className="">
            <div className=" md:ml-10 xxl:gap-6 lg:mt-4 lg:flex lg:gap-3 lg:items-center">
              <img
                className="mt-0 mb-0 "
                src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187567/assets/assets%20%283%29/asset_26_z6qbxt.svg"
                alt="gjj"
              />
              <h3 className="some-ele text-[#7b7b7b]">
                The approach we take in our work involves utilizing a strong
                methodology, being receptive to new ideas, and fostering a team
                environment that encourages everyone to perform at their highest
                level.
              </h3>
            </div>
            <div className="md:ml-10 lg:mt-0 xxl:gap-6 lg:flex lg:items-center lg:gap-3">
              <img
                src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187567/assets/assets%20%283%29/asset_26_z6qbxt.svg"
                className="mb-10 mt-10"
                alt="image"
                srcset=""
              />
              <h3 className="some-ele text-[#7b7b7b]">
                The collective brain of LYMDATA LABS is comprised of a varied
                group of individuals who possess extensive experience,
                unwavering dedication, and a strong commitment to our daily
                tasks.
              </h3>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2   ">
          <div>
            <div className="lg:flex lg:gap-3 xxl:gap-6 lg:ml-10 lg:items-center lg:mt-20">
              <img
                src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187563/assets/assets%20%283%29/asset_41_hferql.svg"
                className="mb-10 mt-10"
                alt="image1"
              />

              <h3 className="lg:w-[350px] xxl:w-[500px] some-ele text-[#7b7b7b]">
                Our team of exceptional individuals has been meticulously
                curated, with each member possessing unique superpowers that
                perfectly embody our mission. This has required a significant
                amount of dedication and hard work on our part.
              </h3>
            </div>
            {/* <div
              
              className=" hidden lg:inline-block absolute ml-0  top-[2100px] left-0 px-0 "
            >
              <img
            onClick={handleClicktofourculture}
            className="lg:ml-0 w-[65px] cursor-pointer animate-bounce"
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg"
            alt=""
          />
              
            </div> */}
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187570/assets/assets%20%283%29/asset_2_shbldr.png"
              alt="img3"
              className="ml-14 lg:ml-52 opa md:ml-0 md:mt-0 md:mb-44 sm:block hidden mb-36 mt-10 md:w-[350px] md:h-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultureandmore;
