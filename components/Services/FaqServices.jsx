"use client"
import React, { useState } from "react";

const FaqServices = () => {
  const [showMe, SetShowMe] = useState("");
  const handleShowMe = (e) => {
    if (showMe === e) {
      SetShowMe("");
    } else {
      SetShowMe(e);
    }
  };
  return (
    <div className="max-w-[1150px] mx-auto px-2 mt-16 ">
      <h1 className="text-2xl font-bold mb-5  w-[320px] md:text-4xl lg:text-5xl md:w-[400px] lg:w-[450px]">
        Frequently Asked Questions
      </h1>
      <h2 className="text-xl leading-10 md:w-[400px] lg:w-[450px] ">
        If you have questions that are not listed here send them to us via
        email.
      </h2>

      <div className="md:flex w-full">
        <img
          className="p-10 w-[450px]"
          src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1705311416/LYMDATALABS/Pages/webp/faq_dbdqew.svg"
          alt=""
          srcset=""
        />
        <div className="leading-7 md:w-full flex flex-col gap-10 pt-10 pb-10">
          <div>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">
                How can we start a project together?
              </h2>
              <h2
                onClick={() => {
                  handleShowMe("one");
                }}
                className="w-10 text-3xl flex justify-center  items-center"
              >
                {" "}
                {showMe === "one" ? "-" : "+"}
              </h2>
            </div>
            {showMe === "one" && (
              <h4 className="pt-4 pb-4">
                Fill the contact form or Write to us at hello@brucira.com. We
                will quickly respond and then schedule the discovery call. After
                we understand your requirements, project scope and deadline
                through it then we would revert with the cost estimate and
                statement of work. Once that is approved, we will initiate the
                project by scheduling calls with your team.
              </h4>
            )}
          </div>

          <div>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">
                What sectors do you specialise in?
              </h2>
              <h2
                onClick={() => {
                  handleShowMe("two");
                }}
                className="w-10 text-3xl flex justify-center  items-center"
              >
                {" "}
                {showMe === "two" ? "-" : "+"}
              </h2>
            </div>
            {showMe === "two" && (
              <h4 className="pt-4 pb-4">
                Over 16+ Industry verticals represented in our agency, offering
                a valuable perspective on our work. Take a look at our clients:
                https://www.brucira.com/clients/
              </h4>
            )}
          </div>

          <div>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">
                What is your working model?
              </h2>
              <h2
                onClick={() => {
                  handleShowMe("three");
                }}
                className="w-10 text-3xl flex justify-center  items-center"
              >
                {" "}
                {showMe === "three" ? "-" : "+"}
              </h2>
            </div>
            {showMe === "three" && (
              <h4 className="pt-4 pb-4">
                We offer two working models. For long-term engagements we offer
                a team extension model, to help you grow your product. For
                short–term engagements we offer a project basis model.
              </h4>
            )}
          </div>

          <div>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold ">
                What would you need from me to get started?
              </h2>
              <h2
                onClick={() => {
                  handleShowMe("four");
                }}
                className="w-10 text-3xl flex justify-center  items-center"
              >
                {" "}
                {showMe === "four" ? "-" : "+"}
              </h2>
            </div>
            {showMe === "four" && (
              <h4 className="pt-4 pb-4">
                As we follow a user-centric approach to design and development,
                we would need to understand your project requirements in depth.
                We would need a detailed brief from you. To further chart out
                the project goals, timelines, resource allocation and more
                details, we would schedule meetings with you and the team.
              </h4>
            )}
          </div>
        </div>
      </div>

      {/* How can we start a project together?

What sectors do you specialise in?

What is your working model?

What would you need from me to get started? */}
    </div>
  );
};

export default FaqServices;
