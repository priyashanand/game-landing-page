import React from "react";

const SocialLinks: React.FC = () => {
  return (
    <div className="self-stretch flex items-center gap-[35px] justify-between w-[166px] my-auto">
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
        aria-label="Twitter"
      >
        <img
          src="/assets/social1.png"
          className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
          alt="Twitter"
        />
      </a>
      
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="self-stretch flex w-8 shrink-0 h-8 my-auto hover:opacity-80 transition-opacity"
        aria-label="Instagram"
      >
        <img
          src="/assets/social2.png"
          className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
          alt="Twitter"
        />
      </a>
      
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
        aria-label="LinkedIn"
      >
        <img
          src="/assets/social3.png"
          className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
          alt="LinkedIn"
        />
      </a>
    </div>
  );
};

export default SocialLinks;