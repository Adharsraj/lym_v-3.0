"use client"
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { FaLongArrowAltDown } from "react-icons/fa";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const scale = 0.9;

  const [showform, setshowform] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sucess, setsucess] = useState(false);

  const handleClicktoform = () => {
    const component2Element = document.getElementById("form");
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
        y: 100,
        rotate: 0,
        delay: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      }
    );

    gsap.from("h6 div", 1.5, {
      yPercent: 100,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });

    gsap.to("h6", 1.5, {
      clipPath: "polygon(0 0,100% 0,100% 100%,0% 100%)",
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });
  }, []);

  const handleContactClick = () => {
    const toAddress = "example@example.com";
    const subject = "Contact Us";

    const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&to=${toAddress}&su=${encodeURIComponent(
      subject
    )}`;

    window.open(gmailLink);
  };

  // const [text, setText] = useState('');
  const sentences = ["ddrive conversion", "bbuild to scale", "iinspire action"];
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  // const sentences = ["How can I help you?", "Here's more text.", "This is additional text."];
  let sentenceIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    const typeText = () => {
      if (sentenceIndex < sentences.length) {
        if (charIndex < sentences[sentenceIndex].length) {
          setText(
            (prevText) => prevText + sentences[sentenceIndex].charAt(charIndex)
          );
          charIndex++;
          setTimeout(typeText, 40); // Adjust typing speed (in milliseconds)
        } else {
          setTimeout(() => {
            setShowCursor(false);
            setTimeout(eraseText, 500); // Delay before erasing (in milliseconds)
          }, 1000); // Delay after typing complete (in milliseconds)
        }
      } else {
        sentenceIndex = 0;
        setTimeout(typeText, 0); // Start typing the first sentence again immediately
      }
    };

    const eraseText = () => {
      if (charIndex > 0) {
        setText((prevText) => prevText.slice(0, -1));
        charIndex--;
        setTimeout(eraseText, 20); // Adjust erasing speed (in milliseconds)
      } else {
        setShowCursor(true);
        sentenceIndex++;
        setTimeout(typeText, 500); // Delay before typing the next sentence (in milliseconds)
      }
    };

    typeText();
  }, []); // Only run this effect once

  const verticalTextStyle = {
    writingMode: "vertical-lr", // Vertical text from left to right
    textOrientation: "mixed", // Text flows vertically and writes upwards
    whiteSpace: "nowrap", // Prevents text from wrapping
    transform: "rotate(180deg)", // Rotate the text 180 degrees to start from the bottom
  };

  const apiKey = "6a52d261df06839eb8e33a439c651d09";
  const city = "Ernakulam";
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
      )
      .then((response) => {
        console.log(response);
        // Convert temperature from Fahrenheit to Celsius
        const celsiusTemp = (((response.data.main.temp - 32) * 5) / 9).toFixed(
          2
        );
        // Create a new object with Celsius temperature
        const updatedWeatherData = {
          ...response.data,
          main: {
            ...response.data.main,
            temp: celsiusTemp,
          },
        };
        setWeatherData(updatedWeatherData);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the time every second

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  const [captchaValue, setCaptchaValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setErrorMessage("");
  };

  // emailjs credentials
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    if (!captchaValue) {
      setErrorMessage("Please complete the CAPTCHA.");
      return;
    }
    setLoading(true);
    console.log(formData);
    try {
      await emailjs.send(
        "service_w4ox98s",
        "template_95dbo87",
        {
          from_name: formData.name,
          to_name: "LYMData",
          from_email: formData.email,
          to_email: "info@lymdata.com",
          company_name: formData.company,
          phone_number: formData.phoneNumber,
          message: formData.message,
        },
        "_h7dmU_ZWC9dc_ISz"
      );
      setLoading(false);
      setsucess(true);
      resetForm();
      // setshowform(false);
      // toast.success("Form submitted successfully", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px]  mx-auto p-4  text-[#040404] overflow-hidden">
        <div className=" md:px-20">
          <div className="relative flex flex-col justify-center items-center h-screen xl:mt-[-40px] font-aeonic">
            <span className=" text-gray-300 opacity-50 font-extrabold absolute xl:text-[700px] xl:ml-48  md:text-[400px] text-[200px]  overflow-hidden  ">
              Hello
            </span>
            <h1 className=" z-10 xl:text-[200px] md:text-8xl text-[60px] w-full animate-slide-up font-bold">
              Let's talk
            </h1>

            <h2 className="flex  z-10   w-full gap-4 animate-slide-up xl:px-3 xl:mt-2">
              <div
                className=" z-10 "
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/lymdata-labs",
                    "_blank"
                  )
                }
              >
                <svg
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/lymdata-labs",
                      "_blank"
                    )
                  }
                  className="z-10 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M27.83 2H4.09C2.93 2 2 2.93 2 4.02v23.96C2 29.07 2.93 30 4.1 30h23.8c1.17 0 2.1-.93 2.1-2.02V4.02A2.2 2.2 0 0 0 27.83 2ZM6.1 12.5h4.11v13.38h-4.1V12.5Zm2.1-6.61c1.31 0 2.4 1.09 2.4 2.41a2.42 2.42 0 0 1-2.4 2.41A2.42 2.42 0 0 1 5.8 8.3c0-1.4 1.09-2.41 2.4-2.41Zm8.6 6.61h-3.95v13.22h4.19v-6.6c0-1.72.3-3.43 2.48-3.43 2.17 0 2.17 2.02 2.17 3.58v6.53h4.11v-7.31c0-3.58-.77-6.38-4.96-6.38a4.34 4.34 0 0 0-3.96 2.18h-.08V12.5Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                className="z-10"
                onClick={() =>
                  window.open("https://www.facebook.com/lymdatalabs/", "_blank")
                }
              >
                <svg
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/lymdatalabs/",
                      "_blank"
                    )
                  }
                  className="z-10 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M16 2C8.27 2 2 8.3 2 16.09 2 23.12 7.12 28.94 13.81 30v-9.84h-3.55v-4.07h3.55v-3.1c0-3.54 2.1-5.49 5.3-5.49 1.52 0 3.12.28 3.12.28v3.46h-1.76c-1.74 0-2.28 1.09-2.28 2.2v2.65h3.88l-.62 4.07h-3.26V30A14.06 14.06 0 0 0 30 16.09C30 8.3 23.73 2 16 2Z"></path>
                </svg>
              </div>
              <div
                className="z-10"
                onClick={() =>
                  window.open(
                    "https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==",
                    "_blank"
                  )
                }
              >
                <svg
                  onClick={() =>
                    window.open(
                      "https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==",
                      "_blank"
                    )
                  }
                  className="z-10 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16 8.81a7.2 7.2 0 1 0 0 14.38 7.2 7.2 0 0 0 0-14.38Zm0 11.85a4.67 4.67 0 1 1 0-9.33 4.67 4.67 0 0 1 0 9.33Z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M25.14 8.52a1.68 1.68 0 1 1-3.35 0 1.68 1.68 0 0 1 3.35 0Z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M16 2c-3.8 0-4.28.02-5.78.08-1.49.07-2.5.3-3.4.65-.91.36-1.7.84-2.47 1.62a6.94 6.94 0 0 0-1.62 2.48c-.34.89-.58 1.9-.65 3.4C2.02 11.72 2 12.2 2 16s.02 4.28.08 5.77c.07 1.49.3 2.5.65 3.4.36.92.84 1.7 1.62 2.48a6.94 6.94 0 0 0 2.48 1.62c.89.34 1.9.58 3.4.65 1.5.06 1.96.08 5.77.08 3.8 0 4.28-.02 5.77-.08 1.5-.07 2.5-.3 3.4-.65.92-.36 1.7-.84 2.48-1.62a6.94 6.94 0 0 0 1.62-2.48c.34-.89.58-1.9.65-3.4.06-1.5.08-1.97.08-5.77s-.02-4.28-.08-5.78c-.07-1.49-.3-2.5-.65-3.4a6.82 6.82 0 0 0-1.62-2.48 6.94 6.94 0 0 0-2.48-1.61c-.89-.35-1.9-.59-3.4-.65C20.27 2.02 19.8 2 16 2Zm0 2.52c3.73 0 4.17.02 5.65.09 1.37.06 2.1.28 2.6.48.66.26 1.12.56 1.61 1.04.49.5.8.96 1.05 1.62.18.49.42 1.23.48 2.6.07 1.47.08 1.91.08 5.65s-.01 4.18-.08 5.66a7.64 7.64 0 0 1-.48 2.6 4.34 4.34 0 0 1-1.05 1.61c-.49.49-.95.8-1.61 1.05-.5.18-1.23.42-2.6.48-1.48.07-1.92.08-5.66.08-3.73 0-4.17-.01-5.65-.08a7.64 7.64 0 0 1-2.6-.48 4.34 4.34 0 0 1-1.61-1.05c-.5-.49-.8-.95-1.05-1.61a7.78 7.78 0 0 1-.48-2.6A97.15 97.15 0 0 1 4.52 16c0-3.74.01-4.18.08-5.65.06-1.37.29-2.11.48-2.6.26-.66.56-1.13 1.05-1.62.49-.48.95-.8 1.6-1.04.5-.19 1.24-.42 2.6-.48A92.1 92.1 0 0 1 16 4.52Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </h2>
          </div>
          <div className=" md:flex absolute ">
            {/* <div      
              className="inline-block hover:cursor-pointer mt-[-85px] mb-20"
            >
              <img
            onClick={handleClicktoform}
            className="lg:ml-10 w-[80px] cursor-pointer animate-bounce"
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg"
            alt=""
          />
            </div> */}
          </div>

          <div id="form" className="flex justify-center items-center h-screen">
            <div className="w-full sm:w-full lg:w-full p-8 mt-14 md:mt-0 lg:mt-0 lg:mb-14 rounded some-element">
              <h4 className="text-4xl font-bold md:mb-8 border border-transparent lg:leading-[70px] h-36 lg:text-[71px]">
                {" "}
                How can we <br /> help
                <span className="relative ml-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                  {text}
                </span>
                {showCursor && <span className="ml-1">|</span>}
              </h4>
              {showform ? (
                <form onSubmit={handleSubmit} className="">
                  <div className="grid md:grid-cols-2 md:gap-16">
                    <div>
                      <div className="mb-4 md:mt-14">
                        {/* <label className="block mb-1 font-semibold">
                    Name <span className="text-red-500 text-md">*</span>
                  </label> */}
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                          placeholder="Name *"
                          required
                        />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                      </div>
                      <div className="mb-4">
                        {/* <label className="block mb-1 font-semibold">Company</label> */}
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3"
                          placeholder="Company"
                        />
                      </div>
                      <div className="mb-4">
                        {/* <label className="block mb-1 font-semibold">
                    Email <span className="text-red-500 text-md">*</span>{" "}
                  </label> */}
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3"
                          placeholder="Email *"
                          required
                        />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                      </div>
                    </div>
                    <div>
                      <div className="mb-4 md:mt-14">
                        {/* <label className="block mb-1 font-semibold">
                    Phone Number
                  </label> */}
                        <input
                          type="number"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="mb-4">
                        {/* <label className="block mb-1 font-semibold">
                    Please, tell me what you're after
                  </label> */}
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3 md:h-32 h-10"
                          placeholder="Please, tell me what you're after"
                        />
                      </div>
                    </div>
                    <div>
                      {formData.name && formData.email && (
                        <ReCAPTCHA
                          sitekey="6LfClQ4pAAAAAH9desXouDRgOTgpf1s-crTYaBeT"
                          onChange={handleCaptchaChange}
                        />
                      )}
                      {errorMessage && (
                        <p className="text-red-500">{errorMessage}</p>
                      )}
                    </div>

                    {/* 6Ldai1goAAAAADOPDbiPjjxMkX9kFld10SVriUG7 - test key */}
                    {/* 6Le7tVQoAAAAACoFnHjOhLzdl_xUSP_HMDh1g5xe -localhost key */}
                  </div>

                  <div className="flex   justify-center items-center    gap-4 md:w-[600px] lg:ml-56 xl:mx-auto  xl:w-[570px] mx-auto lg:mb-7">
                    <div className="flex  group  gap-2 ">
                      {/* {sucess ? (
       <h2 className="bg-black  text-white text-center w-[300px] p-2">
       Mail sent successfully, our team will get in touch with you soon
     </h2>
    ) : (
      <button
        type="submit"
        className={`p-3 md:mt-8 flex justify-center rounded-full w-[180px] border cursor-pointer text-white bg-black ${
          loading ? "bg-black" : "hover:from-indigo-400 hover:to-cyan-400"
        }`}
        disabled={loading}
      >
        {loading ? (
           <svg
           className="animate-spin h-5 w-5 text-black mx-auto"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
         >
           <circle
             className="opacity-25"
             cx="12"
             cy="12"
             r="10"
             stroke="currentColor"
             strokeWidth="4"
           ></circle>
           <path
             className="opacity-75"
             fill="currentColor"
             d="M4 12a8 8 0 018-8V2.83a1 1 0 00-1.7-.7l-4 4a1 1 0 00-.3.7V12"
           ></path>
         </svg>
        ) : (
          "Submit"
        )}
      </button>
    )} */}

                      {sucess ? (
                        <h4 className="bg-black text-white text-center w-[300px] p-2 border rounded-full">
                          Mail sent successfully, our team will get in touch
                          with you soon
                        </h4>
                      ) : (
                        <div
                          onClick={handleSubmit}
                          className="flex  group hover:cursor-pointer gap-2 w-[300px] lg:ml-72 xl:mx-auto  xl:w-[230px]  lg:mb-7 items-center justify-center"
                        >
                          <h3 className="p-3 text-sm flex items-center justify-center mt-10 rounded-full w-[150px] bg-black text-white transition-all border transform hover:translate-x-14">
                            Submit
                          </h3>
                          <h3 className="p-3 mt-10 flex items-center rounded-full w-[45px] bg-black text-white border fill-current">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 25 25"
                            >
                              <g transform={`scale(${scale})`}>
                                <path
                                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5"
                                  data-name="Right"
                                />
                              </g>
                            </svg>
                          </h3>
                        </div>
                      )}

                      {/* <button
                        type="submit"
                        className={`p-2 flex border items-center justify-center mt-10 rounded-full w-[200px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white transition-all duration-300 ${
                          loading
                            ? "opacity-50 cursor-wait"
                            : "transform group-hover:-translate-x-[-56px]"
                        }`}
                        disabled={loading}
                      >
                        {loading ? (
                          <svg
                            className="animate-spin h-5 w-5 mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="#333"
                              d="M4 12a8 8 0 018-8V2.83a1 1 0 00-1.7-.7l-4 4a1 1 0 00-.3.7V12"
                            ></path>
                          </svg>
                        ) : (
                          "Submit"
                        )}
                      </button> */}

                      {/* <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white">
                        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412489/LYMDATALABS/Pages/Home/asset_49_lb3zxr_vnzxpt.svg" />
                      </h1> */}
                    </div>
                  </div>
                </form>
              ) : (
                <div className="flex items-center justify-center pt-10">
                  <div className=" border rounded-lg p-8 shadow-lg bg-white text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                      Thank you for contacting
                    </h3>
                    <h4 className="text-lg">
                      Our team will get in touch with you soon
                    </h4>
                  </div>
                </div>
              )}
              {/* <ToastContainer /> */}
            </div>
          </div>
        </div>
      </div>

      <div className=" hidden md:flex  h-screen relative overflow-hidden some-element">
        <img
          className="hidden xl:flex absolute  top-[150px] left-0 transform  scale-150 overflow-hidden   "
          src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187552/assets/assets%20%283%29/asset_36_mfzyyl.svg"
          alt="img"
        />
        <div className="flex flex-col justify-around ">
          <div className="pl-4">
            <h3 className="text-[12px]  absolute    " style={verticalTextStyle}>
              10.010900672433708° N 76.36072005340284° E{" "}
            </h3>
          </div>

          <div className="invisible">
            <h3
              className="text-[12px] border border-transparent"
              style={verticalTextStyle}
            >
              {weatherData?.main?.temp}°C
            </h3>
          </div>

          <div className="flex flex-col gap-10 pl-4">
            <h3
              className="text-[12px] border border-transparent"
              style={verticalTextStyle}
            >
              {weatherData?.main?.temp}°C
            </h3>
            <h3
              className="text-[12px] border border-transparent"
              style={verticalTextStyle}
            >
              {formattedTime}
            </h3>
          </div>
        </div>

        <div className="border border-transparent w-1/2 flex flex-col gap-10 justify-center items-center text-left  ">
          <div className="border border-transparent w-full pl-10 text-[22px]"></div>
          <div className="  w-full pl-10 text-[18px]">
            <h3 className="  w-1/2 p-2 font-light ">
              Smart Business Center <br />
              First floor, Thapasya Building <br />
              Thapasya Rd, InfoPark Campus <br /> Infopark, Kochi <br /> Kerala,
              India <br /> 682030
            </h3>
          </div>
        </div>
        <div className=" mt-[-160px] ">
          <h3
            style={verticalTextStyle}
            className="absolute  h-[97%] uppercase text-sm"
          >
            Ernakulam,kerala
          </h3>
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704172893/LYMDATALABS/Pages/webp/contact_q4zo6u.webp"
            alt="img1"
            className="h-full xl:w-[600px] px-10 absolute filter grayscale"
          />
        </div>
      </div>
      <div className="md:hidden flex pt-3  flex-col some-element">
        <h3 className="flex  text-4xl mb-8 px-6 font-bold  ">
          Our <br /> locations
        </h3>
        <div className="flex">
          {/* <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704172893/LYMDATALABS/Pages/webp/contact_q4zo6u.webp"
            alt="img2"
            className="  pl-5 filter grayscale  overflow-hidden"
          /> */}
          <h3
            className=" py-5 text-sm uppercase  font-light"
            style={verticalTextStyle}
          >
            {" "}
            Ernakulam,kerala
          </h3>
          <div className="flex flex-col  justify-around font-light ">
            <div className="flex flex-col gap-8 pr-1 ">
              <h3
                className="text-[12px]   border-transparent "
                style={verticalTextStyle}
              >
                {weatherData?.main?.temp}°C
              </h3>
              <h3
                className="text-[12px]  border border-transparent"
                style={verticalTextStyle}
              >
                {formattedTime}
              </h3>
            </div>

            <div className="invisible">
              <h3
                className="text-[12px] border border-transparent"
                style={verticalTextStyle}
              >
                4:47 AM
              </h3>
            </div>
          </div>
        </div>

        <div className=" w-full px-6 mt-8 ">
          <h3 className="  p-2 font-light text-[18px]">
            Smart Business Center <br />
            First floor, Thapasya Building <br />
            Thapasya Rd, InfoPark Campus <br /> Infopark, Kochi <br /> Kerala,
            India <br /> 682030
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
