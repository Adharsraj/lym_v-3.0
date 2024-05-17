"use client"
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const ReplaceEffect = () => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".hidden-p");
    const headers = document.querySelectorAll(".hidden-h4");
    const line = document.querySelectorAll(".line");

    gsap.to(line, {
      duration: 2,
      width: 160,
      opacity: 1,
      stagger: 0.2,
    });

    setTimeout(() => {
      gsap.to(paragraphs, {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        onComplete: function () {
          line.forEach((paragraph) => {
            paragraph.style.display = "none";
          });
          paragraphs.forEach((paragraph) => {
            paragraph.style.display = "none";
          });
          gsap.fromTo(
            headers,
            { opacity: 0, x: 0, display: "none" },
            {
              opacity: 1,
              x: 20,
              display: "block",
              duration: 1,
              stagger: 0.2,
            }
          );
        },
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h4 className="hidden-p">Paragraph 1</h4>
      <div className="line"></div>

      <h4 className="hidden-p">Paragraph 2</h4>
      <div className="line"></div>

      <h4 className="hidden-p">Paragraph 3</h4>
      <div className="line"></div>

      <h4 className="hidden-p">Paragraph 4</h4>
      <div className="line"></div>

      <h4 className="hidden-h4">Header 1</h4>
      <h4 className="hidden-h4">Header 2</h4>
      <h4 className="hidden-h4">Header 3</h4>
      <h4 className="hidden-h4">Header 4</h4>
    </div>
  );
};

export default ReplaceEffect;
