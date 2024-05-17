import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { productDrivenDesign } from "../../assets/Data/data";

const ProcessDrivenFive = () => {
  return (
    <>
      <div className="bg-[#BCBCBC] hidden md:block">
        <div className="max-w-[1840px]  bg-[#BCBCBC] mb-10   mx-auto p-4 md:p-0  md:text-xl overflow-hidden  ">
          <div className="md:flex">
            {productDrivenDesign.map((m) => (
              <div
                key={m.id}
                className="w-full md:flex-grow  md:mb-0 z-10 group cursor-pointer relative"
              >
                <div className="text-gray-800 md:border-r md:p-2 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">
                  <div className="border md:border-transparent p-2 md:p-0 h-[430px]  md:h-96 flex flex-col justify-around">
                    <h5 className="md:text-lg text-2xl  mx-auto text-white group-hover:text-black font-semibold   lg:w-[78%] ">
                      {m.head1}
                    </h5>
                    <div className="w-4/5  mx-auto">
                      <h5 className="p-3 md:invisible     mt-5 mb-5 group-hover:visible rounded-full text-white flex text-center items-center w-[40px] xl:h-8 xl:w-[50px] bg-[#282728]">
                        <img
                          className="lg:w-5 "
                          src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"
                          alt="arrow"
                        />
                      </h5>
                    </div>
                    <h5 className=" w-4/5   mx-auto md:text-transparent group-hover:text-black">
                      {m.head2}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#BCBCBC]  md:hidden">
        <div className="max-w-[1840px]  bg-[#BCBCBC]    mx-auto p-4 md:p-0  md:text-xl overflow-hidden  ">
          <div className="md:flex">
            {productDrivenDesign.map((m) => (
              <div
                key={m.id}
                className="w-full md:flex-grow  md:mb-0 z-10 group cursor-pointer relative"
              >
                <div className="text-gray-800 md:border-r md:p-2 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">
                  <div className="border md:border-transparent p-2 md:p-0 h-[430px]  md:h-96 flex flex-col justify-around">
                    <h5 className="md:text-lg text-2xl  text-white group-hover:text-black font-semibold   lg:w-4/5 ">
                      {m.head1}
                    </h5>
                    <div className="  mx-auto">
                      <h5 className="p-2 md:invisible     mt-5 mb-5 group-hover:visible rounded-full text-white flex text-center items-center w-[33px] xl:h-8 xl:w-[50px] bg-[#E3E3E3]">
                        <h6 className="text-black">
                          <BsArrowRight />
                        </h6>
                      </h5>
                      <h5 className="mx-auto md:text-transparent group-hover:text-black">
                        {m.head2}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessDrivenFive;
