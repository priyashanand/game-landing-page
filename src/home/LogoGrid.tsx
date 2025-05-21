import React from "react";

interface LogoGridProps {
  logoUrls: string[];
}
// const LogoSlider:React.FC <LogoGridProps> = ({logoUrls}) =>{
//   return(
//     <div>

//     </div>
//   )
// }

const LogoGrid: React.FC<LogoGridProps> = ({ logoUrls }) => {
  // Define the width and height classes for each logo
  const logoStyles = [
    "w-[155px] h-[57px] object-contain",
    "w-[239px] h-[70px] object-contain",
    "w-[164px] h-[48px] object-contain",
    "w-[268px] h-[63px] object-contain",
    "w-[164px] h-[70px] object-contain"
  ];

  return (
    <div className="flex gap-5 justify-between items-center mt-20 max-md:grid max-md:grid-cols-3 max-md:gap-10 max-sm:grid-cols-2 max-sm:gap-8">
      {logoUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Partner logo ${index + 1}`}
          className={logoStyles[index]}
        />
      ))}
    </div>
  );
};

export default LogoGrid;
