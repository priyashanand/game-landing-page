import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <div className="px-[104px] py-12 bg-black">
      <div className="flex flex-row gap-[42px] overflow-hidden ">
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
    </div>
  );
};

export default TestimonialSection;
