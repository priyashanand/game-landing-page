import React from 'react';

const StoryDesign: React.FC = () => {
  return (
    <div className="px-[104px] flex flex-col items-center text-center pt-[160px]">
      <h1 className="text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight">
        Story Design – “ Narratives Players Live In ”
      </h1>
      
      <p className="text-zinc-400 text-[24px] pt-[36px] pb-[92px] text-justify">
        We build emotional arcs that keep players pushing forward. From prologue <br />
        to post-credits, your story gets the structure and soul it deserves.
      </p>

      <div className="flex w-full items-center justify-center">
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
    </div>
  );
};

export default StoryDesign;
