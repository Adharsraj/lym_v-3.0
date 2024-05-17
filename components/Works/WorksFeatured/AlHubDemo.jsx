import React from "react";

const AlHubDemo = () => {
  return (
    <>
      <div id="alhub" className="font-dm">
        <div className="">
          <div>
            <div className="flex justify-center   ">
              <video
                src="https://res.cloudinary.com/db5gkedee/video/upload/v1691392819/WhatsApp_Video_2023-08-07_at_12.21.33_PM_idu7sn.mp4"
                className="absolute md:right-10 md:top-72 top-72    md:w-1/2 md:h-1/2 h-[250px]  "
                autoPlay
                loop
                muted
              ></video>
              <h1 className="absolute md:start-14 md:mt-32 mt-24 md:text-6xl text-3xl font-bold">
                Obie
              </h1>
              <h5 className="absolute md:mt-52 mt-36 md:start-14 md:text-2xl text-center">
                Your personal, reproductive
                <br /> health coach
              </h5>
              <img
                src="https://res.cloudinary.com/db5gkedee/image/upload/v1691392824/WhatsApp_Image_2023-08-07_at_12.21.22_PM_xrwdwn.jpg"
                alt="Image14"
                className="mx-auto hidden md:block md:h-[80vh] h-[60vh] md:w-screen"
              />
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691472934/LYMDATALABS/Pages/Works/M1-hero-image_1_w0j0hp.jpg"
                alt="imgsmall"
                className="md:hidden"
              />
            </div>
          </div>

          <div className=" gap-4 item-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 mt-24 md:mt-24">
            <div className="text-center md:text-left">
              <div className="font-bold text-2xl md:text-4xl lg:text-6xl">
                Al-Hub
              </div>
              <h2 className="text-base md:text-xl lg:text-2xl mt-2">
                Local Listing platform
              </h2>
              <h3 className="text-lg md:text-xl lg:text-2xl mt-3">Overview</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-3">
                Gouter is a modern, simple to use Online QR-code Menu that
                allows customers to browse digital menu using their mobile
                devices. It gives possibility to guests not only to dine-in, but
                also reserve a table and make a pre-order.
              </p>

              <div className="flex flex-wrap mt-10 md:mt-16 gap-6 md:gap-20">
                <div className="font-bold text-xl md:text-2xl">
                  <h3 className="flex items-center">Project length&nbsp;</h3>
                  <h3 className="flex items-center mt-2 md:mt-0">
                    Sector&nbsp;
                  </h3>
                  <h3 className="flex items-center mt-2 md:mt-0">
                    Project Goal&nbsp;
                  </h3>
                  <h3 className="flex items-center mt-2 md:mt-0">
                    Services&nbsp;
                  </h3>
                </div>

                <div className="text-base md:text-xl">
                  <h3 className="flex items-center">4 months</h3>
                  <h3 className="flex items-center mt-2 md:mt-0">
                    Restaurant industry
                  </h3>
                  <h3 className="flex items-center mt-2 md:mt-0">
                    Create a product that will cover all processes of restaurant
                    life cycle
                  </h3>
                  <h3 className="flex items-center mt-2 md:mt-0">
                    Product design, Brand strategy
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-14 flex justify-center">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413400/LYMDATALABS/Pages/Works/image2_cijaav.jpg"
                alt="Image2"
                className="max-w-full h-auto"
              />
            </div>

            <div className="mt-14 text-center">
              <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl">
                Challenge
              </h2>
              <h3 className="mt-5 text-xl md:text-2xl lg:text-2xl">
                Improve the efficiency of the dining experience by allowing
                customers to view and order from the menu digitally, reducing
                the need for waitstaff and streamlining the order process.
              </h3>
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414147/LYMDATALABS/Pages/Works/image3_fra0my.jpg"
                alt="Image3"
                className="mt-14"
              />

              <div class="bg-gray-200 mt-14 p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col md:flex-row md:mt-7 md:gap-8">
                  <div className="w-full md:w-[700px] md:order-1">
                    <h2 className="font-bold text-4xl">Process</h2>
                    <h3 className="font-bold text-2xl mt-10">
                      Understanding Primary Goals & Objectives
                    </h3>
                    <h3 className="mt-5 text-xl">
                      Through our key findings, we identified strategies to
                      approach user problems in the most relevant way - defining
                      the customer journey. A critical success factor of this
                      effort was to make sure that the value proposition was
                      directly correlated to each stage of the journey.
                    </h3>

                    <div className="flex mt-7 gap-5 md:gap-24">
                      <div>
                        <h2 className="font-bold">Research</h2>
                        <ul className="mt-3">
                          <li>Ethnographic User Study</li>
                          <li>User personas</li>
                          <li>Requirements Definition</li>
                          <li>Expert Analysis</li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="font-bold">Strategy</h2>
                        <ul className="mt-3">
                          <li>Competitive Analysis</li>
                          <li>Discovery Workshop</li>
                          <li>User Flows</li>
                          <li>Wireframes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-[600px] mt-5 md:mt-0 md:order-2">
                    <img
                      src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414148/LYMDATALABS/Pages/Works/image4_oamii7.jpg"
                      alt="Image4"
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-col lg:flex-row mt-14 gap-12 border-solid">
                <div className="lg:w-1/2">
                  <img
                    src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414225/LYMDATALABS/Pages/Works/image5_da4to3.jpg"
                    alt="Image5"
                    className="w-full"
                  />
                </div>
                <div className="lg:w-1/2">
                  <img
                    src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414231/LYMDATALABS/Pages/Works/image6_xkzhfp.jpg"
                    alt="Image6"
                    className="w-full"
                  />
                </div>
              </div> */}

              <div className="bg-gray-200 mt-14 p-4 sm:p-6 lg:p-8">
                <div className="max-w-screen-xl mx-auto">
                  <div className="flex flex-col md:flex-row md:mt-7 md:gap-8">
                    <div className="w-full md:w-[700px] md:order-1">
                      <h2 className="font-bold text-4xl">Result</h2>
                      <h3 className="font-bold text-2xl mt-10">
                        Functionable & Usable Design
                      </h3>
                      <h3 className="mt-5 text-xl">
                        Through our key findings, we identified strategies to
                        approach user problems in the most relevant way -
                        defining the customer journey. A critical success factor
                        of this effort was to make sure that the value
                        proposition was directly correlated to each stage of the
                        journey.
                      </h3>

                      <div className="flex mt-7 gap-5 md:gap-24">
                        <div>
                          <h2 className="font-bold">Design</h2>
                          <ul className="mt-3">
                            <li>Clickable Prototyping</li>
                            <li>250+ High Fidelity Designs</li>
                            <li>Desktop and Mobile Design</li>
                          </ul>
                        </div>

                        <div>
                          <ul className="mt-10">
                            <li>Style Guide</li>
                            <li>Wireframes</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-[600px] mt-5 md:mt-0 md:order-2">
                      <img
                        src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414237/LYMDATALABS/Pages/Works/image7_skfwjs.jpg"
                        alt="Image7"
                        className="w-full h-[350px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-14">
                <img
                  src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414244/LYMDATALABS/Pages/Works/image8_ufilz4.jpg"
                  alt="Image8"
                />
              </div> */}

              <div className="mt-14">
                <img
                  src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414251/LYMDATALABS/Pages/Works/image9_v6kmnd.jpg"
                  alt="Image9"
                />
              </div>

              <div className="bg-gray-200 mt-10 p-4 sm:p-6 lg:p-8 ">
                <div className="max-w-screen-xl mx-auto">
                  <div className="w-full bg-gray-200 mt-7 gap-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:gap-10 ">
                      <h2 className="font-bold text-xl mt-10 md:mt-10 ">
                        Engineering the end-to-end experience
                      </h2>

                      <h3 className="text-xl mt-5 md:mt-0 max-w-[650px]">
                        YML teams built the Obie app from scratch, along with
                        the cloud and architecture, a machine-learning
                        recommendation engine, a custom CMS, and an integration
                        to sync users’ Apple HealthKit data for more
                        comprehensive health recommendations. Our partnership
                        transformed Obie's approach into a backend framework
                        that iterates in sync with design — a modern, agile,
                        empathetic approach to democratizing reproductive
                        health.
                      </h3>
                    </div>

                    <img
                      src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414258/LYMDATALABS/Pages/Works/image10_auhtii.svg"
                      alt="Image10"
                      className="mt-5 md:mt-10 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 mt-14 p-4 sm:p-6 lg:p-8 my-14">
                <div className="max-w-screen-xl mx-auto ">
                  <h2 className="font-bold text-xl mt-5 md:mt-5 md:text-2xl">
                    How we did it
                  </h2>
                  <div className="flex flex-col md:flex-row md:gap-10">
                    <div className="md:w-1/2">
                      <div className="mt-10">
                        <h2 className="font-bold">Strategy</h2>
                        <ul className="mt-3">
                          <li>Product Strategy</li>
                          <li>User Research & Testing</li>
                          <li>Product Roadmapping</li>
                          <li>Technology Strategy</li>
                          <li>Data Strategy</li>
                          <li>Optimization Strategy</li>
                        </ul>
                      </div>
                      <div className="mt-10">
                        <h2 className="font-bold">Engineering</h2>
                        <ul className="mt-3">
                          <li>Mobile App Development</li>
                          <li>Technical Architecture</li>
                          <li>API & CMS Development</li>
                          <li>Prototyping</li>
                          <li>Front-end + Back-end Development</li>
                          <li>Manual QA</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="mt-10">
                        <h2 className="font-bold">Design</h2>
                        <ul className="mt-3">
                          <li>UX/UI Design</li>
                          <li>Visual Design</li>
                          <li>Art Direction</li>
                          <li>Accessibility</li>
                          <li>Motion Design</li>
                        </ul>
                      </div>
                      <div className="mt-10">
                        <h2 className="font-bold">Anomaly</h2>
                        <ul className="mt-3">
                          <li>Brand Development</li>
                          <li>Business and Product Strategy</li>
                          <li>User Interviews</li>
                          <li>User Research Testing</li>
                          <li>Product Roadmapping</li>
                          <li>Content Strategy</li>
                          <li>Personalization Strategy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlHubDemo;
