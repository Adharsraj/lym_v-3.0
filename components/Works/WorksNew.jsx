import React from "react";
import Link from 'next/link';

export const WorksNew = () => {
    const handleClicktoalhub = () => {
        const alhub = document.getElementById("alhub");
        if (alhub) {
          window.scrollTo({
            top: approach.offsetTop,
            behavior: "smooth",
          });
        }
      };

  return (
    <div className="max-w-[1640px] mx-auto p-4 font-dm  mb-20   gap-8 overflow-hidden">
      <div className="hidden lg:block">
        <h1 className="mt-20 text-7xl font-bold">ALL WORKS</h1>
        {/* 1 */}
        <div className="lg:grid lg:grid-cols-2 items-start mt-8">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644001/LYMDATALABS/Pages/Works/work1_j1n22u.jpg"
            className="mt-8 lg:mt-0 bg-black "
          />
          <div className=" w-full h-full">
            <h3 className="text-5xl font-bold px-5">Al-Hub</h3>
            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-50px] ">
              <div>
       
       
                <h3 className="px-5 text-xl">2023</h3>
              </div>
              <Link href="/works/Al-Hub">
              <div className="flex justify-end  group hover:cursor-pointer">
                  <h2 className="p-1 justify-end rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h2>
                  <h2 className="p-2 justify-end rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" className="" alt="arrow"/>
                  </h2>
            </div>
              </Link>
            </div>
          </div>
        </div>
        {/* 2 */}

        <div className="lg:grid lg:grid-cols-2 items-start mt-10">
          <div className=" w-full h-full">
            <h3 className="text-5xl font-bold px-5">GARDEN RESTAURANT TOKUGAWAEN</h3>
            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-100px] ">
              <div>
                <h3 className="px-5 text-xl">2023</h3>
              </div>
              <div className="flex justify-end  group hover:cursor-pointer">
                  <h1 className="p-1 justify-end rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 justify-end rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="arrow"/>
                  </h1>
            </div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644008/LYMDATALABS/Pages/Works/work2_vboqnx.jpg"
            className="mt-8 lg:mt-0 hidden lg:block bg-black  "
          />
        </div>
        {/* 3 */}

        <div className="lg:grid lg:grid-cols-2 items-start mt-10">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644013/LYMDATALABS/Pages/Works/work3_r282ao.jpg"
            className="mt-8 lg:mt-0 bg-black  "
          />
          <div className=" w-full h-full">
            <h3 className="text-5xl font-bold px-6">SERGIO</h3>
            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-50px] ">
              <div>
                <h3 className="px-5 text-xl">2022</h3>
              </div>
              <div className="flex justify-end  group hover:cursor-pointer">
                  <h1 className="p-1 justify-end rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 justify-end rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="arrow"/>
                  </h1>
            </div>
            </div>
          </div>
        </div>
        {/* 4 */}

        <div className="lg:grid lg:grid-cols-2 items-start mt-10">
          <div className=" w-full h-full">
            <h3 className="px-5 text-5xl font-bold">Arimatsu SDGs Project</h3>
            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-50px] ">
              <div>
                <h3 className="px-5 text-xl">2022</h3>
              </div>
              <div className="flex justify-end  group hover:cursor-pointer">
                  <h1 className="p-1 justify-end rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 justify-end rounded-full w-[41px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="arrow"/>
                  </h1>
            </div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644018/LYMDATALABS/Pages/Works/work4_spzagb.jpg"
            className="mt-8 lg:mt-0 bg-black  "
          />
        </div>
        {/* 5 */}

        <div className="lg:grid lg:grid-cols-2 items-start mt-10">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644034/LYMDATALABS/Pages/Works/work5_o8ei7z.jpg"
            className="mt-8 lg:mt-0 bg-black  "
          />
          <div className=" w-full h-full">
            <h3 className="px-5 text-5xl font-bold">YOKKAICHI HARBOR ONOE BESSO</h3>
            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-95px] ">
              <div>
                <h3 className="px-5 text-xl">2022</h3>
              </div>
              <div className="flex justify-end  group hover:cursor-pointer">
                  <h1 className="p-1 justify-end rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 justify-end rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="arrow"/>
                  </h1>
            </div>
            </div>
          </div>
        </div>
        {/* 6 */}

        <div className="lg:grid lg:grid-cols-2 items-start mt-10">
          <div className=" w-full h-full">
            <h3 className="px-5 text-5xl font-bold">BISHO EN - SHIKEMICHI KIMONO STUDIO</h3>
            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-95px] ">
              <div>
                <h3 className="px-5 text-xl">2022</h3>
              </div>
              <div className="flex justify-end  group hover:cursor-pointer">
                  <h1 className="p-1 justify-end rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 justify-end rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="arrow"/>
                  </h1>
            </div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644052/LYMDATALABS/Pages/Works/work6_dhveap.jpg"
            className="mt-8 lg:mt-0  bg-black "
          />
        </div>
        {/* 7 */}

        <div className="lg:grid lg:grid-cols-2 items-start mt-10">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644059/LYMDATALABS/Pages/Works/work7_pa7lj1.jpg"
            className="mt-8 lg:mt-0 bg-black  "
          />
          <div className=" w-full h-full">
            <h3 className="px-5 text-5xl font-bold">FUSION DE TROISA</h3>
            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-50px] ">
              <div>
                <h3 className="px-5 text-xl">2022</h3>
              </div>
              <div className="flex justify-end  group hover:cursor-pointer">
                  <h1 className="p-1 justify-end rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 justify-end rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="arrow"/>
                  </h1>
            </div>
            </div>
          </div>
        </div>
        {/* 8 */}

        <div className="lg:grid lg:grid-cols-2 items-start mt-10">
          <div className=" w-full h-full">
            <h3 className="px-5 text-5xl font-bold">Anouk | dress shop</h3>
            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-50px] ">
              <div>
                <h3 className="px-5 text-xl">2022</h3>
              </div>
              <div className="flex justify-end  group hover:cursor-pointer">
                  <h1 className="p-1 justify-end rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 justify-end rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="arrow"/>
                  </h1>
            </div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644072/LYMDATALABS/Pages/Works/work8_eptznq.jpg"
            className="mt-8 lg:mt-0 bg-black "
          />
        </div>
        {/* 9 */}

        <div className="lg:grid lg:grid-cols-2 items-start mt-10">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644079/LYMDATALABS/Pages/Works/work9_a0npgk.jpg"
            className="mt-8 lg:mt-0 bg-black "
          />
          <div className=" w-full h-full">
            <h3 className="px-5 text-5xl font-bold">Yamai pottery Co., Ltd.</h3>
            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-50px] ">
              <div>
                <h3 className="px-5 text-xl">2022</h3>
              </div>
              <div className="flex justify-end  group hover:cursor-pointer">
                  <h1 className="p-1 justify-end rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 justify-end rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="arrow"/>
                  </h1>
            </div>
            </div>
          </div>
        </div>
        {/* 10 */}

        <div className="lg:grid lg:grid-cols-2 items-start mt-10">
          <div className=" w-full h-full">
            <h3 className="px-5 text-5xl font-bold">Gero Onsen Yunoshimakan</h3>
            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-50px] ">
              <div>
                <h3 className="px-5 text-xl">2022</h3>
              </div>
              <div className="flex justify-end  group hover:cursor-pointer">
                  <h1 className="p-1 justify-end rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 justify-end rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="arrow"/>
                  </h1>
            </div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644088/LYMDATALABS/Pages/Works/work10_su8uvr.jpg"
            className="mt-8 lg:mt-0 bg-black  "
          />
        </div>
      </div>
      
      <div className="lg:hidden">
      <h1 className="mt-20 text-4xl text-center font-bold">ALL WORKS</h1>
        <div className="lg:grid lg:grid-cols-2 items-start">
        <Link href="/works/Al-Hub">
        <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644001/LYMDATALABS/Pages/Works/work1_j1n22u.jpg"
            className="mt-8 lg:mt-1 bg-black "
          />
        </Link>
          <h3 className="text-2xl font-bold">Al-Hub</h3>
          <h3>2023</h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 items-start">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644008/LYMDATALABS/Pages/Works/work2_vboqnx.jpg"
            className="mt-8 lg:mt-0 bg-black  "
          />
          <h3 className="text-2xl font-bold">GARDEN RESTAURANT TOKUGAWAEN</h3>
          <h3>2023</h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 items-start">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644013/LYMDATALABS/Pages/Works/work3_r282ao.jpg"
            className="mt-8 lg:mt-0 bg-black "
          />
          <h3 className="text-2xl font-bold">SERGIO</h3>
          <h3>2022</h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 items-start">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644018/LYMDATALABS/Pages/Works/work4_spzagb.jpg"
            className="mt-8 lg:mt-0 bg-black "
          />
          <h3 className="text-2xl font-bold">Arimatsu SDGs Project</h3>
          <h3>2022</h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 items-start">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644034/LYMDATALABS/Pages/Works/work5_o8ei7z.jpg"
            className="mt-8 lg:mt-0 bg-black  "
          />
          <h3 className="text-2xl font-bold">YOKKAICHI HARBOR ONOE BESSO</h3>
          <h3>2022</h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 items-start">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644052/LYMDATALABS/Pages/Works/work6_dhveap.jpg"
            className="mt-8 lg:mt-0 bg-black  "
          />
          <h3 className="text-2xl font-bold">BISHO EN - SHIKEMICHI KIMONO STUDIO</h3>
          <h3>2022</h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 items-start">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644059/LYMDATALABS/Pages/Works/work7_pa7lj1.jpg"
            className="mt-8 lg:mt-0 bg-black  "
          />
          <h3 className="text-2xl font-bold">FUSION DE TROISA</h3>
          <h3>2022</h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 items-start">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644072/LYMDATALABS/Pages/Works/work8_eptznq.jpg"
            className="mt-8 lg:mt-0 bg-black "
          />
          <h3 className="text-2xl font-bold">Anouk | dress shop</h3>
          <h3>2022</h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 items-start">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644079/LYMDATALABS/Pages/Works/work9_a0npgk.jpg"
            className="mt-8 lg:mt-0 bg-black "
          />
          <h3 className="text-2xl font-bold">Yamai pottery Co., Ltd.</h3>
          <h3>2022</h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 items-start">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644088/LYMDATALABS/Pages/Works/work10_su8uvr.jpg"
            className="mt-8 lg:mt-0 bg-black "
          />
          <h3 className="text-2xl font-bold">Gero Onsen Yunoshimakan</h3>
          <h3>2022</h3>
        </div>
      </div>
    </div>
  );
};

export default WorksNew;
