import React from 'react';
import SliderCaseIntroCard from '../components/SliderCaseIntroCard';

const caseStudies = [
  { imageUrl: '/assets/csimg1.png' },
  { imageUrl: '/assets/csimg2.png' },
  { imageUrl: '/assets/csimg3.png' },
  { imageUrl: '/assets/csimg4.png' },
  { imageUrl: '/assets/csimg5.png' },
];

const IntroSlider: React.FC = () => {
  // Duplicate once for seamless scroll
  const allSlides = [...caseStudies, ...caseStudies];

  return (
    <div className="hidden sm:block overflow-hidden w-full py-10">
      <div className="flex w-max gap-10 animate-slide">
        {allSlides.map((item, index) => (
          <SliderCaseIntroCard key={index} imageUrl={item.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default IntroSlider;
