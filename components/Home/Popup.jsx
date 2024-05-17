import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Popup = () => {
  const scale = 0.9; 

  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    message: "",
  });


  const [loading, setLoading] = useState(false);
   
  const [sucess, setsucess] = useState(false);

  useEffect(() => {
    // Delay showing the popup for 3 seconds
    const delay = setTimeout(() => {
      const hasShownPopupBefore = localStorage.getItem("popupShown");

      if (!hasShownPopupBefore) {
        setIsVisible(true);
      }
    }, 4000);

    // Clear the delay timeout on unmount to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);
 

  const handleCloseClick = () => {
    setIsVisible(false);
    localStorage.setItem("popupShown", "true");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      companyName: "",
      message: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const updatedErrors = {
      fullName: "",
      email: "",
      mobileNumber: "",
      companyName: "",
      message: "",
    };

    if (!/^[a-zA-Z0-9_]+$/.test(formData.fullName)) {
      updatedErrors.fullName = 'Name can only contain letters, numbers, and underscores';
      valid = false;
    }

    // Email validation: a simple regex for basic email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      updatedErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!/^[0-9-]+$/.test(formData.mobileNumber)) {
      updatedErrors.mobileNumber = 'Invalid phone number';
      valid = false;
    }

    if (!/^(http|https):\/\/[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(formData.companyName)) {
      updatedErrors.companyName = 'Invalid company URL';
      valid = false;
    }

    if (formData.message.trim() === '') {
      updatedErrors.message = 'Message cannot be empty';
      valid = false;
    }

    setErrors(updatedErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);

    if (validateForm()) {
      try {
        // Send the email using Email.js
        await emailjs.send(
          "service_w4ox98s",
          "template_95dbo87",
          {
            from_name: formData.fullName,
            to_name: "LYMData",
            from_email: formData.email,
            to_email: "info@lymdata.com",
            company_name: formData.companyName,
            phone_number: formData.mobileNumber,
            message: formData.message,
          },
          "_h7dmU_ZWC9dc_ISz"
        );
        setLoading(false);
  
        setsucess(true);
        resetForm(); // Reset the form fields
        const delay = setTimeout(() => {
          setIsVisible(false);
          localStorage.setItem("popupShown", "true");
  
        }, 2000);
  
        console.log("Email sent successfully");
      } catch (error) {
        console.error("Error sending email:", error);
        // Handle error (e.g., display an error message to the user)
      }
    }
  };

  // google recaptcha
  const[isVerified,setIsVerified]=useState(false)
  function onChange(value) {
    console.log("Captcha value:", value);
    setIsVerified(true)
  }

  return (
    <>
      {isVisible && (
        <div className="absolute">
          <div className="fixed inset-0 z-50 md:mt-14 p-10   flex   text-white flex-col justify-center items-center backdrop-blur-lg some-ele">
            <div className="bg-black h-[500px]  lg:flex  p-5  pt-0 overflow-y-auto relative">
              <div className="lg:flex lg:flex-col lg:gap-10">
                <div className="flex justify-between">
                  {/* <svg
                    width="82"
                    height="82"
                    viewBox="0 0 82 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M42.0412 8.41392C42.3963 8.00315 42.7687 7.6024 43.1584 7.21264C43.5482 6.82288 43.949 6.45047 44.3597 6.09544L45.1163 5.44153L46.4241 6.95468L45.6675 7.60859C45.2934 7.93196 44.9281 8.27138 44.5727 8.62685C44.2172 8.98233 43.8778 9.34759 43.5544 9.72174L42.9005 10.4783L41.3873 9.17049L42.0412 8.41392ZM41.2431 12.9529L40.7933 13.8461C40.3427 14.741 39.9626 15.6623 39.653 16.602L39.3401 17.5518L37.4406 16.9259L37.7535 15.9761C38.0938 14.9434 38.5116 13.9305 39.007 12.9466L39.4567 12.0535L41.2431 12.9529ZM47.9993 3.51093L48.8924 3.0612C49.8763 2.56578 50.8892 2.14795 51.9219 1.80769L52.8717 1.49476L53.4976 3.39431L52.5478 3.70724C51.6081 4.01684 50.6868 4.39694 49.7919 4.84753L48.8987 5.29726L47.9993 3.51093ZM38.7615 20.475L38.6884 21.4723C38.6156 22.4657 38.6156 23.4634 38.6884 24.4568L38.7615 25.4541L36.7669 25.6003L36.6938 24.603C36.6138 23.5123 36.6138 22.4168 36.6938 21.3261L36.7669 20.3287L38.7615 20.475ZM56.2745 0.8211L57.2719 0.747971C58.3626 0.667995 59.4581 0.667994 60.5488 0.74797L61.5461 0.821099L61.3999 2.81574L60.4026 2.74262C59.4092 2.66978 58.4115 2.66978 57.4181 2.74262L56.4208 2.81574L56.2745 0.8211ZM39.3401 28.3773L39.653 29.3271C39.9626 30.2668 40.3427 31.1881 40.7933 32.083L41.2431 32.9762L39.4567 33.8756L39.007 32.9825C38.5116 31.9986 38.0938 30.9857 37.7535 29.9529L37.4406 29.0032L39.3401 28.3773ZM64.949 1.49476L65.8988 1.80769C66.9315 2.14795 67.9444 2.56578 68.9283 3.0612L69.8214 3.51093L68.922 5.29726L68.0288 4.84753C67.1339 4.39694 66.2126 4.01684 65.2729 3.70724L64.3231 3.39431L64.949 1.49476ZM72.7044 5.44153L73.461 6.09544C73.8717 6.45047 74.2725 6.82288 74.6622 7.21264C75.052 7.6024 75.4244 8.00315 75.7794 8.41392L76.4334 9.17049L74.9202 10.4783L74.2663 9.72174C73.9429 9.34759 73.6035 8.98233 73.248 8.62685C72.8926 8.27138 72.5273 7.93196 72.1532 7.60859L71.3966 6.95468L72.7044 5.44153ZM43.5112 39.0616C43.7889 39.3275 44.0718 39.5848 44.3597 39.8336L45.1163 40.4876L46.4241 38.9744L45.6675 38.3205C45.4162 38.1032 45.1688 37.8787 44.9257 37.647L61.4925 21.0803V31.8995L63.4925 31.8995V17.666H49.259V19.666L60.0783 19.666L43.5463 36.198L42.9005 35.4508L41.3873 36.7586L42.0412 37.5152C42.0703 37.5487 42.0994 37.5822 42.1286 37.6157L37.7406 42.0037C28.9901 34.3488 15.6791 34.6921 7.33764 43.0336C-1.3619 51.7331 -1.3619 65.8378 7.33764 74.5374C16.0372 83.2369 30.1419 83.2369 38.8414 74.5374C47.4244 65.9544 47.5394 52.1102 39.1865 43.3862L43.5112 39.0616ZM36.3229 43.4214L21.6659 58.0784L23.0801 59.4926L37.7719 44.8008C45.344 52.7433 45.2291 65.3213 37.4272 73.1232C29.5087 81.0416 16.6703 81.0416 8.75185 73.1232C0.833366 65.2047 0.833366 52.3663 8.75185 44.4478C16.312 36.8876 28.3569 36.5455 36.3229 43.4214ZM48.8987 40.6318L49.7919 41.0816C50.6868 41.5321 51.6081 41.9123 52.5478 42.2218L53.4976 42.5348L52.8717 44.4343L51.9219 44.1214C50.8892 43.7811 49.8763 43.3633 48.8924 42.8679L47.9993 42.4182L48.8987 40.6318ZM78.364 12.0535L78.8137 12.9466C79.3091 13.9305 79.7269 14.9434 80.0672 15.9761L80.3801 16.9259L78.4806 17.5518L78.1676 16.602C77.858 15.6623 77.478 14.741 77.0274 13.8461L76.5776 12.9529L78.364 12.0535ZM56.4208 43.1133L57.4181 43.1865C58.4115 43.2593 59.4092 43.2593 60.4026 43.1865L61.3999 43.1133L61.5461 45.108L60.5488 45.1811C59.4581 45.2611 58.3626 45.2611 57.2719 45.1811L56.2745 45.108L56.4208 43.1133ZM81.0538 20.3287L81.1269 21.3261C81.2069 22.4168 81.2069 23.5123 81.1269 24.603L81.0538 25.6003L79.0591 25.4541L79.1323 24.4568C79.2051 23.4634 79.2051 22.4657 79.1323 21.4723L79.0591 20.475L81.0538 20.3287ZM64.3231 42.5348L65.2729 42.2218C66.2126 41.9123 67.1339 41.5321 68.0288 41.0816L68.922 40.6318L69.8214 42.4182L68.9283 42.8679C67.9444 43.3633 66.9315 43.7811 65.8988 44.1214L64.949 44.4343L64.3231 42.5348ZM80.3801 29.0032L80.0672 29.9529C79.7269 30.9857 79.3091 31.9986 78.8137 32.9825L78.364 33.8756L76.5776 32.9762L77.0274 32.083C77.478 31.1881 77.858 30.2668 78.1676 29.3271L78.4806 28.3773L80.3801 29.0032ZM71.3966 38.9744L72.1532 38.3205C72.5273 37.9971 72.8926 37.6577 73.248 37.3022C73.6035 36.9468 73.9429 36.5815 74.2663 36.2074L74.9202 35.4508L76.4334 36.7586L75.7794 37.5152C75.4244 37.9259 75.052 38.3267 74.6622 38.7164C74.2725 39.1062 73.8717 39.4786 73.461 39.8336L72.7044 40.4876L71.3966 38.9744Z"
                      fill="#B4E300"
                    />
                  </svg> */}

                  <img
                    className="w-[80px]"
                    src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704863995/LYMDATALABS/Pages/webp/Mediamodifier-Design_mj7xei.png"
                    alt=""
                  />
                  <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 border border-gray-600 rounded-full p-3"
                    onClick={handleCloseClick}
                  >
                    {/* Close SVG icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <h3 className="text-4xl md:w-[300px] font-bold">
                  Unlock Your Free Homepage Audit
                </h3>
                <h3 className="lg:w-[300px]">
                  Let our friendly web experts curate a personalized list of
                  improvements that will help enhance the online presence of
                  your brand.
                </h3>
              </div>

              <div
                className={`flex  flex-col ${
                  errors.fullName ? "gap-5" : "gap-10"
                } mt-10 lg:w-[500px]`}
              >
                <div>
                  <input
                    className={`w-full text-sm outline-none  border-b bg-black ${
                      errors.fullName ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Name *"
                    required
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <input
                    className={`w-full text-sm outline-none border-b bg-black ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    className={`w-full text-sm outline-none border-b bg-black ${
                      errors.mobileNumber ? "border-red-500" : ""
                    }`}
                    type="number"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Mobile Phone *"
                    required
                  />
                  {errors.mobileNumber && (
                    <p className="text-red-500 text-xs">
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    className={`w-full text-sm outline-none  border-b bg-black ${
                      errors.companyName ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your Website URL *"
                    required
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-xs">{errors.companyName}</p>
                  )}
                </div>
                <div>
                  <input
                    className="w-full text-sm outline-none  border-b bg-black"
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What is your biggest website pain points?"
                  />
                  <div className=" mt-3 mb-[-20px]" >
                    <ReCAPTCHA
                      sitekey="6LfClQ4pAAAAAH9desXouDRgOTgpf1s-crTYaBeT"
                      onChange={onChange}
                    />
                  </div>

                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message}</p>
                  )}
                </div>
                {/* <h1 className="mt-5 bg-green-300 p-4 w-[200px]  text-center text-xl">submit</h1> */}
                {/* <div className="flex justify-center items-center ">
    {sucess ? (
       <h2 className="bg-black text-white text-center w-[300px] p-2 rounded-full">
       Mail sent successfully, our team will get in touch with you soon
     </h2>
    ) : (
      <button
        onClick={handleSubmit}
        type="submit"
        className={`mt-5 bg-black border p-2 w-[200px] rounded-full text-center text-xl  ${
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
    )}
  </div> */}

                {sucess ? (
                  <h5 className="bg-black text-white text-center w-[300px] p-2 border rounded-full">
                    Mail sent successfully, our team will get in touch with you
                    soon
                  </h5>
                ) : (
                  <div
                    onClick={handleSubmit}
                    className={`flex group hover:cursor-pointer gap-2 w-[300px] lg:ml-72 xl:mx-auto xl:w-[230px] lg:mb-7 items-center justify-center ${
                      isVerified
                        ? ""
                        : "opacity-30  pointer-events-none cursor-not-allowed"
                    }`}
                   
                  >
                    <h3 className="p-2 text-sm flex items-center justify-center rounded-full w-[150px] bg-black text-white transition-all border transform hover:translate-x-12">
                      Submit
                    </h3>
                    <h3 className="p-2 flex items-center rounded-full w-[35px] bg-black text-white border fill-current">
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
