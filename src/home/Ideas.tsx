import React from 'react';

const Ideas: React.FC = () => {
  return (
    <div className="bg-black px-[104px] py-16">
      <div className="flex items-center justify-between bg-[#101012] px-[60px] py-[50px] rounded-2xl w-full">
        {/* Text content */}
        <div className="max-w-2xl">
          <h2 className="text-[36px] font-bold tracking-[-1px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight mb-2">
            See great ideas come to life
          </h2>
          <p className="text-[16px] text-[#A1A1AA]">
            Book a 30-minute strategy call with our team — no fluff, just real insight. Products evolve.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6">
          {/* Contact Us button with arrow */}
          <button className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium py-2.5 px-6 rounded-lg hover:bg-gray-200 transition">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>

          {/* Explore About Us button */}
          <button className="text-white text-sm font-medium hover:text-gray-300 transition">
            Explore About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
