import React from 'react'
import IntroSlider from './IntroSlider'

const Intro: React.FC = () => {
  return (
    <div className='flex flex-col  items-center pt-[112px]'>
      <h1 className='text-[72px]  font-bold  text-white px-[118px] tracking-[-1.8px]'>Precision Crafted Software for </h1>
      <h1 className='text-[72px]  font-bold  text-white tracking-[-1.8px]'>Pixel-Perfect Precision</h1>
      <div className='text-[#A1A1AA] font-medium text-[20px] pt-9'>Whether you're crafting a battle royale beast or an indie story-driven gem, we  </div>
      <p className='text-[#A1A1AA] font-medium text-[20px] pb-[52px] '>build game interfaces, characters, and systems that captivate — and convert.</p>
      
      <div className="relative group">
        <span className="absolute w-[177px] h-[1px] left-[18px] top-[37px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
        <div className="absolute w-[213px] h-[36px] top-[1px] left-[1px] bg-[#09090B] rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
        <button
          className="relative z-10 w-[213px] h-[38px] rounded-full flex items-center justify-center text-[#A1A1AA] text-[14px] font-medium leading-[24px]"
        >
          Explore Our Game Work
        </button>
      </div>
      <h1></h1>
      <IntroSlider/>
    </div>
  ) 
}

export default Intro




