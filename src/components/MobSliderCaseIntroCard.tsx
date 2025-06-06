import React from 'react';

interface SliderCaseCardProps {
  imageUrl: string;
}

const MobSliderCaseCard: React.FC<SliderCaseCardProps> = ({ imageUrl }) => {
  return (
    <div className="flex-shrink-0 w-[236px] sm:w-[346px] rounded-[12px] sm:rounded-[30px] overflow-hidden">
      <img
        src={imageUrl}
        alt="card"
        className="w-full h-full object-cover rounded-[30px]"
      />
    </div>
  );
};

export default MobSliderCaseCard;
