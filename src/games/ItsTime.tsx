import React from 'react'
import { Link } from 'react-router-dom'

const ItsTime:React.FC = () => {
  return (
    <div className='px-[22px] sm:px-[104px] pt-[72px] sm:pt-[151px] pb-[72px] sm:pb-[78px]'>
      <div className='flex flex-col items-center text-center bg-[url("/assets/timebg1.png")] bg-cover pt-[36px] sm:pt-[63px] px-[22px] sm:px-[219px] rounded-[16px] sm:rounded-[40px]'>
      <h1 className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight">Its time to get Started! <br />
      Launch Loud. Grow Fast. Stay Legendary.</h1>
      <div className='py-[35px] sm:py-[57px]'>
        <Link to="/contact">
        <button className="inline-flex items-center gap-2 bg-[#FFFFFF]/5 borer text-[#E8E8E8] text-sm font-medium py-2.5 px-5 rounded-[10px] ">
        Get Started
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
      </div>
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    </div>
  )
}

export default ItsTime