import React from 'react'
import IntroSlider from './IntroSlider'
import { Link } from 'react-router-dom'
import MobIntroSlider from './MobIntroSlider'

const Intro: React.FC = () => {
  return (
    <div className='flex flex-col  items-center pt-[63px] sm:pt-[112px]'>
      <h1 className='text-[24px] sm:text-[72px]  font-bold sm:leading-[77.04px] text-white sm:px-[118px] tracking-[-1.2px] sm:tracking-[-1.8px]'>Precision Crafted Software for </h1>
      <h1 className='text-[24px] sm:text-[72px] font-bold sm:leading-[77.04px]  text-white tracking-[-1.2px] sm:tracking-[-1.8px]'>Pixel-Perfect Precision</h1>
      <div className='hidden sm:block text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pt-6 sm:pt-9'>Whether you're crafting a battle royale beast or an indie story-driven gem, we  </div>
      <p className='hidden sm:block text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pb-[33px] sm:pb-[52px]  '>build game interfaces, characters, and systems that captivate — and convert.</p>
      <p className='sm:hidden text-[#A1A1AA] font-medium text-center text-[13px] sm:text-[20px] pb-[33px] pt-6 px-[22px]'>
      Our design and engineering solutions help teams scale with confidence, deepen user engagement, and deliver measurable results.
      </p>
      
      <Link to="/contact">
        <div className="relative group">
          <span className="absolute w-[79px] h-[1px] left-[41px] top-[37px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
          <div className="absolute w-[158px] h-[36px] top-[1px] left-[1px] bg-[#09090B] rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
          <button
            className="relative z-10 w-[158px] h-[38px] rounded-full flex items-center justify-center text-[#A1A1AA] text-[14px] font-medium leading-[24px]"
          >
            Get Started
          </button>
        </div>
      </Link>
      <h1></h1>
      <IntroSlider/>
      <MobIntroSlider/>
    </div>
  ) 
}

export default Intro




