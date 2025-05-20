import React from 'react'

const Ready:React.FC= () => {
  return (
    <div className='px-[104px] pt-[130px] pb-[84px]'>
      <div className='flex bg-[#131416] rounded-[40px]'>
        <div className='w-1/2 flex flex-col gap-[28px] items-start justify-center px-[47px] pr-[115px]'>
          <h1 className='text-[#A0C2FF] text-[40px] font-semibold tracking-[-1.2px]'>Ready to build your website <span className='text-white'>with us?</span></h1>
          <button className='border border-[#FFE1E1] bg-[#008E99] text-white text-[16px] font-medium py-[12px] px-[20px] rounded-[12px]'>Contact Us</button>
        </div>
        <img src="/assets/ready.png" alt="" className='w-1/2'/>
      </div>
    </div>
  )
}

export default Ready