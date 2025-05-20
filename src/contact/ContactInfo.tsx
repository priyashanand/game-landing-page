import React from "react";
import SocialLinks from "./SocialLinks";

interface ContactInfoProps {
  email: string;
  location: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email, location }) => {
  return (
    <div className="flex items-center justify-between flex-wrap w-full">
      <div className="self-stretch flex flex-col items-stretch text-xl text-[rgba(117,117,117,1)] whitespace-nowrap leading-[1.2] w-[188px] my-auto rounded-[0px_0px_0px_0px]">
        <h3 className="font-bold">Email</h3>
        <a 
          href={`mailto:${email}`} 
          className="font-normal mt-2.5 hover:text-zinc-300 transition-colors"
        >
          {email}
        </a>
      </div>
      
      <div className="self-stretch flex flex-col text-xl text-[rgba(77,77,77,1)] leading-[1.2] w-[234px] my-auto pr-[27px] rounded-[0px_0px_0px_0px]">
        <h3 className="font-bold">Based in</h3>
        <p className="font-normal mt-2.5">{location}</p>
      </div>
      <SocialLinks/>
    </div>
  );
};

export default ContactInfo;