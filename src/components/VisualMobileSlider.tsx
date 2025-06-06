import React from 'react'
import { useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react"; 


const cards = [
  {
    imgMain: "/assets/visualslider1.svg",
    title: "Modular & Scalable Systems",
    desc: "Designs built to evolve — whether you’re scaling from MVP to enterprise or from one platform to many."
  },
  {
    imgMain: "/assets/visualslider2.svg",
    title: "Clarity Over Complexity",
    desc: "We strip away the noise to focus on what truly matters — ensuring every interface is intuitive and easy to navigate."
  },
  {
    imgMain: "/assets/visualslider3.svg",
    title: "Frictionless Gameplay",
    desc: "From micro-interactions to layout grids, we sweat the details so your users don’t have to."
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
                    <div className=" text-[13px] px-4 pb-5 text-[#A1A1AA]">{card.desc}</div>
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