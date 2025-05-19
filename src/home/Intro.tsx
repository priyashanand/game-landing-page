import React from 'react'

const Intro: React.FC = () => {
  return (
    <div className='flex flex-col  items-center pt-[112px]'>
      <h1 className='text-[72px]  font-bold  text-white px-[118px] tracking-[-1.8px]'>Precision Crafted Software for </h1>
      <h1 className='text-[72px]  font-bold  text-white tracking-[-1.8px]'>Visionary Brands</h1>
      <div className='text-[#A1A1AA] font-medium text-[20px] pt-9'>We create brands, design seamless experiences, and build </div>
      <p className='text-[#A1A1AA] font-medium text-[20px] pb-[52px] '>powerful digital products that stand out.</p>
      
      <div className="relative group">
          <span className="absolute w-[127px] h-[1px] left-[18px] top-[37px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
          <div className="absolute w-[158px] h-[36px] top-[1px] left-[1px] bg-[#09090B] rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
          <div
            className="relative z-10 w-[158px] h-[38px] rounded-full flex items-center justify-center text-[#A1A1AA] text-[14px] font-medium leading-[24px]"
          >
            Explore Our Work
          </div>
        </div>
      <h1></h1>
      <img src="/assets/homeIntro.png" alt="" className='px-[81px] pt-[64px]'/>
    </div>
  ) 
}

export default Intro




