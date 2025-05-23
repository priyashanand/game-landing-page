import React from 'react'
import PlayButton from '../components/PlayButton';

const caseStudies = {
  revolvingGames: {
    mainImage: "/assets/revolving-main.png",
    beforeImage: "/assets/revolving-before.png",
    afterImage: "/assets/revolving-after.png",
    logoImage: "/assets/section2img1.png",
    overview: {
      lightText: "Revolving Games, an ambitious game studio, faced low player retention and engagement due to unclear UI and limited scalability. Their existing design lacked the immersive feel today’s gamers expect. Partnering with us, they underwent a full UX overhaul—redefining their game architecture to improve clarity, deepen player immersion, and support long-term scalability. The result? ",
      boldText: "Sharper retention, higher playtime, and a smoother path to game expansion."
    },
    data: [
      { main: "70%", desc: "boost in player retention" },
      { main: "3x", desc: "Average play session duration" },
      { main: "84%", desc: "reduction in player drop-off" }
    ],
    problem: "Revolving Games’ website lacked a cohesive user journey. The design was visually outdated, slow to load, and not optimized for gamers — resulting in poor engagement, high bounce rates, and low conversion from visitors to sign-ups.",
    solution: [
      "Conducted a full UX audit to identify friction points",
      "Redesigned the UI with a bold, gamer-centric aesthetic",
      "Built a scalable design system for consistency",
      "Rebuilt the site using modern, high-performance frameworks",
      "Added interactive elements and animations to boost engagement"
    ],
    beforeClyde: [
      "Max bounce rate - minimal user engagement",
      "Outdated UI that didn’t reflect the brand’s gaming identity",
      "Low conversion and sign-up rates",
      "Confusing navigation and scattered information"
    ],
    afterClyde: [
      "Bounce rate reduced by 50%",
      "Load times improved 3x, enhancing performance",
      "Load times improved 3x",
      "Streamlined navigation with focused user journeys with bold, immersive UI tailored"
    ],
    founder: {
      image: "/assets/founder1.png",
      name: "Mathew Thomas",
      desc: "Founder, Revolving Games"
    }
  },

  netsol: {
    mainImage: "/assets/netsol-main.png",
    beforeImage: "/assets/netsol-before.png",
    afterImage: "/assets/netsol-after.png",
    logoImage: "/assets/section2img2.png",
    overview: {
      lightText: "Netsol needed a product that could translate their complex software into intuitive workflows.",
      boldText: "Our UX focused approach simplified interactions and improved platform adoption."
    },
    data: [
      { main: "60%", desc: "Decrease in user onboarding time" },
      { main: "80%", desc: "Increase in B2B client satisfaction" },
      { main: "12%", desc: "Faster task completion rates" }
    ],
    problem: "Enterprise users were overwhelmed by dense UIs with steep learning curves.",
    solution: "We mapped their product workflows and implemented progressive disclosure patterns to declutter the experience.",
    beforeClyde: [
      "Complex feature bloat",
      "Low onboarding success",
      "Outdated UI",
      "Non-intuitive layout"
    ],
    afterClyde: [
      "Streamlined navigation",
      "Onboarding wizard built-in",
      "Modern visual language",
      "Cleaner dashboards"
    ],
    founder: {
      image: "/assets/founder-netsol.png",
      name: "Adeel Sarfraz",
      desc: "Adeel highlights the productivity boost and UX gains from our redesign efforts."
    }
  },

  metaende: {
    mainImage: "/assets/metaende-main.png",
    beforeImage: "/assets/metaende-before.png",
    afterImage: "/assets/metaende-after.png",
    logoImage: "/assets/section2img3.png",
    overview: {
      lightText: "Metaende was losing users due to poor mobile performance and dated aesthetics.",
      boldText: "We optimized responsiveness and created a cutting-edge interface that reflects their brand innovation."
    },
    data: [
      { main: "3x", desc: "Faster mobile load time" },
      { main: "25%", desc: "Uplift in daily active users" },
      { main: "50%", desc: "Boost in design system adoption internally" }
    ],
    problem: "The mobile version lacked scalability and user engagement dropped sharply on small screens.",
    solution: "We rebuilt the mobile experience with modular components and performance-first design.",
    beforeClyde: [
      "Laggy mobile views",
      "Poor visual consistency",
      "Limited accessibility",
      "Confusing CTAs"
    ],
    afterClyde: [
      "Smooth mobile UX",
      "Cohesive design system",
      "WCAG-compliant interface",
      "Conversion-focused layout"
    ],
    founder: {
      image: "/assets/founder-metaende.png",
      name: "Elena Ortiz",
      desc: "Elena discusses how our team helped Metaende break into new global markets with a future-proof experience."
    }
  },

  cerwinvega: {
    mainImage: "/assets/cerwinvega-main.png",
    beforeImage: "/assets/cerwinvega-before.png",
    afterImage: "/assets/cerwinvega-after.png",
    logoImage: "/assets/section2img4.png",
    overview: {
      lightText: "CerwinVega’s e-commerce funnel was underperforming and lacked a sense of brand identity.",
      boldText: "We delivered a new digital storefront that amplifies both product and personality."
    },
    data: [
      { main: "2.5x", desc: "Increase in conversion rate" },
      { main: "70%", desc: "Improved brand recognition among users" },
      { main: "15%", desc: "Uplift in returning customer rate" }
    ],
    problem: "The site didn’t reflect the premium nature of CerwinVega’s audio equipment, leading to poor trust.",
    solution: "We crafted a brand-first design with visual storytelling and high-res product imagery.",
    beforeClyde: [
      "Low conversion funnel",
      "Generic UI",
      "Inconsistent branding",
      "Lack of social proof"
    ],
    afterClyde: [
      "Premium design polish",
      "Brand-driven UI",
      "Integrated testimonials",
      "Stronger product imagery"
    ],
    founder: {
      image: "/assets/founder-cerwin.png",
      name: "Jordan Lee",
      desc: "Jordan reflects on how the redesign made CerwinVega a standout in the audio gear marketplace."
    }
  }
};

interface CaseNameProps {
  casename: keyof typeof caseStudies; // Type-safe key from caseStudies
}

const CasePageBody: React.FC<CaseNameProps> = ({ casename }) => {
  const selectedCase = caseStudies[casename];
  if (!selectedCase) {
    return <p>Case study not found.</p>;
  }

  return (
    <div className='px-[22px] sm:px-[104px]'>
      <p className='hidden sm:block text-[20px] text-[#A1A1AA] sm:pt-[39px]'>Case studies &gt; {casename}</p>
      <h1 className=' text-[24px] ms:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-center sm:text-left text-transparent bg-clip-text leading-tight pt-[63px] sm:pt-[56px]'>3× playtime. 70% more retention. <br className='hidden sm:block' /> A design revamp that kept players hooked.</h1>
      <div className="flex flex-col sm:flex-row w-full gap-[24px] sm:gap-[40px] overflow-hidden pt-[48px] sm:pt-[70px]">
        <img
          src={selectedCase.mainImage}
          alt=""
          className=" sm:w-[63.986%] object-cover"
        />
        <img
          src="/assets/casepage.png"
          alt=""
          className="sm:w-[33.334%] object-cover rounded-[40px]"
        />
      </div>



      <div>
        <h1 className='text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-center sm:text-start text-transparent bg-clip-text leading-tight pt-[72px] sm:pt-[100px]'>Overview</h1>
        <p className='text-[13px] sm:text-[20px] text-[#A1A1AA] pt-[28px] sm:pt-[40px]'>{selectedCase.overview.lightText}
        <span className='text-[13px] sm:text-[20px] font-bold text-[#EBEBEB]'>{selectedCase.overview.boldText}</span></p>
      </div>

      <div className='flex flex-col sm:flex-row gap-[22px] sm:gap-[36px] sm:px-[165px] justify-between pt-[42px] sm:pt-[60px]'>
        <div className='flex flex-col items-center bg-[#101010] rounded-[16px] sm:rounded-[20px] sm:w-1/3'>
          <h1 className='text-[24px] sm:text-[32px] font-extrabold text-white pt-[36px] sm:pt-[62px]'>{selectedCase.data[0].main}</h1>
          <p className='text-[14px] sm:text-[16px] text-white sm:px-[69px] pb-[36px] sm:pb-[62px]'>{selectedCase.data[0].desc}</p>
        </div>
        <div className='flex flex-col items-center bg-[#101010] rounded-[16px] sm:rounded-[20px] sm:w-1/3'>
          <h1 className='text-[24px] sm:text-[32px] font-extrabold text-white pt-[36px] sm:pt-[62px]'>{selectedCase.data[1].main}</h1>
          <p className='text-[14px] sm:text-[16px] text-white sm:px-[69px] pb-[36px] sm:pb-[62px]'>{selectedCase.data[1].desc}</p>
        </div>
        <div className='flex flex-col items-center bg-[#101010] rounded-[16px] sm:rounded-[20px] sm:w-1/3'>
          <h1 className='text-[24px] sm:text-[32px] font-extrabold text-white pt-[36px] sm:pt-[62px]'>{selectedCase.data[2].main}</h1>
          <p className='text-[14px] sm:text-[16px] text-white sm:px-[69px] pb-[36px] sm:pb-[62px]'>{selectedCase.data[2].desc}</p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-[32px] sm:gap-[34px] pt-[72px] sm:pt-[100px]'>
  {/* Before Clyde */}
        <div className='sm:w-1/2 bg-[#111215] rounded-[12px] sm:rounded-[36px] px-[18px] sm:px-[28px] py-[32px] sm:py-[48px]'>
          <h1 className='text-[20px] sm:text-[36px] font-medium text-white'>Before Clyde</h1>
          <img src={selectedCase.beforeImage} alt="" className='pt-[24px] sm:pt-[32px]'/>
          
          {selectedCase.beforeClyde.map((point, index) => (
            <div key={index} className='flex items-start gap-2 pt-[28px] text-[14px] sm:text-[24px] text-[#A1A1AA]'>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="#00C6CC" xmlns="http://www.w3.org/2000/svg" className='mt-[10px] '>
                <circle cx="4" cy="4" r="4" />
              </svg>
              <p className='pl-[16px]'>{point}</p>
            </div>
          ))}
        </div>

        {/* After Clyde */}
        <div className='sm:w-1/2 bg-[#111215] rounded-[12px] sm:rounded-[36px] px-[18px] sm:px-[28px] py-[32px] sm:py-[48px]'>
          <h1 className='text-[20px] sm:text-[36px] font-medium text-white'>After</h1>
          <img src={selectedCase.afterImage} alt="" className='pt-[32px]'/>
          
          {selectedCase.afterClyde.map((point, index) => (
            <div key={index} className='flex items-start gap-2 pt-[28px] text-[14px] sm:text-[24px] text-[#A1A1AA]'>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="#00C6CC" xmlns="http://www.w3.org/2000/svg" className='mt-[10px]'>
                <circle cx="4" cy="4" r="4" />
              </svg>
              <p className='pl-[16px]'>{point}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='hidden sm:block pt-[115px]'>
        <div className="flex justify-between rounded-[44px] bg-[#131313]">
          {/* Text Block */}
          <div className="flex flex-col items-start justify-between w-1/2 gap-16 pl-[60px] py-[60px]">
            <div>
              <img
                src={selectedCase.logoImage}
                alt=""
                className="max-w-full h-auto object-contain"
              />
            </div>
            <h1 className="text-[32px] text-white font-medium">
              Founder of the company shares his experience with Clyde
            </h1>
            <div>
              <p className="text-[24px] text-[#BEBDBD] font-medium">{selectedCase.founder.name}</p>
              <p className="text-[20px] text-[#666666] font-normal">{selectedCase.founder.desc}</p>
            </div>
          </div>

          {/* Play Button in Between */}
          <div className="flex-shrink-0 place-content-center">
            <PlayButton />
          </div>

          {/* Founder Image */}
          <div className="w-1/3 flex justify-center bg-[radial-gradient(49.55%_45.34%_at_50%_0%,rgba(94,176,239,0.5)_0%,rgba(0,0,0,0)_100%),radial-gradient(49.55%_45.34%_at_50%_100%,rgba(94,176,239,0.5)_0%,rgba(0,0,0,0)_100%),radial-gradient(49.55%_45.34%_at_100%_50%,rgba(94,176,239,0.5)_0%,rgba(0,0,0,0)_100%)] bg-no-repeat bg-cover pl-[60px] pr-[60px]">
            <img
              src={selectedCase.founder.image}
              alt=""
              className="max-w-full h-auto object-contain rounded-xl "
            />
          </div>
        </div>
      </div>

      <div className='pt-[72px]'>
        <div className='sm:hidden bg-[#0F0F0F] px-[24px] py-[36px] rounded-[12px]'>
          <div className='flex justify-center'>
            <img src={selectedCase.logoImage} alt="" className='h-[36px]'/>
          </div>
          <h1 className=' text-[24px] ms:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-center sm:text-left text-transparent bg-clip-text leading-tight pt-[63px] sm:pt-[56px]'>Founder of the company share his experience with Clyde</h1>
          <div>
            <div className='absolute '>
              <PlayButton/>
            </div>
            <img src={selectedCase.founder.image} alt="" />
          </div>
          <p className='text-center text-[16px] font-medium text-[#BEBDBD]'>{selectedCase.founder.name}</p>
          <p className='text-center text-[12px] font-medium text-[#666666]'>{selectedCase.founder.desc}</p>
        </div>
      </div>



      <div className='flex flex-col sm:flex-row justify-between gap-[41px] pt-[77px] sm:pt-[117px]'>
        <div className='py-[36px] sm:py-[115px] px-[18px] sm:px-[40px] sm:w-[33%] rounded-[12px] sm:rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[linear-gradient(135deg,rgba(27,30,35,0.5)_0%,rgba(22,25,29,0.5)_100%)] backdrop-blur-[6px]'>
          <h1 className='text-[20px] sm:text-[32px] font-bold pb-[40px] text-white'>The Problem</h1>
          <p className='text-[14px] sm:text-[22px] text-[#A1A1AA]'>{selectedCase.problem}</p>
        </div>
        <div className='py-[36px] sm:py-[115px] px-[18px] sm:px-[40px] sm:w-[66%] rounded-[12px] sm:rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[linear-gradient(135deg,rgba(27,30,35,0.5)_0%,rgba(22,25,29,0.5)_100%)] backdrop-blur-[6px]'>
          <h1 className='text-[20px] sm:text-[32px] font-bold pb-[44px] text-white'>How we solved it</h1>
          <div className='flex flex-col gap-[25px]'>
            <p className='text-[14px] sm:text-[22px] text-[#A1A1AA]'>{selectedCase.solution[0]}</p>
            <p className='text-[14px] sm:text-[22px] text-[#A1A1AA]'>{selectedCase.solution[1]}</p>
            <p className='text-[14px] sm:text-[22px] text-[#A1A1AA]'>{selectedCase.solution[2]}</p>
            <p className='text-[14px] sm:text-[22px] text-[#A1A1AA]'>{selectedCase.solution[3]}</p>
            <p className='text-[14px] sm:text-[22px] text-[#A1A1AA]'>{selectedCase.solution[4]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasePageBody;