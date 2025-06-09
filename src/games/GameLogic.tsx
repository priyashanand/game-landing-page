import * as React from "react";
import { Link } from "react-router-dom";

// Feature Card Component
interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, title, description }) => {
  return (
    <article className="grow px-[20px] sm:px-10 py-[24px] sm:py-12 w-full rounded-[14px] sm:rounded-3xl bg-[#141414] h-full">
      <img src={iconSrc} alt={title} className="object-contain aspect-square w-[37px] sm:w-[78px]" />
      <h3 className="mt-[17px] sm:mt-9 text-[20px] sm:text-2xl font-semibold tracking-tight sm:leading-loose text-[#F4E4E4]">
        {title}
      </h3>
      <p className="mt-[12px] sm:mt-4 text-[13px] sm:text-xl sm:leading-7 text-zinc-400">
        {description}
      </p>
    </article>
  );
};

function GameLogic() {
  return (
    <section className="w-full px-[22px] sm:px-[104px] pt-[72px] sm:pt-[219px] sm:pb-[120px]">
      {/* Header Section */}
      <div className="w-full">
        <div className="flex flex-col sm:flex-row gap-[34px] sm:gap-5 items-stretch">
          {/* Left Side: Main Text Card */}
          <div className="sm:w-[69%]">
            <article className="grow w-full rounded-3xl bg-[#101215] h-full">
              <img src="/assets/game1.png" alt="" className="w-10 sm:w-12 absolute sm:pt-6"/>
              <div className="overflow-hidden py-[28px] sm:py-12 pl-[35px] sm:pl-10 w-full h-full flex flex-col justify-between gap-[26px] sm:gap-[0]">
                <h2 className="sm:pr-24 max-w-full text-[24px] sm:text-5xl font-semibold text-white sm:leading-[64px] ">
                  Game Logic –<br />
                  Brains Behind the Play
                </h2>
                <Link to="/about">
                <button className="overflow-hidden gap-2.5 self-start px-[24px] sm:px-5 py-[5px] sm:py-7 sm:mt-12 text-[10px] sm:text-xl font-medium leading-none text-white bg-teal-600 rounded-[10px] sm:rounded-xl min-h-[34px] sm:min-h-[72px] w-[157px] sm:w-[277px]">
                  Know More About Us
                </button>
                </Link>
              </div>
            </article>
          </div>

          {/* Right Side: FeatureCard */}
          <div className="sm:ml-5 sm:w-[31%]">
            <FeatureCard
              iconSrc="/assets/logic1.png"
              title="Progression-Based"
              description="Unlock rewards and milestones that keep players progressing."
            />
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="mt-[34px] sm:mt-14">
        <div className="flex flex-col sm:flex-row gap-[34px] sm:gap-5 items-stretch">
          <div className="sm:w-[33%]">
            <FeatureCard
              iconSrc="/assets/logic2..png"
              title="Puzzle & Strategy"
              description="We craft logic that rewards thinking, pattern recognition, and skillful decision-making."
            />
          </div>
          <div className="sm:ml-5 sm:w-[33%]">
            <FeatureCard
              iconSrc="/assets/logic3.png"
              title="Combat & Action"
              description="We fine-tune every mechanic to feel snappy, responsive, and brutally fair."
            />
          </div>
          <div className="sm:ml-5 sm:w-[33%]">
            <FeatureCard
              iconSrc="/assets/logic4.png"
              title="Looping & Replay"
              description="Design addictive gameplay loops that balance challenge, progression, and surprise"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameLogic;
