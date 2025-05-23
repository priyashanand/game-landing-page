import React from "react";
import VideoCard from "../components/VideoCard";
import VideoMobileSlider from "../components/VideoMobileSlider";

const videoData = [
  {
    imageUrl: "/assets/video1.png",
    name: "Mathew Thomas",
    title: "Founder, Revolving Games",
    heading: "Founder talks about his website redesign",
  },
  {
    imageUrl: "/assets/video1.png",
    name: "Alisha Ray",
    title: "Creative Director, Nova Studios",
    heading: "Why they chose our UI expertise",
  },
  {
    imageUrl: "/assets/video1.png",
    name: "Chris Van",
    title: "CEO, Pixel Forge",
    heading: "Improving gameplay through better UX",
  },
];

// Duplicate for infinite scroll illusion
const allSlides = [...videoData, ...videoData];

const VideoSlider: React.FC = () => {
  return (
    <div className="overflow-hidden bg-black py-10 pt-[130px]">
      <h1 className="text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight px-[104px] pb-[64px]">Hear it from their experience</h1>
      <div className="hidden sm:flex w-max animate-slide gap-10">
        {allSlides.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
      <div className="sm:hidden px-[22px]">
        <VideoMobileSlider/>
      </div>
    </div>
  );
};

export default VideoSlider;
