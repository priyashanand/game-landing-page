import React from 'react'

interface LogoSliderProps {
  logoUrls: string[];
}

const LogoSlider: React.FC<LogoSliderProps> = ({ logoUrls }) => {
  const logoStyles = [
    "w-[155px] h-[57px] object-contain",
    "w-[239px] h-[70px] object-contain",
    "w-[164px] h-[48px] object-contain",
    "w-[268px] h-[63px] object-contain",
    "w-[164px] h-[70px] object-contain"
  ];

  // Repeat once (only 2 sets needed)
  const duplicatedLogos = [...logoUrls, ...logoUrls];

  return (
    <div className="relative w-full overflow-hidden pt-10">
      <div className="flex items-center w-max animate-scrollX gap-10">
        {duplicatedLogos.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Partner Logo ${index}`}
            className={`shrink-0 ${logoStyles[index % logoStyles.length]}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
