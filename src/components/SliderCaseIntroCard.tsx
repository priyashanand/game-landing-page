import React from 'react';

interface SliderCaseCardProps {
  imageUrl: string;
}

const SliderCaseCard: React.FC<SliderCaseCardProps> = ({ imageUrl }) => {
  return (
    <div className="flex-shrink-0 w-[346px] rounded-[30px] overflow-hidden">
      <img
        src={imageUrl}
        alt="card"
        className="w-full h-full object-cover rounded-[30px]"
      />
    </div>
  );
};

export default SliderCaseCard;
