"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let section = document.querySelector(
      ".service-detail-process > .scrollContainer > .container"
    );
    let cardContainer = document.querySelector(".process-cards");
    let lineProgress = document.querySelector(".progress-line");
    const mm = gsap.matchMedia();
    let tl = null;
    mm.add("(min-width:768px)", () => {
      const width = cardContainer.scrollWidth - cardContainer.offsetWidth;
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".service-detail-process > .scrollContainer > .container",
          start: "center center",
          end: () => "+=" + width * 1.7,
          scrub: true,
          pin: true,
          //   markers:true,
        },
      });
      tl.fromTo(cardContainer, { x: 0 }, { x: -width, ease: "Power1.easeOut" });
      tl.fromTo(lineProgress, { xPercent: -100 }, { xPercent: 0 }, 0);

      return () => tl.kill();
    });

    window.addEventListener("onload", function () {
      ScrollTrigger.refresh();
    });
  });

  return (
    <section class="bg-lightgrey service-detail-process">
      <div class="scrollContainer">
        <div class="container">
          <h1 className="text-3xl md:text-5xl font-bold  md:leading-[60px] pb-10">
            Proven-Process. <br /> Strategy-led Approach.
          </h1>
          <div class="process-cards">
            <div class="process-card">
              <div class="image-wrap">
                <img
                  src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/research.svg"
                  alt
                  width="79"
                  height="130"
                />
              </div>
              <h3>Research</h3>
              <p>
                Initiates the project through user-centric ideation, research
                and analysis.
              </p>
            </div>
            <div class="process-card">
              <div class="image-wrap">
                <img
                  src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/design.svg"
                  alt
                  width="96"
                  height="125"
                />
              </div>
              <h3>Design</h3>
              <p>Involves the creation of prototypes for UX and UI design.</p>
            </div>
            <div class="process-card">
              <div class="image-wrap">
                <img
                  src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/development.svg"
                  alt
                  width="108"
                  height="111"
                />
              </div>
              <h3>Development</h3>
              <p>
                Gears up work with varied frameworks, libraries and programming
                languages.
              </p>
            </div>
            <div class="process-card">
              <div class="image-wrap">
                <img
                  src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/testing2.svg"
                  alt
                  width="108"
                  height="105"
                />
              </div>
              <h3>Testing</h3>
              <p>
                Initiates the most crucial process of checking and testing the
                final products.
              </p>
            </div>
            <div class="process-card">
              <div class="image-wrap">
                <img
                  src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/launch.svg"
                  alt
                  width="101"
                  height="100"
                />
              </div>
              <h3>Launch</h3>
              <p>
                Aids in presenting the final products to the market and tracking
                user interaction.
              </p>
            </div>
            <div class="process-card">
              <div class="image-wrap">
                <img
                  src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/svg+/support2.svg"
                  alt
                  width="91"
                  height="100"
                />
              </div>
              <h3>Support</h3>
              <p>
                Provides consistent support to ensure quality and performance
                post-implementation.
              </p>
            </div>
          </div>
          <div class="progress">
            <div class="progress-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
