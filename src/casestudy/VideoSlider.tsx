import React from "react";
import VideoCard from "../components/VideoCard";

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
    <div className="overflow-hidden bg-black py-10">
      <div className="flex w-max animate-slide gap-10">
        {allSlides.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
