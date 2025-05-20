import React from 'react';
import SliderCaseCard from '../components/SliderCaseCard';

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
    imageUrl: '/assets/cardimg3.png',
    url:'/csp/netsol'

  },
  {
    description:
      'For an ed-tech client, we built an intuitive dashboard and personalized learning paths. The result: better engagement, reduced churn, and improved outcomes.',
    imageUrl: '/assets/cardimg4.png',
    url:'/csp/metaende'

  },
  {
    description:
      'A health and wellness app came to us with low retention. Our redesign simplified navigation and emphasized habit-building, boosting long-term usage metrics.',
    imageUrl: '/assets/cardimg5.png',
    url:'/csp/cerwinvega'

  },
];

const Slider: React.FC = () => {
  // Duplicate the array to create an infinite scroll loop
  const allSlides = [...caseStudies, ...caseStudies];

  return (
    <div className="bg-black py-10 overflow-hidden relative">
      <div className="flex w-max gap-10 animate-slide">
        {allSlides.map((item, index) => (
          <SliderCaseCard key={index} description={item.description} imageUrl={item.imageUrl} url={item.url} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
