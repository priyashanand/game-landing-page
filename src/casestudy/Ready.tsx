import React from 'react'

const Ready:React.FC= () => {
  return (
    <div className='px-[22px] sm:px-[104px] pt-[72px] sm:pt-[130px] pb-[72px] sm:pb-[84px]'>
      <div className='flex bg-[#131416] rounded-[12px] sm:rounded-[40px]'>
        <div className='bg-[url("/assets/ready1.png")] bg-contain bg-no-repeat bg-right sm:bg-none flex flex-col gap-[24px] sm:gap-[28px] items-start justify-center px-[22px] sm:px-[47px] py-[36px]  sm:pr-[115px]'>
          <h1 className='w-2/3 sm:w-1/2 text-[#A0C2FF] text-[20px] sm:text-[40px] font-semibold tracking-[-1.2px]'>Ready to build your website <span className='text-white'>with us?</span></h1>
          <button className='sm:border sm:border-[#FFE1E1] bg-[#008E99] sm:bg-[#008E99] text-[#F0F0F0] sm:text-white text-[10px] sm:text-[16px] font-medium py-[5px] sm:py-[12px] leading-6 px-[28px] sm:px-[20px] rounded-[10px] sm:rounded-[12px]'>Contact Us</button>
        </div>
        <img src="/assets/ready.png" alt="" className='hidden sm:block w-1/2 object-cover object-left sm:object-contain'/>
      </div>
    </div>
  )
}

export default Ready