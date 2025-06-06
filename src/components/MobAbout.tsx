import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import LogoSlider from '../home/LogoSlider'
import { Plus, Minus , ArrowLeft, ArrowRight} from 'lucide-react';


interface ClarityProps {
  head: string;
  content: string;
  url: string;
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
      "“ Working with Clyde felt like having an in-house team. Their attention to detail and creative direction made a huge difference to our launch ” ",
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
      "“ Working with Clyde felt like having an in-house team. Their attention to detail and creative direction made a huge difference to our launch ” ",
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
    content: 'From character screens to progression systems, we design game UIs that are intuitive, engaging, and built for play.',
    url: '/assets/clarity.svg'
  },
  {
    head: 'Frontend/Backend Development',
    content: 'From character screens to progression systems, we design game UIs that are intuitive, engaging, and built for play.',
    url: '/assets/clarity.svg'
  },
  {
    head: 'Payment Integration',
    content: 'From character screens to progression systems, we design game UIs that are intuitive, engaging, and built for play.',
    url: '/assets/clarity.svg'
  },
  {
    head: 'Ongoing Support',
    content: 'From character screens to progression systems, we design game UIs that are intuitive, engaging, and built for play.',
    url: '/assets/clarity.svg'
  },
];

const Clarity:React.FC<ClarityProps> = ({head, content, url , isOpen, onClick}) =>{
  return (
    <div>
      <div className='flex flex-col gap-[16px] p-[17px] bg-[#151515] rounded-[24px]'>
        <button onClick={onClick} className='flex w-full justify-between'>
          <div className='text-[#A3A3A3] text-[16px] leading-[30px]'>{head}</div>
          <span>{isOpen ? <Minus /> : <Plus />}</span>
        </button>
        {isOpen && (
          <div className=''>
            <p className='text-[#E5E7EB] text-[16px] leading-[24px] pb-4'>{content}</p>
            <button className='text-[#00C6CC] text-[16px] border-b'>Explore Work</button>
            <img src={url} alt=""  className='w-full h-auto pt-[37px]'/>
          </div>
        )}
      </div>
    </div>
  )
}

const MobAbout:React.FC= () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 1;

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
      {/* INtro Section */}
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

      {/* Who are we Section */}
      <div className='px-[22px] pt-[72px]'>
        <div className="flex justify-center sm:justify-start pb-[36px]">
          <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight ">
            Who Are we?
          </div>
        </div>
        <div className='  justify-center items-center bg-[#101215] p-4 rounded-[16px]'>
          <img src="/assets/we.svg" alt="" />
          <div className='flex flex-col justify-between items-start gap-10 pt-6'>
            <p className='text-[13px] leading-[22px] text-white'>Clyde is a design and engineering studio crafting digital products that captivate, convert, and scale. From immersive game UIs to robust enterprise dashboards, we blend strategy, design, and development to deliver results that are both creative and measurable.</p>
            <p className='text-[13px] leading-[22px] text-[#38E8EE] '>To build digital experiences that deliver results — creatively, strategically, and technically.</p>
            <div className='flex gap-[18px]'>
              <div className='text-white text-[12px] bg-[#0D0D0D] px-[13px] py-[10px] rounded-[6px]'>Payments</div>
              <div className='text-white text-[12px] bg-[#0D0D0D] px-[13px] py-[10px] rounded-[6px]'>Gaming</div>
              <div className='text-white text-[12px] bg-[#0D0D0D] px-[13px] py-[10px] rounded-[6px]'>NFTs</div>
              <div className='text-white text-[12px] bg-[#0D0D0D] px-[13px] py-[10px] rounded-[6px]'>DeFi</div>
            </div>
            <div className='flex gap-[18px]'>
              <div className='text-white text-[12px] bg-[#0D0D0D] px-[13px] py-[10px] rounded-[6px]'>DAOs</div>
              <div className='text-white text-[12px] bg-[#0D0D0D] px-[13px] py-[10px] rounded-[6px]'>Integrations</div>
            </div>
          </div>
        </div>
        <div className=''>
          <LogoSlider logoUrls={logoUrls} />
        </div>
      </div>


      {/* Clarity section */}
      <div>
        <div className='px-[22px] pt-[76px] pb-[42px] '>
          <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-8  sm:pt-0 pb-[32px]'>Build it with Clarity</h1>
          <p className='text-[13px] text-[#A1A1AA] font-medium text-center leading-5'>We craft digital products that look sharp and work flawlessly. From games to enterprise tools, we blend design, strategy, and tech to build experiences that scale and perform.</p>
        </div>
        <div className='flex justify-between px-[22px] '>
          <div className='flex flex-col justify-center gap-[18px]  '>
            {clarityData.map((item, index)=>(
              <Clarity
                key={index}
                head={item.head}
                content={item.content}
                url={item.url}
                isOpen={openIndex === index}
                onClick={()=>handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className='px-[22px]'>
        <div className='pt-[72px] pb-[42px] '>
          <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-8  sm:pt-0 pb-[32px]'>Meet The Team</h1>
          <p className='text-[13px] text-[#A1A1AA] font-medium text-center leading-5'>Clyde is powered by a tight-knit team of designers, engineers, and strategists — united by curiosity, craftsmanship, and a shared mission to build impactful digital experiences.</p>
        </div>
        <div className='flex flex-col gap-[24px]'>
          <div className='flex flex-col gap-[18px] px-3 py-[14px] bg-[#141414] rounded-2xl'>
            <div className='flex gap-4 items-center'>
              <img src="/assets/kourosh.svg" alt="" className='h-[99px]'/>
              <div>
                <h1 className='text-[#F4E4E4] text-[16px] font-semibold leading-5'>Kourosh Sahm</h1>
                <p className='text-[#A1A1AA] text-[16px] font-semibold leading-5'>Founder,CEO</p>
              </div>
            </div>
            <p className='text-[#A1A1AA] text-[12px] font-semibold leading-5'>Game design graduate, ex-Unity developer, led 10+ titles, GDC speaker, Unreal expert, BAFTA nominee, passionate storyteller.</p>
          </div>
          <div className='flex flex-col gap-[18px] px-3 py-[14px] bg-[#141414] rounded-2xl'>
            <div className='flex gap-4 items-center'>
              <img src="/assets/kourosh.svg" alt="" className='h-[99px]'/>
              <div>
                <h1 className='text-[#F4E4E4] text-[16px] font-semibold leading-5'>Momin Sohail Wyne</h1>
                <p className='text-[#A1A1AA] text-[16px] font-semibold leading-5'>Founder,CEO</p>
              </div>
            </div>
            <p className='text-[#A1A1AA] text-[12px] font-semibold leading-5'>Game design graduate, ex-Unity developer, led 10+ titles, GDC speaker, Unreal expert, BAFTA nominee, passionate storyteller.</p>
          </div>
          <div className='flex flex-col gap-[18px] px-3 py-[14px] bg-[#141414] rounded-2xl'>
            <div className='flex gap-4 items-center'>
              <img src="/assets/kourosh.svg" alt="" className='h-[99px]'/>
              <div>
                <h1 className='text-[#F4E4E4] text-[16px] font-semibold leading-5'>KRaksha Sashna</h1>
                <p className='text-[#A1A1AA] text-[16px] font-semibold leading-5'>Senior Advisor</p>
              </div>
            </div>
            <p className='text-[#A1A1AA] text-[12px] font-semibold leading-5'>Game design graduate, ex-Unity developer, led 10+ titles, GDC speaker, Unreal expert, BAFTA nominee, passionate storyteller.</p>
          </div>
          <div className='flex flex-col gap-[18px] px-3 py-[14px] bg-[#141414] rounded-2xl'>
            <div className='flex gap-4 items-center'>
              <img src="/assets/kourosh.svg" alt="" className='h-[99px]'/>
              <div>
                <h1 className='text-[#F4E4E4] text-[16px] font-semibold leading-5'>Raksha Sashna</h1>
                <p className='text-[#A1A1AA] text-[16px] font-semibold leading-5'>Senior Advisor</p>
              </div>
            </div>
            <p className='text-[#A1A1AA] text-[12px] font-semibold leading-5'>Game design graduate, ex-Unity developer, led 10+ titles, GDC speaker, Unreal expert, BAFTA nominee, passionate storyteller.</p>
          </div>
        </div>
      </div>


      {/* What our clients say */}
      <div className='px-[22px]'>
        <div className='pt-[72px] pb-[44px] '>
          <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-8  sm:pt-0 pb-[32px]'>What Our Clients Say</h1>
          <p className='text-[13px] text-[#A1A1AA] font-medium text-center leading-5'>We craft digital products that look sharp and work flawlessly. From games to enterprise tools, we blend design, strategy, and tech to build experiences that scale and perform.</p>
        </div>
        <div className="flex justify-between">
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-[28px] px-[18px] py-6  bg-[#111215] rounded-[20px]"
            >
              <div className="flex items-center gap-[21px]">
                <img src={t.avatar} alt={t.name} />
                <div>
                  <h1 className="text-[20px] text-[#F7F7F7] font-bold leading-[30px]">
                    {t.name}
                  </h1>
                  <p className="text-[12px] text-white leading-[15px] ">
                    {t.title}
                  </p>
                </div>
              </div>
              <p className="text-[12px] text-[#838383] leading-[20px]">
                {t.message}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 w-full pt-[18px]">
          <button className="p-3" onClick={handlePrev}>
            <ArrowLeft />
          </button>
          <button className="p-3" onClick={handleNext}>
            <ArrowRight />
          </button>
        </div>
      </div>


      {/* the last section */}
      <div className='px-[22px] pt-[71px] pb-[48px]'>    
        <div className='bg-[url("/assets/bgnetsol.png")] py-[32px] flex flex-col items-center bg-cover
        bg-center rounded-[32px]'>
          <h1 className=' text-[20px] font-bold leading-[32px] tracking-[-1.2px] text-[#EDF3FF] text-center px-[29px] pb-[30px]'>We don’t just design what looks good. We craft what works great.</h1>
          <Link to="/contact">
          <button className='text-white bg-[#008E99] py-3 px-5 rounded-[12px]'>Contact Us</button></Link>
        </div>
      </div>
    </div>
  )
}

export default MobAbout