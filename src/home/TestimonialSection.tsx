import React from 'react';
import MobileTestimonial from './MobileTestimonial';

const TestimonialSection: React.FC = () => {
  return (
    <div className="px-[22px] sm:px-[104px] py-[68px] sm:py-12 sm:bg-black">
      <div className="hidden sm:flex flex-row gap-[42px] overflow-hidden ">
        {/* Left panel */}
        <div className=" flex w-[33%] items-center rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-[#1B1E23]/50 to-[#16191D]/50 justify-start p-6 md:p-10 ">
          <h3 className="text-white text-[24px] md:text-[28px] leading-[36px] md:leading-[40px] font-medium max-w-sm">
            Design-first development <br className="hidden md:block" />
            that turns ideas into impact.
          </h3>
        </div>

        {/* Right panel */}
        <div className="flex-1 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-[#1B1E23]/50 to-[#16191D]/50  p-6 md:p-10 flex flex-col gap-6 justify-between">
          {/* Stats and quote */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Stats */}
            <div className="flex flex-col gap-4 min-w-[100px]">
              <div>
                <p className="text-white text-[28px] font-extrabold leading-[32px]">3x</p>
                <p className="text-white text-[14px]">faster user onboarding</p>
              </div>
              <div>
                <p className="text-white text-[28px] font-extrabold leading-[32px]">40%</p>
                <p className="text-white text-[14px]">faster user onboarding</p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-white text-[16px] leading-[24px]">
              The team helped us completely rethink our product experience — from brand voice to microinteractions.
              Their design system and development process gave us a unified, scalable platform that continues to
              impress both users and investors.
            </p>
          </div>

          {/* Author and logo */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/avatar.png" // Replace with actual path
                alt="Bayley Clark"
                className="w-[64px] h-[64px] rounded-[10px] object-cover"
              />
              <div>
                <p className="text-white font-extrabold text-[18px]">Bayley Clark</p>
                <p className="text-white text-[14px]">Head of Operations, Netsol</p>
              </div>
            </div>
            <img
              src="/assets/section2img3.png" // Replace with actual path
              alt="Netsol Logo"
              className="h-[40px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className='sm:hidden'>
        <div className="flex justify-center sm:justify-start sm:px-[104px] sm:pb-[80px]">
          <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center from-white to-[#71717A] text-transparent bg-clip-text leading-tight mb-6">
          Design-first development that turns ideas into impact
          </div>
        </div>
        <MobileTestimonial />
      </div>
    </div>
  );
};

export default TestimonialSection;
