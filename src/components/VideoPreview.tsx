import React from "react";
import PlayButton from "./PlayButton";

interface VideoPreviewProps {
  imageUrl: string;
  name: string;
  title: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ imageUrl, name, title }) => {
  return (
    <div className="overflow-hidden relative sm:mb-6 w-full rounded-[32px] max-sm:rounded-3xl sm:px-[60px] sm:pt-[43px] ">
      <img
        src={imageUrl}
        className="block w-full h-auto"
        alt="Video preview"
      />
      <div className="absolute top-[75px] left-[93px] max-sm:top-5 max-sm:left-5">
        <h1 className="text-3xl font-medium leading-10 text-white max-md:text-2xl max-sm:text-xl max-sm:leading-8">
          {name}
        </h1>
        <p className="text-xl font-medium leading-10 text-stone-400 max-md:text-lg max-sm:text-base max-sm:leading-6">
          {title}
        </p>
      </div>
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <PlayButton />
      </div>
    </div>
  );
};

export default VideoPreview;
