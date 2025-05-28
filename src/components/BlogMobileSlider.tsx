import React from 'react'
import { useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react"; 


const cards = [
  {
    imgMain: "/assets/mobblog4.png",
    title: "The Evolution of Gaming: From Pixel to Photorealism",
    desc: "April 21,2025 . 10 mins Read"
  },
  {
    imgMain: "/assets/mobblog1.png",
    title: "Game Trends in 2025",
    desc: "April 21,2025 . 10 mins Read"
  },
  {
    imgMain: "/assets/mobblog2.png",
    title: "Building Our Latest Game",
    desc: "April 21,2025 . 10 mins Read"
  },
  {
    imgMain: "/assets/mobblog3.png",
    title: "From Sketch to Screen: Our Art Pipeline Explained",
    desc: "April 21,2025 . 10 mins Read"
  }
];

const BlogMobileSlider:React.FC = () => {
  const [current, setCurrent] = useState(0);
  const max = cards.length - 1;

  const handlePrev = () => setCurrent(current === 0 ? max : current - 1);
  const handleNext = () => setCurrent(current === max ? 0 : current + 1);

  return (
    <div className="sm:hidden pt-5 ">
      {/* <span ><img src="/assets/section4img1.png" alt="" className="h-20"/></span> */}
      

      {/* Mobile View Carousel */}
      <div className="md:hidden relative ">
        <div className="flex items-center justify-between mb-8">
          
          <div className="flex-1 overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {cards.map((card, index) => (
                <div key={index} className="min-w-full px-2">
                    <div className="bg-[#101012] border-[#363535] rounded-[12px] sm:rounded-3xl shadow-md">
                    <div className="rounded-xl flex items-center justify-center ">

                    <img src={card.imgMain} alt="" className="h-auto w-full object-contain" />
                    </div>
                    {/* <img src="/assets/section4img6.png" alt="" className="h-16 object-contain mb-6" /> */}
                    <div className="text-[16px] font-semibold py-4 px-4 text-[#E4E4E7]">{card.title}</div>
                    <div className=" text-[14px] px-4 pb-5 text-[#A1A1AA]">{card.desc}</div>
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
          <div className='flex gap-4'>
            {cards.map((card, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-[6px] overflow-hidden focus:outline-none ${
                  i === current
                    ? "border-[2px] border-[#A2A2A2] w-[54px] h-[54px]"
                    : "w-[48px] h-[48px]"
                }`}
              >
                <img src={card.imgMain} alt="" className="w-full h-full object-cover" />
              </button>
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

export default BlogMobileSlider