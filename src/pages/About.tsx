import React, { useState } from 'react'
import LogoGrid from "../home/LogoGrid";
import { Plus, Minus , ArrowLeft, ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom'
import MobAbout from '../components/MobAbout';

interface ClarityProps {
  head: string;
  content: string;
  isOpen: boolean;
  onClick: () => void
}

const testimonials = [
  {
    name: "Mila McSabbu",
    title: "Product Head at Gameverse",
    avatar: "/assets/aboutavatar.svg",
    message:
      "“ Clyde completely transformed our product experience. The design was not just beautiful, it solved real usability issues and engagement ”",
  },
  {
    name: "Ananya Mia",
    title: "Founder of Arcane OS",
    avatar: "/assets/aboutavatar1.svg",
    message:
      "“ Working with Clyde felt like having an in-house team. Their attention to detail, speed, and creative direction made a huge difference to our launch ” ",
  },
  {
    name: "Sonia Joshua",
    title: " CTO at FleetFlow",
    avatar: "/assets/aboutavatar2.svg",
    message:
      "“ They just got our product. Clyde’s UX insights helped us streamline our platform and reduce drop-offs significantly ” ",
  },
  {
    name: "Mila McSabbu",
    title: "Product Head at Gameverse",
    avatar: "/assets/aboutavatar.svg",
    message:
      "“ Clyde completely transformed our product experience. The design was not just beautiful, it solved real usability issues and engagement ”",
  },
 {
    name: "Ananya Mia",
    title: "Founder of Arcane OS",
    avatar: "/assets/aboutavatar1.svg",
    message:
      "“ Working with Clyde felt like having an in-house team. Their attention to detail, speed, and creative direction made a huge difference to our launch ” ",
  },
  // Add more objects (at least 5–6 for visible effect)
];


const logoUrls = [
  "/assets/section2img1.png",
  "/assets/section2img2.png",
  "/assets/section2img3.png",
  "/assets/section2img4.png",
  "/assets/section2img5.png",
];

const clarityData = [
  {
    head: 'Game UI/UX & Systems',
    content: 'From character screens to progression systems, we design game UIs that are intuitive, engaging, and built for play.'
  },
  {
    head: 'Frontend/Backend Development',
    content: 'From character screens to progression systems, we design game UIs that are intuitive, engaging, and built for play.'
  },
  {
    head: 'Payment Integration',
    content: 'From character screens to progression systems, we design game UIs that are intuitive, engaging, and built for play.'
  },
  {
    head: 'Ongoing Support',
    content: 'From character screens to progression systems, we design game UIs that are intuitive, engaging, and built for play.'
  },
];

const Clarity:React.FC<ClarityProps> = ({head, content, isOpen, onClick}) =>{
  return (
    <div>
      <div className='flex flex-col gap-[16px] p-[17px] bg-[#151515] rounded-[24px]'>
        <button onClick={onClick} className='flex w-full justify-between'>
          <div className='text-[#A3A3A3] text-[22px] leading-[30px]'>{head}</div>
          <span>{isOpen ? <Minus /> : <Plus />}</span>
        </button>
        {isOpen && (
          <div className=''>
            <p className='text-[#E5E7EB] text-[16px] leading-[24px] pb-4'>{content}</p>
            <button className='text-[#00C6CC] text-[16px] border-b'>Explore about us</button>
          </div>
        )}
      </div>
    </div>
  )
}

const About:React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount
  );

  const visibleTestimonials =
    currentTestimonials.length < visibleCount
      ? [...currentTestimonials, ...testimonials.slice(0, visibleCount - currentTestimonials.length)]
      : currentTestimonials;

  return (
    <div>
      <div className='hidden sm:block'>
        {/* Section1 Intro */}
        <div className='flex flex-col  items-center pt-[63px] sm:pt-[112px]'>
          <h1 className='text-[24px] sm:text-[72px]  font-bold  text-white sm:px-[118px] sm:leading-[77.04px] tracking-[-1.2px] sm:tracking-[-1.8px]'>We design for impact. </h1>
          <h1 className='text-[24px] sm:text-[72px] font-bold sm:leading-[77.04px]  text-white tracking-[-1.2px] sm:tracking-[-1.8px]'>We build for performance.</h1>
          <div className= 'hidden sm:block text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pt-6 sm:pt-9'>Clyde is a design and engineering studio that creates digital products</div>
          <p className='hidden sm:block text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pb-[33px] sm:pb-[52px] '>that captivate, convert, and scale.</p>
          
          <p className='sm:hidden text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pt-6'>We create brands, design seamless </p>
          <p className='sm:hidden text-[#A1A1AA] font-medium text-[13px] sm:text-[20px]'>experiences, and build powerful </p>
          <p className='sm:hidden text-[#A1A1AA] font-medium text-[13px] sm:text-[20px] pb-[33px] sm:pb-[52px]'>digital products that stand out.</p>
    
          <Link to="/casestudies">
            <div className="relative group">
              <span className="absolute w-[127px] h-[1px] left-[18px] top-[37px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
              <div className="absolute w-[158px] h-[36px] top-[1px] left-[1px] bg-[#09090B] rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
              <div
                className="relative z-10 w-[158px] h-[38px] rounded-full flex items-center justify-center text-[#A1A1AA] text-[14px] font-medium leading-[24px]"
              >
                Explore Our Work
              </div>
            </div>
          </Link>
          <h1></h1>
          <img src="/assets/aboutintro.svg" alt="Game app design" className='w-full h-auto px-[14px] sm:px-[81px] pt-[33px] sm:pt-[64px]'/>
        </div>

        {/* Section2 Who are we */}
        <div className='px-[104px] pt-[124px] pb-[125px]'>
          <div className="flex justify-center sm:justify-start pb-[64px]">

            <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight mb-6">
              Who Are we?
            </div>
          </div>
          <div className='flex gap-12 justify-center items-center bg-[#101215] p-7 rounded-[40px]'>
            <img src="/assets/we.svg" alt="" />
            <div className='flex flex-col justify-between items-start gap-10'>
              <p className='text-[20.5px] leading-[27.3px] text-white'>Clyde is a design and engineering studio crafting digital products that captivate, convert, and scale. From immersive game UIs to robust enterprise dashboards, we blend strategy, design, and development to deliver results that are both creative and measurable.</p>
              <p className='text-[20.34px] leading-[27.3px] text-[#38E8EE] '>To build digital experiences that deliver results — creatively, strategically, and technically.</p>
              <div className='flex gap-[18px]'>
                <div className='text-white bg-[#0D0D0D] px-[13px] py-[10px] rounded-[15px]'>Payments</div>
                <div className='text-white bg-[#0D0D0D] px-[13px] py-[10px] rounded-[15px]'>Gaming</div>
                <div className='text-white bg-[#0D0D0D] px-[13px] py-[10px] rounded-[15px]'>NFTs</div>
                <div className='text-white bg-[#0D0D0D] px-[13px] py-[10px] rounded-[15px]'>DeFi</div>
                <div className='text-white bg-[#0D0D0D] px-[13px] py-[10px] rounded-[15px]'>DAOs</div>
              </div>
            </div>
          </div>
          <div className=''>
            <LogoGrid logoUrls={logoUrls} />
          </div>
        </div>

        {/* Section3 Build with clarity */}
        <div className='px-[104px] pb-[82px]'>
          <div className="flex justify-center sm:justify-start pb-[36px]">

            <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight mb-6">
              Build it with Clarity
            </div>
          </div>
          <p className='text-[24px] text-[#A1A1AA] leading-[44px]'>The client needed a seamless, mobile-optimized purchase system supporting both fiat and crypto payments without disrupting gameplay. It required real-time backend synchronization, secure authentication and payment verification, plus reliable fallback handling for failed crypto transactions—ensuring a smooth and secure user experience.</p>
        </div>

        <div className='flex justify-between px-[104px] '>
          <div className='flex flex-col justify-center gap-[18px] w-[36.6%] '>
            {clarityData.map((item, index)=>(
              <Clarity
                key={index}
                head={item.head}
                content={item.content}
                isOpen={openIndex === index}
                onClick={()=>handleToggle(index)}
              />
            ))}
            </div>
          <img src="/assets/clarity.svg" alt="" className='w-[58%] h-auto'/>
        </div>

        {/* Section4 Meet the Team */}
        <div className='px-[104px] pt-[140px]'>
          <div className="flex justify-center sm:justify-start pb-[36px]">

            <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight mb-6">
              Meet the Team
            </div>
          </div>
          <p className='text-[24px] text-[#A1A1AA] leading-[44px] pb-[60px]'>Clyde is powered by a tight-knit team of designers, engineers, and strategists — united by curiosity, craftsmanship, and a shared mission to build impactful digital experiences.</p>

          <div className='flex flex-col items-center'>
            <div className='flex gap-[24px]'>
              <button className='px-6 py-3 rounded-[10px] bg-[#151515] text-[#E3E3E3] font-semibold text-[20px] leading-[22.4px]'>Founders</button>
              <button className='px-6 py-3 rounded-[10px] bg-[#151515] text-[#E3E3E3] font-semibold text-[20px] leading-[22.4px]'>Advisors</button>
            </div>
            <div className='flex gap-[48px] pt-[61px]'>
              <div className='flex flex-col items-center'>
                <img src="/assets/kourosh.svg" alt="" />
                <h1 className='pt-[38px] text-[24px] text-[#F4E4E4] font-semibold leading-[40px]'>Kourosh Sahm</h1>
                <p className='text-[20px] text-[#A1A1AA] leading-[28px]'>Founder, CEO</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src="/assets/kourosh.svg" alt="" />
                <h1 className='pt-[38px] text-[24px] text-[#F4E4E4] font-semibold leading-[40px]'>Momin</h1>
                <p className='text-[20px] text-[#A1A1AA] leading-[28px]'>Founder, CEO</p>
              </div>
            </div>
          </div>
        </div>


        {/* Section5 What our clients say */}
        <div className='px-[104px] pt-[140px]'>
          <div className="flex justify-center sm:justify-start pb-[36px]">

            <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight mb-6">
              What Our Clients Say
            </div>
          </div>
          <p className='text-[24px] text-[#A1A1AA] leading-[44px] pb-[60px]'>We craft digital products that look sharp and work flawlessly. From games to enterprise tools, we blend design, strategy, and tech to build experiences that scale and perform.</p>

        
          <div>
            <div className="flex justify-between">
              {visibleTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-[28px] p-[36px] w-[30.84%] bg-[#111215] rounded-[20px]"
                >
                  <div className="flex items-center gap-[21px]">
                    <img src={t.avatar} alt={t.name} />
                    <div>
                      <h1 className="text-[20px] text-[#F7F7F7] font-bold leading-[30px]">
                        {t.name}
                      </h1>
                      <p className="text-[14px] text-[#9E9E9E] leading-[24px] ">
                        {t.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#9E9E9E] leading-[28px]">
                    {t.message}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-6 w-full pt-10">
              <button className="p-3" onClick={handlePrev}>
                <ArrowLeft />
              </button>
              <button className="p-3" onClick={handleNext}>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        

        {/* Section6 the ending */}
        <div className='px-[104px] pt-[80px] pb-[68px]'>    
          <div className='bg-[url("/assets/bgnetsol.png")] py-[72px] flex flex-col items-center bg-cover
            bg-center rounded-[32px]'>
            <h1 className=' text-[40px] font-semibold leading-[58px] tracking-[-1.2px] text-[#EDF3FF] text-center Contact Us'>We don’t just design what looks good. <br />We craft what works great</h1>
            <p className='text-[24px] leading-[58px] tracking-[-1.2px] text-[#747474] pt-4 pb-[48px]'>Take control of your fleet. Go white-label.</p>
            <Link to="/contact">
            <button className='text-white bg-[#008E99] py-3 px-5 rounded-[12px]'>Contact Us</button></Link>
          </div>
        </div>
      </div>
      <div className='sm:hidden'>
        <MobAbout/>
      </div>
    </div>
  )
}

export default About