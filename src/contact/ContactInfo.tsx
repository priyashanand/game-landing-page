import React from "react";

interface ContactInfoProps {
  email: string;
  location: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email, location }) => {
  return (
    <div className="flex items-center justify-between flex-wrap w-full">
      <div className="self-stretch hidden sm:flex flex-col items-stretch text-[16px] sm:text-xl sm:text-[rgba(117,117,117,1)] whitespace-nowrap sm:first-letter:leading-[1.2] sm:w-[188px] my-auto rounded-[0px_0px_0px_0px]">
        <h3 className="font-bold text-[]">Email</h3>
        <a 
          href={`mailto:${email}`} 
          className="font-normal mt-2.5 hover:text-zinc-300 transition-colors"
        >
          {email}
        </a>
      </div>
      
      <div className="self-stretch hidden sm:flex flex-col text-[16px] sm:text-xl  sm:leading-[1.2] sm:w-[234px] my-auto pr-[27px] rounded-[0px_0px_0px_0px]">
        <h3 className="font-bold text-[#757575] sm:text-[rgba(77,77,77,1)]">Based in</h3>
        <p className="font-normal mt-2.5 text-[#E1DEDE] sm:text-[rgba(77,77,77,1)]">{location}</p>
      </div>

      <div className=" sm:hidden flex justify-between w-full">
        <div className="self-stretch flex flex-col items-stretch text-[16px] sm:text-xl sm:text-[rgba(117,117,117,1)] whitespace-nowrap sm:first-letter:leading-[1.2] sm:w-[188px] my-auto rounded-[0px_0px_0px_0px]">
          <h3 className="font-semibold text-[#757575]">Email</h3>
          <a 
            href={`mailto:${email}`} 
            className="font-normal mt-2.5 text-[#E1DEDE] hover:text-zinc-300 transition-colors"
          >
            {email}
          </a>
        </div>
        
        <div className="self-stretch flex flex-col text-[16px] sm:text-xl  sm:leading-[1.2] sm:w-[234px] my-auto pr-[27px] rounded-[0px_0px_0px_0px]">
          <h3 className="font-semibold text-[#757575] sm:text-[rgba(77,77,77,1)]">Based in</h3>
          <p className="font-normal mt-2.5 text-[#E1DEDE] sm:text-[rgba(77,77,77,1)]">{location}</p>
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;