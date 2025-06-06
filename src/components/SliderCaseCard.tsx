import React from 'react';
import { Link } from 'react-router-dom';

interface SliderCaseCardProps {
  description: string;
  imageUrl: string;
  url: string
}

const SliderCaseCard: React.FC<SliderCaseCardProps> = ({ description, imageUrl , url}) => {
  return (
    <div className="flex-shrink-0 sm:w-[856px] bg-[#141414] rounded-[30px] sm:p-[25px] flex flex-col sm:flex-row gap-6">
      <img src={imageUrl} alt="card" className="rounded-xl sm:w-1/2 sm:object-cover" />
      <div className="flex flex-col justify-center gap-8 w-1/2">
        <p className="text-[#8B8A8A] text-[16px] md:text-[20px]">
          {description}
        </p>
        <div>
          <Link
          to={url}
          className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-gray-200 transition">
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderCaseCard;
