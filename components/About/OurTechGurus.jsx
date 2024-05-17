import React from "react";


const OurTechGurus = () => {
  return (
    <div className="max-w-[1640px]  mx-auto p-4 bg-black text-white  font-roboto ">
      <div className="text-center mt-16">
        <span className="text-gray-400 md:text-lg ">Our Tech Gurus</span>
        <h1 className="text-2xl mt-8 mb-6 md:text-6xl ">Leadership team</h1>
        <h3 className="w-[290px] md:w-[500px] lg:w-[700px] text-lg  mx-auto">
          Stead was built on the desire to make great things possible, through
          the guidance of expert leaders. By fostering a culture of innovation,
          collaboration & client centricity, our leadership team ensure that
          Stead continue to deliver exceptional software solutions
        </h3>
      </div>

      <div className="grid font-dm md:grid-cols-2 lg:grid-cols-4 mb-10">
        <div className="relative">
          <img
            className="h-[300px] w-[150px] mx-auto mb-10 mt-12"
            src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187573/assets/Images/IMAGE_svg4lz.png"
            alt="chiefarchitect"
          />
          <div className="absolute bottom-16 left-8 bg-transparent text-white p-2 ">
            <span className="text-lg"> Shinas</span>
            <br />
            Chief Architect
          </div>
        </div>
        <div className="relative">
          <img
            className="h-[300px] w-[150px] md:mt-12 mx-auto mb-10"
            src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187559/assets/Images/IMAGE_3_kgsewq.png"
            alt="chiefarchitect"
          />
          <div className="absolute bottom-16 left-8 bg-transparent text-white p-2 ">
            Shabeer
            <br />
            Chief Architect
          </div>
        </div>

        <div className="relative">
          <img
            className="h-[300px] w-[150px] mx-auto mb-10 lg:mt-12"
            src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187562/assets/Images/IMAGE_1_smlfke.png"
            alt="chiefarchitect"
          />
          <div className="absolute bottom-16 left-8 bg-transparent text-white p-2">
            Billal
            <br />
            Chief Architect
          </div>
        </div>

        <div className="relative">
          <img
            className="h-[300px] w-[150px] mx-auto mb-10 lg:mt-12"
            src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187561/assets/Images/IMAGE_2_gz969p.png"
            alt="chiefarchitect"
          />
          <div className="absolute bottom-16 left-8 bg-transparent text-white p-2">
            Bibin
            <br />
            Chief Architect
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTechGurus;
