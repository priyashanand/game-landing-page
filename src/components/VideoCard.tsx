import React from "react";
import VideoPreview from "./VideoPreview";

interface VideoCardProps {
  imageUrl: string;
  name: string;
  title: string;
  heading: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ imageUrl, name, title, heading }) => {
  return (
    <section className="sm:p-5 mx-auto my-0 w-screen sm:max-w-[888px] ">
      <article className="overflow-hidden relative bg-[#0F0F0F] rounded-[36px] w-full sm:w-[888px]">
        <VideoPreview imageUrl={imageUrl} name={name} title={title} />
        <h2 className="sm:px-16 sm:py-0 sm:mb-8 text-[16px] sm:text-[32px] font-medium sm:leading-10 text-zinc-400 ">
          {heading}
        </h2>
      </article>
    </section>
  );
};

export default VideoCard;
