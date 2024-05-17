"use client"
import React, { useState, useEffect } from 'react';

const TextLoading = () => {
  const [loadingText, setLoadingText] = useState('LOADING...');
  const [cycleCount, setCycleCount] = useState(5);
  const [cycleCurrent, setCycleCurrent] = useState(0);
  const [chars] = useState(
    "10".split("")
  );
  const [letterCount, setLetterCount] = useState(0);
  const [letterCurrent, setLetterCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (letterCurrent < loadingText.length) {
        const updatedText = loadingText.split('');
        updatedText[letterCurrent] = chars[Math.floor(Math.random() * chars.length)];
        setLoadingText(updatedText.join(''));
        setLetterCurrent(letterCurrent + 1);
      } else if (cycleCurrent < cycleCount) {
        setCycleCurrent(cycleCurrent + 1);
      } else {
        clearInterval(intervalId); // Clear the interval to stop the animation
        setTimeout(() => {
          setLetterCurrent(0);
          setCycleCurrent(0);
          setLoadingText('LOADING...');
        }, 2000); // Increase the timeout duration to 2000 milliseconds (2 seconds)
      }
    }, 100);
  
    return () => clearInterval(intervalId);
  }, [letterCurrent, cycleCurrent, cycleCount, chars, loadingText]);
  

  return (
    <div className="loader_body">
      <div className="loader">
        <div id='word' className="word">{loadingText}</div>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default TextLoading;

