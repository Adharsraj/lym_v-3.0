"use client"
import React, { useRef, useState } from "react";
import { OurTopClients } from "@/assets/Data/data";

const TopClients = () => {
  const [showAllClients, setShowAllClients] = useState(false);
  const clientsData = showAllClients
    ? OurTopClients
    : OurTopClients.slice(0, 8);
  const topClientsRef = useRef(null);
  const scrollToTopClients = () => {
    if (topClientsRef.current) {
      topClientsRef.current.scrollIntoView();
    }
  };
  return (
    <div>
      <h1
        ref={topClientsRef}
        className="p-4 text-3xl max-w-[1150px] font-bold md:text-center mx-auto md:pt-10 md:pb-10 md:text-5xl "
      >
        Top Clients
      </h1>
      <div className="overflow-hidden mb-20">
        <div className=" center-container">
          <section id="features" className="rlr-section">
            <div className="container">
              <div className="rlr-logos-slider">
                <div className="rlr-logos-slider__items rlr-logos-slider__itemss">
                  <div className="slide-track flex gap-[150px] justify-center items-center">
                    {OurTopClients?.map((client) => (
                      <div className="slide flex flex-col items-center">
                        <img
                          data-sizes="auto"
                          className="lazyload max-w-full h-auto image-style"
                          src={client?.img}
                          alt="partner logo"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TopClients;
