import React from "react";
import VisualMobileSlider from "../components/VisualMobileSlider";

const Visuals:React.FC = () => {
  return (
    <div className="bg-[#09090B] px-6 sm:px-12 lg:px-[104px] py-6 sm:py-20 ">
      {/* Heading */}
      <div className="flex justify-center sm:justify-start">

        <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight mb-6">
          More Than Visuals — <br /> It’s the Full Experience
        </div>
      </div>

      {/* Subheading */}
      <div className="sm:block hidden text-[16px] text-[#A1A1AA] mb-16">
        Designing a game is about more than visuals — it's about <br className="hidden sm:block" />
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
            src="/assets/section3img1.png"
            alt="Scalable by Design"
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
          <div className="text-[20px] font-semibold text-[#E4E4E7] mb-4 px-8">Scalable by Design</div>
          <div className="text-[16px] text-[#A1A1AA] font-normal px-8">
            As your game evolves, so does the design. Whether it’s new content drops, expansions — our systems grow with you.
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex rounded-xl bg-[#18181b]/50 shadow-[0_0_0_1px_rgba(244,244,245,0.1)]
 flex-col h-full">
          <img
            src="/assets/section3img2.png"
            alt="Built for Play"
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
          <div className="text-[20px] font-semibold text-[#E4E4E7] mb-4 px-8">Built for Play</div>
          <div className="text-[16px] text-[#A1A1AA] font-normal px-8">
            A streamlined design system for games that puts players first and scales as you grow.
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex rounded-xl bg-[#18181b]/50 shadow-[0_0_0_1px_rgba(244,244,245,0.1)]
 flex-col h-full pb-8">
          <img
            src="/assets/section3img3.png"
            alt="Frictionless Gameplay"
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
          <div className="text-[20px] font-semibold text-[#E4E4E7] mb-4 px-8">Frictionless Gameplay</div>
          <div className="text-[16px] text-[#A1A1AA] font-normal px-8">
            We focus on what matters most — the player experience. Clear menus, focused layouts, and intuitive controls.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visuals;
