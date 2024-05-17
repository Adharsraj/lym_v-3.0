"use client"
import React, { useState, useEffect, useRef, createRef } from "react";
import { TweenMax as TM } from "gsap/all";
import { InView } from "react-intersection-observer";
import ContentWrapper from "../../ContentWrapper/ContentWrapper";
import $ from "jquery";
import { isMobile, isTablet } from "react-device-detect";
import { useSwipeable } from 'react-swipeable';

const slides = [
  {
    crossText: ["Instead of", "presenting", "dull design", "proposals."],
    mainText: ["Great", "minimum", "viable", "products."],
    leftText: {
      part1: "Our company specializes",
      highlited: "in creating exceptional",
      part2:
        "minimum viable products that can be showcased to potential investors, distributed to partners, tested with genuine customers, and serve as a concrete demonstration of the concept for your fully functional product development.",
    },
    textItems: [
      "Testing Business Concepts. ",
      "Verifying Market Demand.",
      "Developing a Monetization Strategy.",
      "Cost-Efficiency.",
    ],
  },
  {
    crossText: ["Instead of", "designing", "without", "purpose."],
    mainText: ["Mindfully", "structured", "design", "systems."],
    leftText: {
      part1: "Our approach",
      highlited: "involves developing",
      part2:
        "design systems that utilize custom premade UI components. This enables teams to consistently utilize the same elements, reducing the need to reinvent the wheel and avoiding inconsistencies.",
    },
    textItems: [
      "Scalability",
      "Maintainability",
      "Productivity",
      "Consistency",
    ],
  },
  {
    crossText: ["Instead of", "haphazardly", "designed", "screens."],
    mainText: ["Beautiful", "interactive", "design", "prototypes."],
    leftText: {
      part1: "Our clickable",
      highlited: "design prototypes enable",
      part2:
        "you to swiftly test your ideas, address crucial questions, and establish a strong foundation for your product before embarking on expensive implementation.",
    },
    textItems: [
      "Estimation of production costs.",
      "Select the right framework.",
      "Receive feedback from your users.",
      "Test your ideas quickly.",
    ],
  },
];

const DataSlide1 = (props) => {
  const textSliderContainerContainer = useRef(null);
  const sliderButton = useRef(null);
  const linesContainer = useRef(null);

  const lineHeight = !isMobile || isTablet ? 90 : 60;

  const [lines, setLines] = useState([]);
  const [playedOnce, setPlayedOnce] = useState(false);
  const [sliderLock, setSliderLock] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [arrowDirection, setArrowDirection] = useState("LEFT");

  const slidesRef = useRef([...Array(slides.length)].map(() => createRef()));

  const crossElem1 = useRef([...Array(4)].map(() => createRef()));
  const crossElem2 = useRef([...Array(4)].map(() => createRef()));
  const crossElem3 = useRef([...Array(4)].map(() => createRef()));
  const crossElem4 = useRef([...Array(4)].map(() => createRef()));

  const crossLine1 = useRef([...Array(4)].map(() => createRef()));
  const crossLine2 = useRef([...Array(4)].map(() => createRef()));
  const crossLine3 = useRef([...Array(4)].map(() => createRef()));
  const crossLine4 = useRef([...Array(4)].map(() => createRef()));

  const mainTextLine1 = useRef([...Array(4)].map(() => createRef()));
  const mainTextLine2 = useRef([...Array(4)].map(() => createRef()));
  const mainTextLine3 = useRef([...Array(4)].map(() => createRef()));
  const mainTextLine4 = useRef([...Array(4)].map(() => createRef()));

  const config = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: true, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: {
      passive: true,
    }, // options for touch listeners (*See Details*)
  };
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => switchSlideViaSwipe("RIGHT"),
    onSwipedRight: (eventData) => switchSlideViaSwipe("LEFT"),
    ...config,
  });

  const refPassthrough = (el) => {
    // call useSwipeable ref prop with el
    handlers.ref(el);

    // set myRef el so you can access it yourself
    textSliderContainerContainer.current = el;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setTimeout(() => {
      fillLines();
    }, 500);
  }, []);

//automatically changes slider after 6 second
 useEffect(() => {
   const autoSwipe = setTimeout(() => {
     switchSlideViaSwipe("RIGHT");
   }, 6000);

   return () => clearTimeout(autoSwipe);
 }, [currentStep, switchSlideViaSwipe]);

  function handleResize() {
    fillLines();
  }

  function onMouseMove(e) {
    let left = e.nativeEvent.layerX;
    let top = e.nativeEvent.layerY;
    if (sliderButton && sliderButton.current) {
      TM.set(sliderButton.current, {
        opacity: 1,
      });
      sliderButton.current.style.left = left - 35 + "px";
      sliderButton.current.style.top = top - 35 + "px";
    }
    if (left > $(window).width() / 2) {
      setArrowDirection("RIGHT");
    } else {
      setArrowDirection("LEFT");
    }
  }

  function hideButton(e) {
    TM.to(sliderButton.current, 0.5, {
      opacity: 0,
    });
  }

  function showButton(e) {
    TM.to(sliderButton.current, 0.5, {
      opacity: 1,
    });
  }

  function handleViewPortVisibility(inView) {
    if (inView && currentStep == 0 && !playedOnce) {
      animateCrossLines(currentStep);
      setPlayedOnce(true);
    }
  }

  function animateCrossLines(index) {
    crossLinesAnimation(crossElem1.current[index].current, 0.4, 0);
    crossLinesAnimation(crossElem2.current[index].current, 0.4, 0.1);
    crossLinesAnimation(crossElem3.current[index].current, 0.4, 0.2);
    crossLinesAnimation(crossElem4.current[index].current, 0.4, 0.3);

    setTimeout(() => {
      crossLineFadeOut(crossLine1.current[index].current, 0.6, 0);
      crossLineFadeOut(crossLine2.current[index].current, 0.6, 0.05);
      crossLineFadeOut(crossLine3.current[index].current, 0.6, 0.1);
      crossLineFadeOut(crossLine4.current[index].current, 0.6, 0.15);
    }, 1000);

    setTimeout(() => {
      mainTextFadeIn(mainTextLine1.current[index].current, 0.7, 0);
      mainTextFadeIn(mainTextLine2.current[index].current, 0.7, 0.05);
      mainTextFadeIn(mainTextLine3.current[index].current, 0.7, 0.1);
      mainTextFadeIn(mainTextLine4.current[index].current, 0.7, 0.15);
      setSliderLock(false);
    }, 1100);
  }

  function crossLinesAnimation(element, time = 0.4, delay = 0) {
    TM.fromTo(
      element,
      time,
      {
        width: "30%",
      },
      {
        width: "100%",
        delay: delay,
        ease: "PlatformEasing",
        overwrite: true,
      }
    );
  }

  function crossLineFadeOut(element, time = 0.2, delay = 0) {
    TM.to(element, time / 4, {
      opacity: 0,
      delay: delay,
      ease: "PlatformEasing",
    });

    TM.to(element, time, {
      translateX: "-10%",
      delay: delay,
      ease: "PlatformEasing",
    });
  }

  function mainTextFadeIn(element, time = 0.2, delay = 0) {
    TM.fromTo(
      element,
      time,
      {
        opacity: 0,
        translateX: "10%",
      },
      {
        opacity: 1,
        translateX: "0%",
        delay: delay,
        ease: "PlatformEasing",
        overwrite: true,
      }
    );
  }

  function animatePreviousSlide(currentIndex, nextIndex) {
    resetElementsForNextSlide(nextIndex);
    TM.to(slidesRef.current[currentIndex].current, 0.8 / 4, {
      opacity: 0,
      delay: 0,
      ease: "PlatformEasing",
    });
    TM.to(slidesRef.current[currentIndex].current, 0.8, {
      translateX: "10%",
      delay: 0,
      ease: "PlatformEasing",
      onComplete: function () {
        TM.set(slidesRef.current[currentIndex].current, {
          display: "none",
        });
      },
    });

    TM.set(slidesRef.current[nextIndex].current, {
      display: "flex",
    });
    TM.fromTo(
      slidesRef.current[nextIndex].current,
      0.7,
      {
        opacity: 0,
        translateX: "-10%",
      },
      {
        opacity: 1,
        translateX: "0%",
        delay: 0.1,
        ease: "PlatformEasing",
        overwrite: true,
        onComplete: function () {
          animateCrossLines(nextIndex);
        },
      }
    );
  }

  function animateNextSlide(currentIndex, nextIndex) {
    resetElementsForNextSlide(nextIndex);
    TM.to(slidesRef.current[currentIndex].current, 0.8 / 4, {
      opacity: 0,
      delay: 0,
      ease: "PlatformEasing",
    });
    TM.to(slidesRef.current[currentIndex].current, 0.8, {
      translateX: "-10%",
      delay: 0,
      ease: "PlatformEasing",
      onComplete: function () {
        TM.set(slidesRef.current[currentIndex].current, {
          display: "none",
        });
      },
    });

    TM.set(slidesRef.current[nextIndex].current, {
      display: "flex",
    });
    TM.fromTo(
      slidesRef.current[nextIndex].current,
      0.7,
      {
        opacity: 0,
        translateX: "10%",
      },
      {
        opacity: 1,
        translateX: "0%",
        delay: 0.1,
        ease: "PlatformEasing",
        overwrite: true,
        onComplete: function () {
          animateCrossLines(nextIndex);
        },
      }
    );
  }

  function resetElementsForNextSlide(nextIndex) {
    TM.set(
      [
        crossElem1.current[nextIndex].current,
        crossElem2.current[nextIndex].current,
        crossElem3.current[nextIndex].current,
        crossElem4.current[nextIndex].current,
      ],
      {
        width: "0%",
      }
    );
    TM.set(
      [
        crossLine1.current[nextIndex].current,
        crossLine2.current[nextIndex].current,
        crossLine3.current[nextIndex].current,
        crossLine4.current[nextIndex].current,
      ],
      {
        opacity: "1",
        translateX: "0px",
      }
    );
    TM.set(
      [
        mainTextLine1.current[nextIndex].current,
        mainTextLine2.current[nextIndex].current,
        mainTextLine3.current[nextIndex].current,
        mainTextLine4.current[nextIndex].current,
      ],
      {
        opacity: "0",
        translateX: "0px",
      }
    );
  }

  function switchSlide() {
    if (!sliderLock) {
      setSliderLock(true);
      if (arrowDirection == "RIGHT") {
        nextSlide();
      } else {
        previousSlide();
      }
    }
  }

  function switchSlideViaSwipe(direction) {
    if (!sliderLock) {
      setSliderLock(true);
      if (direction == "RIGHT") {
        nextSlide();
      } else {
        previousSlide();
      }
    }
  }

  function nextSlide() {
    if (currentStep < 2) {
      animateNextSlide(currentStep, currentStep + 1);
      setCurrentStep(currentStep + 1);
    } else {
      animateNextSlide(currentStep, 0);
      setCurrentStep(0);
    }
  }

  function previousSlide() {
    if (currentStep > 0) {
      animatePreviousSlide(currentStep, currentStep - 1);
      setCurrentStep(currentStep - 1);
    } else {
      animatePreviousSlide(currentStep, 2);
      setCurrentStep(2);
    }
  }

  function fillLines() {
    if (!textSliderContainerContainer.current) {
      return;
    }
    var numberOfLines =
      textSliderContainerContainer.current.clientHeight / lineHeight - 1;
    linesContainer.current.style.gap = `${lineHeight}+px`;

    var arrayOfLines = [];
    for (let index = 0; index < numberOfLines; index++) {
      arrayOfLines.push(
        <div
          key={index}
          className="underlineTextContainer_linesCont_line"
          style={{
            marginTop: `${lineHeight - 1}px`,
          }}
        >
          {" "}
        </div>
      );
    }
    setLines(arrayOfLines);
  }

  return (
    <div className=" overflow-hidden" data-scroll-section>
      <InView
        as="div"
        threshold={!isMobile ? "0.7" : "0.3"}
        onChange={(inView) => handleViewPortVisibility(inView)}
      >
        <div
          className="textSliderContainer some-element"
          onClick={switchSlide}
          {...handlers}
          ref={refPassthrough}
          onMouseMove={(e) => !isMobile && onMouseMove(e)}
          onMouseLeave={(e) => !isMobile && hideButton(e)}
          onMouseEnter={(e) => !isMobile && showButton(e)}
        >
          <ContentWrapper>
            <div className="textSliderContainer_slider some-element">
              {" "}
              {slides.map((slide, index) => {
                return (
                  <div
                    key={index}
                    className="textSliderContainer_slider_slide"
                    ref={slidesRef.current[index]}
                  >
                    <div className="textSliderContainer_slider_slide_colLeft">
                      <div className="textSliderContainer_slider_slide_colLeft_crossedText">
                        <h2>
                          <div
                            className="crossText"
                            ref={crossLine1.current[index]}
                          >
                            {" "}
                            {slide.crossText[0]}{" "}
                            <span
                              ref={crossElem1.current[index]}
                              className="line"
                            >
                              {" "}
                            </span>{" "}
                          </div>{" "}
                          <div
                            className="crossText"
                            ref={crossLine2.current[index]}
                          >
                            {" "}
                            {slide.crossText[1]}{" "}
                            <span
                              ref={crossElem2.current[index]}
                              className="line"
                            >
                              {" "}
                            </span>{" "}
                          </div>{" "}
                          <div
                            className="crossText"
                            ref={crossLine3.current[index]}
                          >
                            {" "}
                            {slide.crossText[2]}{" "}
                            <span
                              ref={crossElem3.current[index]}
                              className="line"
                            >
                              {" "}
                            </span>{" "}
                          </div>{" "}
                          <div
                            className="crossText"
                            ref={crossLine4.current[index]}
                          >
                            {" "}
                            {slide.crossText[3]}{" "}
                            <span
                              ref={crossElem4.current[index]}
                              className="line"
                            >
                              {" "}
                            </span>{" "}
                          </div>{" "}
                        </h2>{" "}
                      </div>{" "}
                      <div className="textSliderContainer_slider_slide_colLeft_textCont">
                        <h2>
                          <span ref={mainTextLine1.current[index]}>
                            {" "}
                            {slide.mainText[0]}{" "}
                          </span>{" "}
                          <span ref={mainTextLine2.current[index]}>
                            {" "}
                            {slide.mainText[1]}{" "}
                          </span>{" "}
                          <span
                            className="-mt-1 pb-3 "
                            ref={mainTextLine3.current[index]}
                          >
                            {" "}
                            {slide.mainText[2]}{" "}
                          </span>{" "}
                          <span
                            className=" -mt-3 pb-3"
                            ref={mainTextLine4.current[index]}
                          >
                            {" "}
                            {slide.mainText[3]}{" "}
                          </span>{" "}
                        </h2>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="textSliderContainer_slider_slide_colRight">
                      <div className="textSliderContainer_slider_slide_colRight_textCont">
                        <p className="textSliderContainer_slider_slide_colRight_textCont_text">
                          {" "}
                          {slide.leftText.part1}{" "}
                          <strong> {slide.leftText.highlited} </strong>{" "}
                          {slide.leftText.part2}{" "}
                        </p>{" "}
                      </div>{" "}
                      <ul className="textSliderContainer_slider_slide_colRight_list">
                        {" "}
                        {slide.textItems.map((item, index) => (
                          <li key={index}> {item} </li>
                        ))}{" "}
                      </ul>{" "}
                    </div>{" "}
                  </div>
                );
              })}{" "}
              <div className="textSliderContainer_slider_sliderIndicatiors">
                <div
                  className={
                    currentStep == 0
                      ? "textSliderContainer_slider_sliderIndicatiors_indicator-active"
                      : "textSliderContainer_slider_sliderIndicatiors_indicator"
                  }
                >
                  {" "}
                </div>{" "}
                <div
                  className={
                    currentStep == 1
                      ? "textSliderContainer_slider_sliderIndicatiors_indicator-active"
                      : "textSliderContainer_slider_sliderIndicatiors_indicator"
                  }
                >
                  {" "}
                </div>{" "}
                <div
                  className={
                    currentStep == 2
                      ? "textSliderContainer_slider_sliderIndicatiors_indicator-active"
                      : "textSliderContainer_slider_sliderIndicatiors_indicator"
                  }
                >
                  {" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </ContentWrapper>{" "}
          <div ref={linesContainer} className="textSliderContainer_linesCont">
            {" "}
            {lines}{" "}
          </div>{" "}
          <div className="textSliderContainer_sliderButton" ref={sliderButton}>
            {/* <img
              src={arrowDirection == "RIGHT" ? rightArrow : leftArrow}
              alt={"icon of arrow shape directing to right"}
            />{" "} */}
          </div>{" "}
        </div>{" "}
      </InView>{" "}
    </div>
  );
};

export default DataSlide1;
