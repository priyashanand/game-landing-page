import React from 'react'

const Character:React.FC = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-[32px] sm:gap-[78px] px-[22px] sm:px-[104px] items-center sm:items pt-[72px] sm:pt-[156px]'>
      <div>
        <h1 className="text-[24px] text-center sm:text-start sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight ">Where Characters <br /> Become Legends !</h1>
        <p className="text-zinc-400 text-center sm:text-start text-[13px] sm:text-[24px] pt-[24px] sm:pt-[36px]">Every great game starts with unforgettable characters. Our designers shape personalities, not just avatars — blending lore, emotion, and stunning visuals to breathe life into your heroes and villains. 
        <span className='font-bold text-white text-[13px] sm:text-[24px]'>“ From concept sketches to in-game animations — your next fan-favorite starts here ”</span></p>
      </div>
      <img src="/assets/mobchar.png" alt="" className="sm:hidden sm:w-[45%]"/>
      <img src="/assets/character.png" alt="" className='hidden sm:block sm:w-[45%]'/>
    </div>
  )
}

export default Character