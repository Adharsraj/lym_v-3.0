"use effect"
import React, { useEffect } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import ReplaceEffect from './Gsap';

const LocomotiveScroll = () => {

  useEffect(() => {
    let scroll = new locomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // Use the correct selector
      smooth: true,
    });

    new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))
  }, []);

  const h4Style = {
    margin: 0, // Set margin to 0 to remove the margin around the h4 element
  };

  return (
    <div className="data-scroll-container" data-scroll-container>
      <div style={{ backgroundColor: "red",height:'100vh' }} >
        <h4 style={h4Style}>page1</h4>
        <ReplaceEffect/>

      </div>
      <div style={{ backgroundColor: "green",height:'100vh' }}>
      <h4 style={h4Style}>page2</h4>
      </div>
      <div style={{ backgroundColor: "blue",height:'100vh' }} >
      <h4 style={h4Style}>page3</h4>
      </div>
    </div>
  );
};

export default LocomotiveScroll;
