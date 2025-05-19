import * as React from "react";

// Feature Card Component
interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, title, description }) => {
  return (
    <article className="grow px-10 py-12 w-full rounded-3xl bg-neutral-900 h-full">
      <img src={iconSrc} alt={title} className="object-contain aspect-square w-[78px]" />
      <h3 className="mt-9 text-2xl font-semibold tracking-tight leading-loose text-red-100">
        {title}
      </h3>
      <p className="mt-4 text-xl leading-7 text-zinc-400">
        {description}
      </p>
    </article>
  );
};

function GameLogic() {
  return (
    <section className="w-full px-[104px] pt-[219px]">
      {/* Header Section */}
      <div className="w-full">
        <div className="flex gap-5 items-stretch">
          {/* Left Side: Main Text Card */}
          <div className="w-[69%]">
            <article className="grow w-full rounded-3xl bg-neutral-900 h-full">
              <div className="overflow-hidden py-12 pl-10 w-full min-h-[348px] h-full flex flex-col justify-between">
                <h2 className="pr-24 max-w-full text-5xl font-semibold text-white leading-[64px] w-[732px]">
                  Game Logic –<br />
                  Brains Behind the Play
                </h2>
                <button className="overflow-hidden gap-2.5 self-start px-5 py-7 mt-12 text-xl font-medium leading-none text-white bg-teal-600 rounded-xl min-h-[72px] w-[277px]">
                  Know More About Us
                </button>
              </div>
            </article>
          </div>

          {/* Right Side: FeatureCard */}
          <div className="ml-5 w-[31%]">
            <FeatureCard
              iconSrc="/assets/logic1.png"
              title="Progression-Based"
              description="Unlock rewards and milestones that keep players progressing."
            />
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="mt-14">
        <div className="flex gap-5 items-stretch">
          <div className="w-[33%]">
            <FeatureCard
              iconSrc="/assets/logic2..png"
              title="Puzzle & Strategy"
              description="We craft logic that rewards thinking, pattern recognition, and skillful decision-making."
            />
          </div>
          <div className="ml-5 w-[33%]">
            <FeatureCard
              iconSrc="/assets/logic3.png"
              title="Combat & Action"
              description="We fine-tune every mechanic to feel snappy, responsive, and brutally fair."
            />
          </div>
          <div className="ml-5 w-[33%]">
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
