import React from 'react'
import { useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react"; 


const cards = [
  {
    imgMain: "/assets/visualSlider1.png",
    title: "Scalable By Design",
    desc: "As your game evolves, so does the design. From new content drops, expansions - our systems grows"
  },
  {
    imgMain: "/assets/visualSlider2.png",
    title: "Built for Play",
    desc: "A streamlined design system for games that puts players first and scales as you grow."
  },
  {
    imgMain: "/assets/visualSlider3.png",
    title: "Frictionless Gameplay",
    desc: "We focus on what matters most — the player experience. Clear menu, focused layouts, and controls."
  }
];

const VisualMobileSlider:React.FC = () => {
  const [current, setCurrent] = useState(0);
  const max = cards.length - 1;

  const handlePrev = () => setCurrent(current === 0 ? max : current - 1);
  const handleNext = () => setCurrent(current === max ? 0 : current + 1);

  return (
    <div className="sm:hidden pt-5">
      {/* <span ><img src="/assets/section4img1.png" alt="" className="h-20"/></span> */}
      

      {/* Mobile View Carousel */}
      <div className="md:hidden relative">
        <div className="flex items-center justify-between mb-4">
          <button onClick={handlePrev} className="p-2">
            <CircleArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex-1 overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {cards.map((card, index) => (
                <div key={index} className="min-w-full px-2">
                    <div className="bg-[#101012] border-[#363535] rounded-3xl shadow-md">
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
          <button onClick={handleNext} className="p-2">
            <CircleArrowRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-2 ">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full ${i === current ? "bg-[#5C5C5C] w-10" : "bg-[#242424] w-5"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisualMobileSlider