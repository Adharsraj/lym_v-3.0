import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';
import { worksData } from "../../assets/Data/data";

const SelectedWorks = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className="max-w-[1640px] mx-auto p-4 font-dm grid justify-center  mb-20  gap-8 ">
      <h1 className="mt-10"></h1>
      {worksData.map((m) => (
        <div key={m.id} className="md:hidden ">
          <div key={m.id} className="flex flex-col items-center relative">
            <span className="text-4xl mx-auto font-times mb-8 mt-10">
              {m.title}
            </span>
            <img className="w-[202px] h-[280px]" src={m.img} alt="chimp" />
            <Link key={m.id} to={`/works/${m.title}`} onClick={handleLinkClick}>
              <div className="w-[132px] h-[63px]  mt-12 mb-6 bg-[#262626] text-white  transition-transform absolute top-[310px]">
                <span className="flex justify-end">
                  <BsArrowRight size={30} />
                </span>
                <h1 className="flex justify-center">View Project</h1>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="w-[290px] mt-14 mb-3 text-center  ">{m.mainhead}</h1>
            <h1 className="w-[290px] text-center border-b-2 border-b-slate-200">
              {m.head1}
            </h1>
            <h1 className="w-[290px] text-center border-b-2 border-b-slate-200">
              {m.head2}
            </h1>
            <h1 className="w-[290px] text-center">{m.head3}</h1>
          </div>
        </div>
      ))}

      {worksData.map((m) => (
        <div
          key={m.id}
          className="hidden md:grid md:grid-cols-3 font-times items-center "
        >
          <div className="mt-24 w-[200px] lg:w-[300px] md:text-xl">
            <h1 className=" text-center border-b-2 border-b-slate-200 font-times ">
              {m.head1}
            </h1>
            <h1 className=" text-center border-b-2 border-b-slate-200">
              {m.head2}
            </h1>
            <h1 className="  text-center  ">{m.head3}</h1>
          </div>

          <div className="flex flex-col items-center relative">
            <span className="text-4xl mx-auto font-times mb-8 mt-10 lg:mt-20 lg:text-5xl">
              {m.title}
            </span>
            <img
              className="lg:w-[400px] lg:h-[480px]"
              src={m.img}
              alt="chimp"
            />
            <Link key={m.id} to={`/works/${m.title}`} onClick={handleLinkClick}>
              <div className="w-[132px] group hover:bg-gray-400  lg:w-[182px] lg:h-[84px] lg:text-lg mt-12 mb-6 bg-[#262626] text-white  transition-transform absolute top-[330px] md:top-[370px] lg:top-[560px]">
                <div className="uibutton ">
                  <div className="coolBeans  " href="#">
                    <span className="flex justify-end">
                      <BsArrowRight size={30} />
                    </span>
                    <h1 className="flex justify-center text-lg ">
                      View Project
                    </h1>
                  </div>
                </div>
              </div>
              {/* <div className='uibutton '>

<div className="coolBeans  " href="#">
<span className="flex justify-end">
                <BsArrowRight size={30} />
              </span>
              <h1 className="flex justify-center text-lg ">View Project</h1></div>
</div> */}
            </Link>
          </div>

          <div>
            <h1 className="mt-20 text-center w-[200px] ml-8 lg:w-[250px] md:text-xl lg:ml-20">
              {m.mainhead}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedWorks;
