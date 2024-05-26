import React from "react";
import { OurTopClients } from "@/assets/Data/data";

const Marquee = () => {
  return (
    <div className="marquee-container" data-scroll-section>
      <div className="marquee-content">
        {OurTopClients.concat(OurTopClients).map((client, index) => (
          <img
            key={index}
            className="client-logo"
            src={client.img}
            alt={`Client ${index % OurTopClients.length}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
