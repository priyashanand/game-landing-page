import React from 'react'
import { useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react"; 
import PlayButton from './PlayButton';


const videoData = [
  {
    imageUrl: "/assets/video1.png",
    name: "Mathew Thomas",
    title: "Founder, Revolving Games",
    heading: "Founder talks about his website redesign",
  },
  {
    imageUrl: "/assets/video1.png",
    name: "Alisha Ray",
    title: "Creative Director, Nova Studios",
    heading: "Why they chose our UI expertise",
  },
  {
    imageUrl: "/assets/video1.png",
    name: "Chris Van",
    title: "CEO, Pixel Forge",
    heading: "Improving gameplay through better UX",
  },
];

// const allSlides = [...videoData, ...videoData];

const VideoMobileSlider:React.FC = () => {
  const [current, setCurrent] = useState(0);
  const max = videoData.length - 1;

  const handlePrev = () => setCurrent(current === 0 ? max : current - 1);
  const handleNext = () => setCurrent(current === max ? 0 : current + 1);

  return (
    <div className="sm:hidden pt-5 ">
      {/* <span ><img src="/assets/section4img1.png" alt="" className="h-20"/></span> */}      f
      {/* Mobile View Carousel */}
      <div className="md:hidden relative ">
        <div className="flex items-center justify-between mb-4">
          
          <div className="flex-1 overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {videoData.map((video, index) => (
              <div key={index} className="min-w-full px-2">
              <div className="bg-[#101012] border-[#363535] rounded-3xl shadow-md">
                <div className="rounded-xl flex items-center justify-center ">
                  <div></div>
                  <div className='absolute'>
                    <PlayButton/>
                  </div>
                  <img src={video.imageUrl} alt="" className="h-auto w-full object-contain" />
                </div>
                {/* <img src="/assets/section4img6.png" alt="" className="h-16 object-contain mb-6" /> */}
              </div>
            </div>
            ))}
            </div>
          </div>
          
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-between space-x-2 mt-2 ">
          <button onClick={handlePrev} className="p-2">
            <CircleArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className='flex  gap-4'>
            {videoData.map((card, i) => (
              <div
                key={i}
                className={` rounded-[6px] ${i === current ? " border-[2px] border-[#A2A2A2] w-[54px] h-[54px]" : " w-[48px] h-[48px]"}`}
              >
                <img src={card.imageUrl} alt="" className='w-full h-full '/>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="p-2">
            <CircleArrowRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoMobileSlider