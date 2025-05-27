import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { CircleArrowLeft, CircleArrowRight } from "lucide-react"; 


const cards = [
  {
    imgMain: "/assets/cardimg7.png",
    desc: "Revolving Games team needed a bold new identity and a cleaner dashboard to improve player engagement and retention. Brand refresh + dashboard overhaul = smoother play and high....",
    url: "/csp/revolvingGames"
  },
  {
    imgMain: "/assets/cardimg8.png",
    desc: "Revolving Games team needed a bold new identity and a cleaner dashboard to improve player engagement and retention. Brand refresh + dashboard overhaul = smoother play and high....",
    url: "/csp/netsol"

  },
  {
    imgMain: "/assets/cardimg9.png",
    desc: "Revolving Games team needed a bold new identity and a cleaner dashboard to improve player engagement and retention. Brand refresh + dashboard overhaul = smoother play and high....",
    url: "/csp/metaende"

  },
  {
    imgMain: "/assets/cardimg6.png",
    desc: "Revolving Games team needed a bold new identity and a cleaner dashboard to improve player engagement and retention. Brand refresh + dashboard overhaul = smoother play and high....",
    url: "/csp/cerwinvega"

  }
];

const HomeMobSlider:React.FC = () => {
  const [current, setCurrent] = useState(0);
  const max = cards.length - 1;

  const handlePrev = () => setCurrent(current === 0 ? max : current - 1);
  const handleNext = () => setCurrent(current === max ? 0 : current + 1);

  return (
    <div className="sm:hidden pt-5 ">
      {/* <span ><img src="/assets/section4img1.png" alt="" className="h-20"/></span> */}
      

      {/* Mobile View Carousel */}
      <div className="md:hidden relative ">
        <div className="flex items-center justify-between mb-4">
          
          <div className="flex-1 overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {cards.map((card, index) => (
                <div key={index} className="min-w-full px-2">
                  <div className="bg-[#101012] border-[#363535] rounded-3xl shadow-md">
                    <div className="rounded-xl flex items-center justify-center ">

                      <img src={card.imgMain} alt="" className="h-auto w-full object-contain px-4 pt-4" />
                    </div>
                    {/* <img src="/assets/section4img6.png" alt="" className="h-16 object-contain mb-6" /> */}
                    <div className=" text-[14px] px-4 py-4 text-[#A1A1AA]">{card.desc}</div>
                    <Link to={card.url}>
                    <button className="flex items-center text-[13px] px-4 pb-5 font-semibold text-[#00C6CC]">
                    Read Full Casestudy
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 3L8.5 8L3.5 13M7.5 3L12.5 8L7.5 13" stroke="#00C6CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    </Link>
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
            {cards.map((card, i) => (
              <div
                key={i}
                className={` rounded-[6px] ${i === current ? " border-[2px] border-[#A2A2A2] w-[54px] h-[54px]" : " w-[48px] h-[48px]"}`}
              >
                <img src={card.imgMain} alt="" className='w-full h-full '/>
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

export default HomeMobSlider