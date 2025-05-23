import React from 'react'
import InputDesign from './InputDesign'

const Blog:React.FC = () => {
  return (
    <div className='pt-[72px] sm:pt-[120px]'>
      <h1 className="text-[24px] sm:text-[48px] text-center sm:text-start font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight px-[22px] sm:px-[104px]">Our Blogs</h1>
      <InputDesign/>
    </div>
  )
}

export default Blog