import React from 'react';
import SliderCaseCard from '../components/SliderCaseCard';
import HomeMobSlider from '../components/HomeMobSlider';

const caseStudies = [
  {
    description:
      'Revolving Games team needed a bold new identity and a cleaner dashboard to improve player engagement and retention. Brand refresh + dashboard overhaul = smoother play and higher retention.',
    imageUrl: '/assets/cardimg2.png',
    url:'/csp/revolvingGames'
  },
  {
    description:
      'A cutting-edge fintech startup wanted to enhance trust and usability with a clean UI. We streamlined their onboarding and created a visual system that reflects modern finance.',
    imageUrl: '/assets/cardimg5.png',
    url:'/csp/netsol'

  }
];

const Slider: React.FC = () => {
  // Duplicate the array to create an infinite scroll loop
  const allSlides = [...caseStudies, ...caseStudies];

  return (
    <div className=" bg-[#09090B] pb-14 pt-10 overflow-hidden relative">
      <div className="flex justify-center sm:justify-start sm:px-[104px] sm:pb-[80px]">
        <div className="text-[23px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight sm:mb-6">
          Case Studies
        </div>
      </div>
      <div className="hidden sm:flex w-max gap-10 animate-slide">
        {allSlides.map((item, index) => (
          <SliderCaseCard key={index} description={item.description} imageUrl={item.imageUrl} url={item.url} />
        ))}
      </div>
      <div className='sm:hidden px-[22px]'>
        <HomeMobSlider />
      </div>
    </div>
  );
};

export default Slider;
