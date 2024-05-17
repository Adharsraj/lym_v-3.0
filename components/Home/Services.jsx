import React from 'react'
import { servv } from '../../assets/Data/data'

const Services = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto bg-white min-h-screen">
        <h4 className="lg:text-[70px] text-[35px] font-bold lg:px-28 text-black px-5 some-element">
          Services
        </h4>
        <div className="grid  p-5  gap-7 md:grid-cols-2 lg:grid-cols-3 lg:px-28">
          {servv.map((m, index) => (
            <div className="w-full lg:w-[348px]  h-[229px] bg-white rounded-3xl mx-auto shadow-2xl">
              <img
                src={m.img}
                className="h-[56px] w-full rounded-t-3xl"
                alt="services"
              />
              <div className="flex flex-col justify-between h-[160px] lg:px-5 px-3 pt-2 lg:pt-3 some-element">
                <h4 className="font-bold">{m.title}</h4>
                <h5 className="lg:text-[14px] text-[12px]">{m.desc}</h5>
                <div className="flex gap-2">
                  <h5> Learn More</h5>
                  <img
                    src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704699179/LYMDATALABS/Pages/webp/right_arrow_xshbjo.webp"
                    alt="arrow"
                    className="w-[16px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;