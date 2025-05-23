import React from 'react';
import ImageMobileSlider from "../components/ImageMobileSlider"

const StoryDesign: React.FC = () => {
  return (
    <div className="relative px-[22px] sm:px-[104px] flex flex-col items-center text-center pt-[72px] sm:pt-[160px] overflow-hidden">
      <h1 className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight">
        Story Design – “ Narratives Players Live In ”
      </h1>
      
      <p className="text-zinc-400 text-[13px] sm:text-[24px] text-center pt-[24px] sm:pt-[36px] pb-[40px] sm:pb-[92px]">
        We build emotional arcs that keep players pushing forward. From prologue <br className='hidden sm:block'/>
        to post-credits, your story gets the structure and soul it deserves.
      </p>

      <div className="hidden sm:flex w-full items-center justify-center">
        {[1, 2, 3].map((num) => (
          <div key={num} className="">
            <img
              src={`/assets/storyDesign${num}.png`}
              alt={`Story Design ${num}`}
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className='sm:hidden  w-full '>
        <ImageMobileSlider/>
      </div>
      
    </div>
  );
};

export default StoryDesign;
