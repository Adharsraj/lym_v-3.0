"use client"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Link from 'next/link';
import { worksData } from "../../assets/Data/data";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Brompton from "./WorksFeatured/Brompton";
import Montblanc from "./WorksFeatured/Montblanc";
import AlHubDemo from "./WorksFeatured/AlHubDemo";

const WorkDetailed = () => {
  const { title } = useParams();
  const selectedWork = worksData.find((o) => o.title === title);
  console.log(selectedWork.title);
  console.log(title);

  const [colors, setColours] = useState("white");
  const [tcolors, settColours] = useState("black");

  useEffect(() => {
    if (selectedWork.id === 3) {
      setColours("black");
      settColours("white");
    }
  }, [colors]);

  return (
    <>
      <Navbar />
      {selectedWork && selectedWork.title === "Al-Hub" && <AlHubDemo />}
      {selectedWork && selectedWork.title === "Brompton" && <Brompton />}
      {selectedWork && selectedWork.title === "Montblanc" && <Montblanc />}
      <div style={{ background: colors, color: tcolors }}>
        <Footer />
      </div>
    </>
  );
};

export default WorkDetailed;
