import React from 'react'

const Ready:React.FC= () => {
  return (
    <div className='px-[22px] sm:px-[104px] pt-[72px] sm:pt-[130px] pb-[72px] sm:pb-[84px]'>
      <div className='flex bg-[#131416] rounded-[12px] sm:rounded-[40px]'>
        <div className=' flex flex-col gap-[24px] sm:gap-[28px] items-start justify-center px-[22px] sm:px-[47px] py-[36px]  sm:pr-[115px]'>
          <h1 className='text-[#A0C2FF] text-[20px] sm:text-[40px] font-semibold tracking-[-1.2px]'>Ready to build your website <span className='text-white'>with us?</span></h1>
          <button className='border border-[#FFE1E1] bg-[#008E99] text-white text-[10px] sm:text-[16px] font-medium py-[5px] sm:py-[12px] px-[28px] sm:px-[20px] rounded-[10px] sm:rounded-[12px]'>Contact Us</button>
        </div>
        <img src="/assets/ready.png" alt="" className='w-1/2 object-cover object-left sm:object-contain'/>
      </div>
    </div>
  )
}

export default Ready