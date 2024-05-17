"use client"
import React, { useEffect,useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const DhnnScroller = ({ showImage }) => {
    useGSAP(()=>{
        const vh = (value) => `${value * window.innerHeight / 100}px`;

        gsap.to('.hider', {
          opacity: 0, // Start with opacity 0
          ease: 'power2.inOut', // Easing function for a smoother effect

          scrollTrigger: {
            trigger: ".img4",
            start: "top 0px",
            end: `+=${vh(100)}`, 
            scrub: true,
            
          }
      });

        gsap.to('.img1', {
          y: vh(230),
          scaleY: 0,
          scaleX: 0.5,
          opacity: 0,
      
          scrollTrigger: {
            trigger: ".img2",
            start: "top 0px",
            end: `+=${vh(100)}`, 
            scrub: true,
            
          }
        });
      
      
      gsap.to('.img1count', {
        y: vh(210),
        scrollTrigger: {
          trigger:".img2",
          start: "top 0px",
          end: `+=${vh(100)}`,
          scrub: true,
          
        }
      });
      
      
      
      
      gsap.to('.img2',{
        y: vh(185),
        scaleY:0,
        scaleX:0.2,
        opacity:0,
        x:500,
        scrollTrigger: {
        trigger:".img1count",
        start:"top 0px",
        end: `+=${vh(130)}`,
        scrub: true,
        
        }
      })
      
      gsap.to('.img2count',{
        y: vh(163),
        scrollTrigger: {
        trigger:".img2",
        start:"top 0px",
        end: `+=${vh(130)}`,
        scrub: true,
        
        }
      })
      
      
      gsap.to('.img3',{
        y: vh(128),
        scaleY:0,
        scaleX:1,
        opacity:0,
        x:-50,
      
        scrollTrigger: {
        trigger:".img2",
        start:"top 0px",
        end: `+=${vh(130)}`,
        scrub: true,
        
        }
      })
      
      gsap.to('.img3count',{
        y: vh(108),
        x:-50,
      
        scrollTrigger: {
        trigger:".img2",
        start:"top 0px",
        end: `+=${vh(130)}`,
        scrub: true,
        
        }
      })
      
      
      gsap.to('.img4',{
        y: vh(100),
        scaleY:0,
        scaleX:1,
        opacity:0,
        x:-50,
      
        scrollTrigger: {
        trigger:".img3",
        start:"top 0px",
        end: `+=${vh(70)}`,
        scrub: true,
        
        }
      })
      
      gsap.to('.img4count',{
        y: vh(62),
        x:-50,
      
        scrollTrigger: {
          trigger:".img3",
          start:"top 0px",
          end: `+=${vh(70)}`,
          scrub: true,
        
        }
      })
      
      gsap.to('.img5',{
        y: vh(100),
        scaleY:0,
        scaleX:1,
        opacity:0,
        x:-50,
      
        scrollTrigger: {
        trigger:".im",
        start:"top 0px",
        end: `+=${vh(80)}`,
        scrub: true,
        
        }
      })
      
      gsap.to('.img5count',{
        y: vh(60),
        x:-50,
      
        scrollTrigger: {
          trigger:".im",
          start:"top 0px",
          end: `+=${vh(80)}`,
        scrub: true,
        
        }
      })
      
      
          
          
          
    },[])


    /////

    const scrollToTarget = () => {
      const target =  document.querySelector('#howethink');
      scroll.current.scrollTo(target);
    };
  
    useEffect(() => {
      var tl = gsap.timeline();
  
      tl.from("p", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
      });
  
      tl.from("h3", {
        y: 100,
        ease: "power4.inOut",
  
        stagger: 1.5,
      });
  
      gsap.fromTo(
        "#box",
        {
          x: 270,
          y: 50,
          rotate: 0,
        },
        {
          x: 270,
          y: 80,
          rotate: 0,
          delay: 1,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
        }
      );
  
      gsap.fromTo(
        "#box1",
        {
          x: 270,
          y: 50,
          rotate: 0,
        },
        {
          x: 270,
          y: 80,
          rotate: 0,
          duration: 1.4,
          repeat: -1,
          yoyo: true,
        }
      );
      gsap.fromTo(
        "#box2",
        {
          x: 270,
          y: 50,
          rotate: 0,
        },
        {
          x: 270,
          y: 80,
          rotate: 0,
          duration: 1.4,
          repeat: -1,
          yoyo: true,
        }
      );
  
      const box = document.getElementById("box");
      const box1 = document.getElementById("box1");
      const box2 = document.getElementById("box2");
  
      gsap.from("h6 div", 1.5, {
        yPercent: 100,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });
  
      gsap.to("h6", 1.5, {
        clipPath: "polygon(0 0,100% 0,100% 100%,0% 100%)",
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });
      if (showImage) {
        setTimeout(() => {
          setShowImage(true);
        }, 1000);
      }
  
      setTimeout(() => {
        setDefault(true);
      }, 1000);
    }, [showImage]);
  
    const [showWowText, setShowWowText] = useState(false);
  
    useEffect(() => {
      const checkScreenHeight = () => {
        const screenHeight = window.innerHeight;
  
        // Check if the screen height is greater than 1000
        if (screenHeight > 1000) {
          setShowWowText(true);
        } else {
          setShowWowText(false);
        }
      };
  
      // Check the screen height when the component mounts
      checkScreenHeight();
  
      // Add an event listener to check when the window is resized
      window.addEventListener('resize', checkScreenHeight);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', checkScreenHeight);
      };
    }, []);




  return (


    <>
     {/* <div className='here'>
                <h1> im here</h1>
               </div> */}
<div className='fixed headerz top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-400 text-gray-300'>
        <div className="max-w-[1640px] mx-auto overflow-hidden">
          <div className="">
            <div className=" hider">
            {showWowText ?(
                  <section className="max-w-[1640px]">
               
               <div className=" flex items-center text-center z-0">
                  <div className="  flex flex-col md:justify-center font-aeonic uppercase text-[134px] mx-auto">
                    <div className="col  ">
                      <h6 className="md:text-left whitespace-nowrap   xl:w-full xl:text-[134px] lg:text-[100px]  md:text-7xl  text-4xl md:w-full  w-[300px] mx-auto md:ml-0 ">
                        <div>Data-driven</div>
                      </h6>
                      <h6 className="md:text-left text-center whitespace-nowrap  xl:w-full xl:text-[134px] lg:text-[100px] md:text-7xl text-4xl md:w-full  w-[300px]  md:ml-0">
                        <div>Solutions</div>
                      </h6>
                      <h6 className="md:text-left text-center whitespace-nowrap   xl:w-[1000px] xl:text-[134px] lg:text-[80px] md:text-6xl text-4xl md:w-full  w-[300px]  md:ml-0">
                        <div> Shaping your</div>
                      </h6>
                      <h6 className="md:text-left text-center xl:w-full  whitespace-nowrap  xl:text-[134px]   lg:text-[83px] w-[300px]   mx-auto md:text-5xl text-4xl  md:w-full   md:ml-0">
                        <div>digital Success</div>
                      </h6>
                    </div>
                    {/* <div className="col">
                      <h6>
                        <div>
                          <span>click</span>anywhere to continue
                        </div>
                      </h6>
                    </div> */}
                  </div>
                </div>
                  
                                </section>
                ):
              <section className="max-w-[1640px]  ">
               
<div className=" hider  flex items-center text-center z-0 md:min-h-screen  mx-auto ">
  <div className=" flex  flex-col md:justify-center font-aeonic uppercase   mx-auto">
    <div className=" driven">
      <h5 className="md:text-left   xl:w-full whitespace-nowrap xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full mx-auto md:ml-0">
        <div><span className=''>Data-</span><span className=''>driven</span></div>
      </h5>
      <h5 className="md:text-left text-center whitespace-nowrap xl:w-full xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full md:ml-0">
        <div>Solutions</div>
      </h5>
      <h5 className="md:text-left whitespace-nowrap text-center  xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full md:ml-0">
        <div> Shaping your</div>
      </h5>
      <h5 className="md:text-left text-center whitespace-nowrap xl:w-full xl:text-[16vh] lg:text-[8vh] w-full mx-auto md:text-7xl text-4xl md:w-full md:ml-0">
        <div> <span className=''>digital</span>   Success</div>
      </h5>
    </div>
  </div>
</div>

              </section>
}
            </div>
            {/* <div className="absolute left-0 bottom-0">
  <img
    onClick={scrollToTarget}
    className="w-14 h-14 ml-10 rounded-full bg-gray-400 cursor-pointer animate-bounce"
    src={img}
    alt=""
  />
</div> */}

          </div>
        </div>
      </div>
<div  className='overflow-hidden bg-black md:hidden'>
    <div  className='w-full  flex justify-end ml-10'>
      <img
        src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704261776/LYMDATALABS/Pages/webp/awards_b1qtuh.webp"
        className='h-[350px] rounded-3xl  '    />
    </div>
    <div className='mt-20  w-full ml-[-100px]'>
      <img
        src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704261777/LYMDATALABS/Pages/webp/projects_ukc1vw.webp"
        alt="dhnn"
        className='rounded-3xl'
      />
    </div>
    <div className='mt-20  w-full ml-16'>
        <img
        src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704261777/LYMDATALABS/Pages/webp/experts_sonvot.webp"
        className='rounded-3xl'

        alt="dhnn"
      />
    </div>
    <div className='mt-20  w-full  flex justify-center ml-5'>
      {/* <img
        // src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704261777/LYMDATALABS/Pages/webp/years_vrspin.webp"
        // alt="dhnn"
        className='rounded-3xl h-[250px] w-[250px]'

      /> */}
    </div>

    {/* <div className='mt-20  w-full pb-10 '>
      <img
              src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704261777/LYMDATALABS/Pages/webp/offices_vx48lg.webp"
              className='rounded-3xl h-[400px] w-[300px] ml-[-100px]'

        alt="dhnn"
      />
    </div> */}

  </div> 

<div class="bg-black text-white hidden md:block  ">
    <div class="flex flex-col   justify-center ml-[500px] items-center">
      <img
        src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704261776/LYMDATALABS/Pages/webp/awards_b1qtuh.webp"
        alt="dhnn"
        class="  img1 object-cover  rounded-xl flex justify-end w-[300px] h-[300px] home-weare-card-img img-mobile"
      />
      <h1 class="img1count"></h1>
    </div>
         


    <div class="flex  ml-5 flex-col justify-start   items-start">
      <img
        src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704261777/LYMDATALABS/Pages/webp/experts_sonvot.webp"
        alt="dhnn"
        class=" img2  object-cover h-[390px]  rounded-xl home-weare-card-img"
        data-v-15ca7abc=""
      />
      <h1 class="img2count"></h1>
    </div>
    <div class="flex  flex-col justify-end items-end">
<h1 class="im h-[20px] "></h1>
        <img
        src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704261777/LYMDATALABS/Pages/webp/offices_vx48lg.webp"
        alt="dhnn"
        class=" img3  rounded-xl object-cover h-[400px] mt-[-10vh] w-[350px] home-weare-card-img"
        data-v-15ca7abc=""
      />
      <h1 class="img3count"></h1>
    </div>
    <div class="flex  flex-col justify-start ml-20 items-start">
      <img
        src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704261777/LYMDATALABS/Pages/webp/projects_ukc1vw.webp"
        alt="dhnn"
        class=" rounded-xl img4 mt-[-10vh] h-[400px] w-[350px] object-cover home-weare-card-img"
        data-v-15ca7abc=""
      />
      <h1 class="img4count"></h1>
    </div>

    <div class="flex  flex-col ml-40 justify-center items-center">
      <img
        src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704261777/LYMDATALABS/Pages/webp/years_vrspin.webp"
        alt="dhnn"
        class=" rounded-xl w-[252px] h-[509px] img5 mt-[-70vh] object-cover home-weare-card-img"
        data-v-15ca7abc=""
      />
      <h1 class="img5count"></h1>
    </div>
<div class="h-[500px]"></div>
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/ScrollTrigger.min.js"></script>
    <script src="./script.js"></script> */}
  </div> 
  </>

   )
}

export default DhnnScroller