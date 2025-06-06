import React from "react";
import VisualMobileSlider from "../components/VisualMobileSlider";

const Visuals:React.FC = () => {
  return (
    <div className="bg-[#09090B] px-6 sm:px-12 lg:px-[104px] py-6 sm:py-20 ">
      {/* Heading */}
      <div className="flex justify-center sm:justify-start">

        <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight mb-6">
          Everything you need. <br /> Nothing you don’t 
        </div>
      </div>

      {/* Subheading */}
      <div className="sm:block hidden text-[16px] text-[#A1A1AA] mb-16">
        Financial management and visibility in one place. Experience <span className="text-white">a flexible toolkit </span><br className="hidden sm:block" />
        creating an experience that’s clear, immersive, and built to grow.
      </div>
      <div className="sm:hidden">
        <VisualMobileSlider/>
      </div>

      {/* Card Grid */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-8 sm:pt-0 pt-[45px]">
        {/* Card 1 */}
        <div className="flex rounded-xl bg-[#18181b]/50 shadow-[0_0_0_1px_rgba(244,244,245,0.1)]
 flex-col h-full">
          <img
            src="/assets/visualslider1.svg"
            alt="Scalable by Design"
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
          <div className="text-[20px] font-semibold text-[#E4E4E7] mb-4 px-8">Modular & Scalable Systems</div>
          <div className="text-[16px] text-[#A1A1AA] font-normal px-8">
           Designs built to evolve — whether you’re scaling from MVP to enterprise or from one platform to many.
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex rounded-xl bg-[#18181b]/50 shadow-[0_0_0_1px_rgba(244,244,245,0.1)]
 flex-col h-full">
          <img
            src="/assets/visualslider2.svg"
            alt="Built for Play"
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
          <div className="text-[20px] font-semibold text-[#E4E4E7] mb-4 px-8">Clarity Over Complexity</div>
          <div className="text-[16px] text-[#A1A1AA] font-normal px-8">
            We strip away the noise to focus on what truly matters — ensuring every interface is intuitive and easy to navigate.
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex rounded-xl bg-[#18181b]/50 shadow-[0_0_0_1px_rgba(244,244,245,0.1)]
 flex-col h-full pb-8">
          <img
            src="/assets/visualslider3.svg"
            alt="Frictionless Gameplay"
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
          <div className="text-[20px] font-semibold text-[#E4E4E7] mb-4 px-8">Precision In Every Detail</div>
          <div className="text-[16px] text-[#A1A1AA] font-normal px-8">
            From micro-interactions to layout grids, we sweat the details so your users don’t have to.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visuals;
