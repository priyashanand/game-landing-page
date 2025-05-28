import React from 'react'
import {Link} from 'react-router-dom'

const RecentWorks:React.FC = () => {
  return (
    <div className='px-[22px] sm:px-[104px] sm:pt-[105px]'>
      <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>Recent Best Works</h1>
      
      <p className='text-[13px] sm:text-[20px]  text-center sm:text-start text-[#A1A1AA] pb-[40px] sm:pb-[78px]'>
      <span className='text-[14px] sm:text-[20px] font-bold text-[#EBEBEB]'>We don’t just design — we transform. </span>
      Our case studies reflect the way we solve real business challenges through clear UX strategy, beautiful UI, and scalable tech. Whether you’re launching something new or refining what already exists, our work speaks for itself.</p>
      <div>
        <div className='flex flex-col sm:flex-row gap-[38px]'>
          <div className='bg-[#0F0F0F] rounded-[16px] sm:rounded-[36px]'>
            <img src="/assets/work1.png" alt="" />
            <p className='text-[16px] sm:text-[32px] text-[#8B8A8A] px-[15px] sm:px-[0px] pt-[28px] sm:pt-[0px] sm:p-[40px]'>A full UX revamp that turned casual players into loyal fans</p>
            <div className='px-[15px] sm:px-[40px] pt-[28px] sm:pt-[4px] pb-[24px] sm:pb-[46px]'>
              <Link to="/csp/revolvingGames">
                <button className="inline-flex items-center gap-2 text-white hover:text-black text-sm font-medium py-3 px-6 rounded-[10px] hover:bg-white transition border border-[#A9A9A9]">
                  View Casestudy
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
          <div className='bg-[#0F0F0F] rounded-[16px] sm:rounded-[36px]'>
            <img src="/assets/work2.png" alt="" />
            <p className='text-[16px] sm:text-[32px] text-[#8B8A8A] px-[15px] sm:px-[0px] pt-[28px] sm:pt-[0px] sm:p-[40px]'>A Seamless Interface for Smarter, Faster Business Operations</p>
            <div className='px-[15px] sm:px-[40px] pt-[28px] sm:pt-[4px] pb-[24px] sm:pb-[46px]'>
              <Link to="/csp/netsol">
                <button className="inline-flex items-center gap-2 text-white hover:text-black text-sm font-medium py-3 px-6 rounded-[10px] hover:bg-white transition border border-[#A9A9A9]">
                  View Casestudy
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
      </div>
      <div className=' pt-[38px] sm:pt-[64px]'>
        <div className='flex flex-col sm:flex-row  gap-[38px]'>
          <div className='bg-[#0F0F0F] rounded-[16px] sm:rounded-[36px]'>
            <img src="/assets/work3.png" alt="" />
            <p className='text-[16px] sm:text-[32px] text-[#8B8A8A] px-[15px] sm:px-[0px] pt-[28px] sm:pt-[0px] sm:p-[40px]'>A UI/UX Upgrade That Simplified Enterprise Workflows</p>
            <div className='px-[15px] sm:px-[40px] pt-[28px] sm:pt-[4px] pb-[24px] sm:pb-[46px]'>
              <Link to="/csp/metaende">
                <button className="inline-flex items-center gap-2 text-white hover:text-black text-sm font-medium py-3 px-6 rounded-[10px] hover:bg-white transition border border-[#A9A9A9]">
                  View Casestudy
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
          <div className='bg-[#0F0F0F] rounded-[16px] sm:rounded-[16px]'>
            <img src="/assets/work4.png" alt="" />
            <p className='text-[16px] sm:dtext-[32px] text-[#8B8A8A] px-[15px] sm:px-[0px] pt-[28px] sm:pt-[0px] sm:p-[40px]'>Revamped website for modern, performance-driven user experience.</p>
            <div className='px-[15px] sm:px-[40px] pt-[28px] sm:pt-[4px] pb-[24px] sm:pb-[46px]'>
              <Link to="/csp/cerwinvega">
                <button className="inline-flex items-center gap-2 text-white hover:text-black text-sm font-medium py-3 px-6 rounded-[10px] hover:bg-white transition border border-[#A9A9A9]">
                  View Casestudy
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
      </div>
    </div>
  )
}

export default RecentWorks