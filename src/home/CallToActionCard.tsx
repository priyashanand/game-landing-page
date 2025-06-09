import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseStyles = "text-[10px] leading-6 rounded-xl h-[34px] w-[113px] flex items-center justify-center";

  const variantStyles = {
    primary: "bg-[#2B2B2B] text-[#F0F0F0] hover:bg-gray-100",
    secondary: "bg-transparent text-white border border-[#171616] hover:bg-white/10",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const CallToActionCard: React.FC = () => {
  return (
    <section className="flex flex-col items-center p-5 mx-auto max-w-none text-center rounded-2xl bg-neutral-900 h-[184px] w-[329px] max-md:w-full max-md:max-w-[329px] max-sm:p-4 max-sm:max-w-screen-sm max-sm:h-auto text-white">
      <h2 className="mb-3 text-lg font-semibold tracking-tighter leading-8 max-sm:text-base max-sm:leading-7">
        See Great Ideas Come to life
      </h2>
      <p className="mb-7 text-xs leading-5 max-w-[275px] text-zinc-500 max-sm:text-xs max-sm:leading-5">
        Book a 30-minute strategy call with our team — no fluff, just real
        insight. products evolve.ment.
      </p>
      <div className="flex gap-2 justify-center max-sm:w-full">
        <a href="https://calendly.com">
        <Button variant="primary" className="">
          Schedule A Call
        </Button>
        </a>
        <Link to="/casestudies">
        <Button variant="secondary" className="">
          Explore Our Work
        </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToActionCard;
