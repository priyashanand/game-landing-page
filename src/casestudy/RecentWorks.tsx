import React from 'react'
import {Link} from 'react-router-dom'

const RecentWorks:React.FC = () => {
  return (
    <div className='px-[104px] pt-[105px]'>
      <h1 className=' text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight pb-[40px]'>Recent Best Works</h1>
      <p className='text-[20px] font-bold text-[#EBEBEB]'>We don’t just design — we transform.</p>
      <p className='text-[20px] text-[#A1A1AA] pb-[78px]'>
      Our case studies reflect the way we solve real business challenges through clear UX strategy, beautiful UI, and scalable tech. Whether you’re launching something new or refining what already exists, our work speaks for itself.</p>
      <div>
        <div className='flex gap-[38px]'>
          <div className='bg-[#0F0F0F] rounded-[36px]'>
            <img src="/assets/work1.png" alt="" />
            <p className='text-[32px] text-[#8B8A8A] p-[40px]'>A full UX revamp that turned casual players into loyal fans</p>
            <div className='px-[40px] pt-[4px] pb-[46px]'>
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
          <div className='bg-[#0F0F0F] rounded-[36px]'>
            <img src="/assets/work2.png" alt="" />
            <p className='text-[32px] text-[#8B8A8A] p-[40px]'>A full UX revamp that turned casual players into loyal fans</p>
            <div className='px-[40px] pt-[4px] pb-[46px]'>
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
      <div className='pt-[64px]'>
        <div className='flex gap-[38px]'>
          <div className='bg-[#0F0F0F] rounded-[36px]'>
            <img src="/assets/work3.png" alt="" />
            <p className='text-[32px] text-[#8B8A8A] p-[40px]'>A full UX revamp that turned casual players into loyal fans</p>
            <div className='px-[40px] pt-[4px] pb-[46px]'>
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
          <div className='bg-[#0F0F0F] rounded-[36px]'>
            <img src="/assets/work4.png" alt="" />
            <p className='text-[32px] text-[#8B8A8A] p-[40px]'>A full UX revamp that turned casual players into loyal fans</p>
            <div className='px-[40px] pt-[4px] pb-[46px]'>
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