import React from 'react';

interface SliderCaseCardProps {
  description: string;
  imageUrl: string;
}

const SliderCaseCard: React.FC<SliderCaseCardProps> = ({ description, imageUrl }) => {
  return (
    <div className="flex-shrink-0 w-[856px]  rounded-[30px] p-[25px] flex gap-6">
      <img src={imageUrl} alt="card" className="rounded-xl w-1/2 object-cover" />
      <div className="flex flex-col justify-center gap-8 w-1/2">
        <p className="text-[#8B8A8A] text-[16px] md:text-[20px]">
          {description}
        </p>
        <div>
          <button className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-gray-200 transition">
            View Casestudy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderCaseCard;
