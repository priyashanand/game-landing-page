import React from 'react'
import { Link } from 'react-router-dom'
const NextLevel: React.FC = () => {
  return (
    <div className="bg-[url('/assets/bg3.png')]  bg-contain bg-no-repeat bg-center bg-black sm:py-[338px] sm:px-[104px] text-center relative">
      <h1 className='text-[23px] sm:text-[60px] font-semibold  text-white leading-tight'>
        Let’s take your product to
      </h1>
      
      <div className="relative inline-block">
        <h1 className="text-[23px] sm:text-[60px] font-semibold text-white leading-tight relative z-10">
          next level
        </h1>
        <img
          src="/assets/next-level.png"
          alt="underline"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] w-full max-w-[400px] pointer-events-none"
        />
      </div>

      <p className='text-[#CAC6DD] text-[12px] sm:text-[20px] mt-6'>
        See what strategic design, branding, and development can <br className='sm:hidden' />
        do for your business.
      </p>
      <Link to='/contact'>
      <button className='mt-8 border border-[#FFE1E1] backdrop-blur-[2px] bg-[#008E99] text-[#0C0C0C] text-[10px] sm:text-[16px] font-medium py-[5px] sm:py-[12px] px-[20px] rounded-[12px]'>
        Contact Us
      </button>
      </Link>
    </div>
  )
}

export default NextLevel
