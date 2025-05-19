import React from "react";
import { Link } from "react-router-dom";

const ContactHeader: React.FC = () => {
  return (
    <header className="self-center flex w-full max-w-[1215px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
      <div className="text-[rgba(230,230,230,1)] text-2xl font-semibold leading-[1.2] tracking-[-0.96px] my-auto">
        Clyde
      </div>
      <Link 
        to="/" 
        className="flex flex-col items-stretch text-sm text-zinc-400 font-medium leading-6 relative group"
      >
        <div className="bg-blend-normal bg-zinc-950 shadow-[0px_0px_0px_rgba(0,0,0,0)] overflow-hidden px-[22px] py-1.5 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-colors max-md:px-5">
          Back to Home
        </div>
        <div className="bg-blend-normal self-center flex w-[103px] shrink-0 h-px bg-zinc-700 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      </Link>
    </header>
  );
};

export default ContactHeader;