import React from 'react'

const Character:React.FC = () => {
  return (
    <div className='flex gap-[78px] px-[104px] items-center pt-[156px]'>
      <div>
        <h1 className="text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight">Where Characters <br /> Become Legends !</h1>
        <p className="text-zinc-400 text-[24px]">Every great game starts with unforgettable characters. Our designers shape personalities, not just avatars — blending lore, emotion, and stunning visuals to breathe life into your heroes and villains. </p>
        <p className='font-bold text-white text-[24px]'>“ From concept sketches to in-game animations — your next fan-favorite starts here ”</p>
      </div>
      <img src="/assets/character.png" alt="" className='w-[45%]'/>
    </div>
  )
}

export default Character