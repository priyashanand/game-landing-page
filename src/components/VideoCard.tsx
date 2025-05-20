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
    <section className="p-5 mx-auto my-0 max-w-[888px] max-md:p-4 max-sm:p-2.5">
      <article className="overflow-hidden relative bg-[#0F0F0F] rounded-[36px] w-[888px]">
        <VideoPreview imageUrl={imageUrl} name={name} title={title} />
        <h2 className="px-16 py-0 mb-8 text-[32px] font-medium leading-10 text-zinc-400 max-md:px-10 max-sm:px-5 max-sm:text-2xl max-sm:leading-9">
          {heading}
        </h2>
      </article>
    </section>
  );
};

export default VideoCard;
