import React from 'react'
import LogoGrid from "../home/LogoGrid";

import { Link } from 'react-router-dom'

const About:React.FC = () => {
  const logoUrls = [
    "/assets/section2img1.png",
    "/assets/section2img2.png",
    "/assets/section2img3.png",
    "/assets/section2img4.png",
    "/assets/section2img5.png",
  ];
  return (
    <div>
      {/* Section1 Intro */}
      <div className='flex flex-col  items-center pt-[63px] sm:pt-[112px]'>
        <h1 className='text-[24px] sm:text-[72px]  font-bold  text-white sm:px-[118px] sm:leading-[77.04px] tracking-[-1.2px] sm:tracking-[-1.8px]'>We design for impact. </h1>
        <h1 className='text-[24px] sm:text-[72px] font-bold sm:leading-[77.04px]  text-white tracking-[-1.2px] sm:tracking-[-1.8px]'>We build for performance.</h1>
        <div className= 'hidden sm:block text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pt-6 sm:pt-9'>Clyde is a design and engineering studio that creates digital products</div>
        <p className='hidden sm:block text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pb-[33px] sm:pb-[52px] '>that captivate, convert, and scale.</p>
        
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
        <img src="/assets/aboutIntro.svg" alt="Game app design" className='w-full h-auto px-[14px] sm:px-[81px] pt-[33px] sm:pt-[64px]'/>
      </div>

      {/* Section2 Who are we */}
      <div className='px-[104px] pt-[124px] pb-[125px]'>
        <div className="flex justify-center sm:justify-start pb-[64px]">

          <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight mb-6">
            Who Are we?
          </div>
        </div>
        <div className='flex gap-12 justify-center items-center bg-[#101215] p-7 rounded-[40px]'>
          <img src="/assets/we.svg" alt="" />
          <div className='flex flex-col justify-between items-start gap-10'>
            <p className='text-[20.5px] leading-[27.3px] text-white'>Clyde is a design and engineering studio crafting digital products that captivate, convert, and scale. From immersive game UIs to robust enterprise dashboards, we blend strategy, design, and development to deliver results that are both creative and measurable.</p>
            <p className='text-[20.34px] leading-[27.3px] text-[#38E8EE] '>To build digital experiences that deliver results — creatively, strategically, and technically.</p>
            <div className='flex gap-[18px]'>
              <div className='text-white bg-[#0D0D0D] px-[13px] py-[10px] rounded-[15px]'>Payments</div>
              <div className='text-white bg-[#0D0D0D] px-[13px] py-[10px] rounded-[15px]'>Gaming</div>
              <div className='text-white bg-[#0D0D0D] px-[13px] py-[10px] rounded-[15px]'>NFTs</div>
              <div className='text-white bg-[#0D0D0D] px-[13px] py-[10px] rounded-[15px]'>DeFi</div>
              <div className='text-white bg-[#0D0D0D] px-[13px] py-[10px] rounded-[15px]'>DAOs</div>
            </div>
          </div>
        </div>
        <div className=''>
          <LogoGrid logoUrls={logoUrls} />
        </div>
      </div>

      {/* Section3 Build with clarity */}
      <div>
        <div className="flex justify-center sm:justify-start pb-[36px]">

          <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight mb-6">
            Build it with Clarity
          </div>
        </div>
        <p className='text-[24px] text-[#A1A1AA] leading-[44px]'>The client needed a seamless, mobile-optimized purchase system supporting both fiat and crypto payments without disrupting gameplay. It required real-time backend synchronization, secure authentication and payment verification, plus reliable fallback handling for failed crypto transactions—ensuring a smooth and secure user experience.</p>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default About