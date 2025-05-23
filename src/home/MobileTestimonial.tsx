import React from 'react'

const MobileTestimonial:React.FC = () => {
  return (
    <div className='flex flex-col gap-[24px] px-[16px] py-[24px] rounded-[16px] bg-[#101012]'>
      <div className='flex justify-between '>
        <div>
          <h1 className='text-[24px] font-bold'>3x</h1>
          <p className='text-[13px]'>faster onboarding</p>
        </div>
        <div>
          <h1 className='text-[24px] font-bold'>40%</h1>
          <p className='text-[13px] '>Less user drop-off</p>
        </div>
      </div>
      <p className='text-[#838383] text-[12px]'>“ The team helped us completely rethink our product experience — from brand voice to microinteractions. Their design system and development process gave us a unified, scalable platform that continues to impress both users and investors ”</p>
      <div className='flex justify-between'>
        <div className='flex gap-[14px]'>
          <img src="/assets/avatar.png" alt="" className='h-[37px] w-[37px]'/>
          <div>
            <h1 className='text-[14px] font-semibold'>Bayley Clark</h1>
            <p className='text-[10px] text-[#7E7E7E]'>Head of Operations, Netsol</p>
          </div>
        </div>
        <img src="/assets/section2img3.png" alt="" className='h-[21px]'/>
      </div>
    </div>
  )
}

export default MobileTestimonial