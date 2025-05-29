import React from 'react'
import { Link } from 'react-router-dom'

const Intro: React.FC = () => {
  return (
    <div className='flex flex-col  items-center pt-[63px] sm:pt-[112px]'>
      <h1 className='text-[24px] sm:text-[72px]  font-bold  text-white sm:px-[118px] sm:leading-[77.04px] tracking-[-1.2px] sm:tracking-[-1.8px]'>Precision Crafted Software for </h1>
      <h1 className='text-[24px] sm:text-[72px] font-bold sm:leading-[77.04px]  text-white tracking-[-1.2px] sm:tracking-[-1.8px]'>Visionary Brands</h1>
      <div className= 'hidden sm:block text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pt-6 sm:pt-9'>We create brands, design seamless experiences, and build </div>
      <p className='hidden sm:block text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pb-[33px] sm:pb-[52px] '>powerful digital products that stand out.</p>
      
      <p className='sm:hidden text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pt-6'>We create brands, design seamless </p>
      <p className='sm:hidden text-[#A1A1AA] font-medium text-[13px] sm:text-[20px]'>experiences, and build powerful </p>
      <p className='sm:hidden text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pb-[33px] sm:pb-[52px]'>digital products that stand out.</p>

      <Link to="/casestudies">
        <div className="relative group">
          <span className="absolute w-[127px] h-[1px] left-[18px] top-[37px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
          <div className="absolute w-[158px] h-[36px] top-[1px] left-[1px] bg-[#09090B] rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
          <div
            className="relative z-10 w-[158px] h-[38px] rounded-full flex items-center justify-center text-[#A1A1AA] text-[14px] font-medium leading-[24px]"
          >
            Explore Our Work
          </div>
        </div>
      </Link>
      <h1></h1>
      <img src="/assets/homeIntro.png" alt="" className='px-[14px] sm:px-[81px] pt-[33px] sm:pt-[64px]'/>
    </div>
  ) 
}

export default Intro




