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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0663489a89124112f32865c4e37f61183e1e7cc0?placeholderIfAbsent=true"
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
        <div className="w-full h-full bg-zinc-400 rounded-lg" />
      </a>
      
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
        aria-label="LinkedIn"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5025d0777bf3116e5b75ee63e32d850931e3b87?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
          alt="LinkedIn"
        />
      </a>
    </div>
  );
};

export default SocialLinks;