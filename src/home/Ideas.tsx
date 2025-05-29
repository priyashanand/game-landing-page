import React from 'react';
import CallToActionCard from './CallToActionCard';
import { Link } from 'react-router-dom';

const Ideas: React.FC = () => {
  return (
    <div className=" bg-[#09090B] sm:bg-black sm:px-[104px] sm:py-16">
      <div className="hidden sm:flex items-center flex-col sm:flex-row justify-between bg-[#101012] px-[22px] sm:px-[60px] py-[20px] sm:py-[50px] rounded-2xl w-full">
        {/* Text content */}
        <div className="sm:max-w-2xl">
          <h2 className="text-[16px] text-center sm:text-start sm:text-[36px] font-bold tracking-[-1px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight sm:mb-2">
            See great ideas come to life
          </h2>
          <p className="text-[12px] sm:text-[16px] text-[#A1A1AA]">
            Book a 30-minute strategy call with our team — no fluff, just real insight. Products evolve.
          </p>
        </div>

        {/* Buttons */}

        <div className="flex items-center gap-6">
          {/* Contact Us button with arrow */}
          <Link to="/contact">
            <button className="hidden sm:inline-flex items-center gap-2 bg-white text-black text-sm font-medium py-2.5 px-6 rounded-lg hover:bg-gray-200 transition">
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
          </Link>

          {/* Explore About Us button */}
          <Link to="/casestudies">
            <button className="text-[#6A6A6A] sm:text-white text-sm border py-1 sm:py-0 px-4 sm:px-0 border-[#171616] sm:border-none font-medium hover:text-gray-300 transition">
              Explore About Us
            </button>
          </Link>
        </div>
      </div>
      <div className='sm:hidden px-[22px]'>
        <CallToActionCard/>
      </div>
    </div>
  );
};

export default Ideas;
