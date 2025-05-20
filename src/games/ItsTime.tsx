import React from 'react'

const ItsTime:React.FC = () => {
  return (
    <div className=' px-[104px] pt-[151px]'>
      <div className='flex flex-col items-center text-center bg-[url("/assets/timebg.png")] bg-contain pt-[63px] px-[219px] rounded-[40px]'>
      <h1 className="text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight">Its time to get Started! <br />
      Launch Loud. Grow Fast. Stay Legendary.</h1>
      <div className='py-[57px]'>
        <button className="inline-flex items-center gap-2  text-[#E8E8E8] text-sm font-medium py-2.5 px-5 rounded-[10px] ">
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
      </div>
      </div>
    </div>
  )
}

export default ItsTime