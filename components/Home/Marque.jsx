import React from "react";
import { OurTopClients } from "../../assets/Data/data";

const Marque = () => {
  return (
    <>
      {/* <div className="overflow-hidden mt-20 mb-20">
        <div className=" center-container">
          <section id="features" className="rlr-section">
            <div className="container">
              <div className="rlr-logos-slider">
                <div className="rlr-logos-slider__items rlr-logos-slider__itemss">
                  <div className="slide-track">
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/wayanad_adobe_express_lcbaed.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/homeborn_adobe_express_frbg9x.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/pappaboo_adobe_express_pgppg6.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/farmfed_fisheries_adobe_express_rydpdl.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/educus_global_adobe_express_fnwpdc.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/farmfed_tourism_adobe_express_siwiei.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/alhub_adobe_express_rpvubr.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/Artboard_1_adobe_express_fbvzl0.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/famfed_nature_adobe_express_um7n58.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272253/aquaquarduae_adobe_express_smgvbq.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272253/acon_printing_press_adobe_express_oyqrxs.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/educus_global_adobe_express_fnwpdc.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/farmfed_tourism_adobe_express_siwiei.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                    <div className="slide">
                      <img
                        data-sizes="auto"
                        className="lazyload"
                        src="https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/alhub_adobe_express_rpvubr.svg"
                        width={187}
                        height={64}
                        alt="partner logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

       */}

      <div className="flex overflow-hidden  mt-14 mb-14" data-scroll-section>
        <div className="animate-loop-scroll pr-32 flex gap-32 z-0 ">
          {OurTopClients?.map((i) => (
            <img
              className="w-[200px] grayscale object-center h-[100px]"
              src={i.img}
              alt=""
            />
          ))}
        </div>
        <div
          className="animate-loop-scroll flex pl-9 gap-32 z-10 bg-white"
          aria-hidden="true"
        >
          {OurTopClients?.map((i) => (
            <img
              className="w-[200px] grayscale object-center h-[100px]"
              src={i.img}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marque;
