import React from 'react';

const Creativity: React.FC = () => {
  return (
    <div className="bg-[#09090B] py-20 px-6 sm:px-12 lg:px-[104px]">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        {/* Gradient Heading */}
        <div className="text-[42px] font-bold tracking-[-1.2px] bg-gradient-to-r from-white to-[#71717A] text-transparent bg-clip-text leading-tight max-w-2xl">
          Who said creativity<br />can’t be strategic?
        </div>

        {/* Description */}
        <div className="text-[#A1A1AA] text-[18px] font-normal leading-relaxed lg:w-[50%]">
          In a world full of cluttered interfaces and rushed dev cycles, we’re here to do things differently. We partner with ambitious teams to design and
          <span className="text-white font-semibold"> “ build digital products that feel simple, scalable and intentional ” </span>
          — from first wireframe to final launch & Development.
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <img
          src="/assets/section2img1.png"
          alt="section-img-1"
          className="w-full h-auto rounded-xl border border-white/10"
        />
        <img
          src="/assets/section2img2.png"
          alt="section-img-2"
          className="w-full h-auto rounded-xl border border-white/10"
        />
        <img
          src="/assets/section2img3.png"
          alt="section-img-3"
          className="w-full h-auto rounded-xl border border-white/10"
        />
        <img
          src="/assets/section2img4.png"
          alt="section-img-4"
          className="w-full h-auto rounded-xl border border-white/10"
        />
      </div>
    </div>
  );
};

export default Creativity;
