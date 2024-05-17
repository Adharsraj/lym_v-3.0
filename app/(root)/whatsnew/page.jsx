import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 80,
  strokeWidth: 6,
};

const circleMarginHorizontal = "20px"; 

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time" style={{ color: 'white' }}>{time}</div>
      <div style={{ color: 'white' }}>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

function WhatsNew() {
    const customEndTime = Date.parse("2023-12-31T23:59:59") / 1000; 

    const stratTime = Date.now() / 1000;
    const endTime = customEndTime;
  
    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    const sendEmail = () => {
        window.location.href = 'mailto:info@lymdata.com';
      };

  return (
    <div className="main-container max-h-screen">
      <div className='flex justify-between'>
        <div className="md:ml-9 ml-3 mt-0">
          <img
            id="logo"
            className="lg:w-[106px] lg:h-[80px] md:w-16 w-20 logo"
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
            alt="companylogo"
          />
        </div>
        {/* <div className="App">
          <div style={{ marginRight: circleMarginHorizontal }}>
            <CountdownCircleTimer
              {...timerProps}
              colors="#7E2E84"
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime, color }) => (
                <div style={{ color }}>
                  {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                </div>
              )}
            </CountdownCircleTimer>
          </div>
          <div style={{ marginRight: circleMarginHorizontal }}>
            <CountdownCircleTimer
              {...timerProps}
              colors="#D14081"
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
              })}
            >
              {({ elapsedTime, color }) => (
                <div style={{ color }}>
                  {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                </div>
              )}
            </CountdownCircleTimer>
          </div>
          <div style={{ marginRight: circleMarginHorizontal }}>
            <CountdownCircleTimer
              {...timerProps}
              colors="#EF798A"
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
              })}
            >
              {({ elapsedTime, color }) => (
                <div style={{ color }}>
                  {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                </div>
              )}
            </CountdownCircleTimer>
          </div>
          <div>
            <CountdownCircleTimer
              {...timerProps}
              colors="#218380"
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > 0
              })}
            >
              {({ elapsedTime, color }) => (
                <div style={{ color }}>
                  {renderTime("seconds", getTimeSeconds(elapsedTime))}
                </div>
              )}
            </CountdownCircleTimer>
          </div>
        </div> */}
      </div>
      <div id="page-content" className="page-content">
        <main role="main" aria-label="Page Content">
          <section className="pocket-block">
            <div className="pocket-copy container">
              <h2 className="pocket-copy__heading text-heading text-heading--md">
                <span className="pocket-copy__heading--dimmed">Looks small.</span>
                <br />
                Thinks big.
              </h2>
              <div>
                <a
                  href="mailto:info@lymdata.com"
                  className="pro-btn btn-secondary btn-pill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 inline mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M21 20H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm-10-2h8V7H11zm-2-9V5h6v4z"
                    />
                  </svg>
                  Notify Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="pro-icon pro-icon--cta-right"
                  >
                    <path
                      d="M17.53,16,6.77,5.19A3.08,3.08,0,0,1,5.9,3,3.12,3.12,0,0,1,6.79.89a3,3,0,0,1,4.29,0L26.13,16l-4.3,4.32L11.08,31.09a3,3,0,0,1-1,.67A3,3,0,0,1,8.92,32a3.13,3.13,0,0,1-1.17-.23A3,3,0,0,1,6.1,30.11a3.06,3.06,0,0,1,0-2.35,3.12,3.12,0,0,1,.66-1Z"
                    />
                  </svg>
                </a>
              </div>
              
            </div>
            <div className="iphone-single iphone-single--hero">
              <div className="iphone-single__container">
                <div aria-hidden="true" className="iphone-single__background-elements">
                  <div className="pocket-whats-new__hero-bg">
                  </div>
                </div>
                <div className="iphone-single__content">
                  <div className="iphone">
                    <div className="iphone__perspective-wrapper">
                      <span className="iphone__binder">
                        <div className="credit-media">
                          <img
                            src="https://procreate-assets-cdn.procreate.art/img/hero_en.b1d8589.jpg"
                            alt
                            width={267}
                            height={579}
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default WhatsNew;
