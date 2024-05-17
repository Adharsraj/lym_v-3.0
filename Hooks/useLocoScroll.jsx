"use client"
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import "../Components/Home/locomotive-scroll.css";

export default function useLocoScroll() {
  useEffect(() => {
    const scrollElement = document.querySelector("#scroll-container");
    const locoScroll = new LocomotiveScroll({
      el: scrollElement,
      smooth: true,
    });
  }, []);
}
