import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
// import SocialLinks from "./SocialLinks";

const ContactUs: React.FC = () => {
  return (
    <div className="w-full mt-[65px] max-md:max-w-full max-md:mt-10 px-[22px] sm:px-[104px] pb-[124px]">
        <div className="sm:gap-[85px] flex justify-between max-md:flex-col max-md:items-stretch">
          {/* Left column with image */}
          <h1 className="sm:hidden text-[24px] sm:text-[48px] text-start font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight ">Contact Us</h1>
          <p className="sm:hidden text-zinc-400 text-[13px] font-normal leading-7 mb-[24px] mt-[7px]">
          We will Answer you questions and issues instantly !
          </p>
          <div className="sm:w-[45%] max-md:w-full max-md:ml-0">
            <img
              src="/assets/contact.png"
              alt="Contact illustration"
              className=" object-contain w-full h-[352px] rounded-3xl "
            />
          </div>
          
          {/* Right column with form and contact info */}
          <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col mt-[23px] max-md:max-w-full max-md:mt-10">
              {/* Section title */}
              <div>
                <h1 className="hidden sm:block text-[rgba(205,205,205,1)] text-[40px] font-medium leading-[1.2]">
                  Contact Us
                </h1>
                
                <p className="hidden sm:block text-zinc-400 text-base font-normal leading-7 mt-[7px]">
                  We will Answer you questions and issues instantly !
                </p>
              </div>
              
              {/* Contact form */}
              <div className=" max-w-full text-base text-[rgba(94,94,94,1)] font-normal leading-[1.2] mt-[60px] max-md:mt-10">
                <ContactForm />
              </div>
              
              {/* Contact information and social links */}
              <div className="self-stretch flex w-full items-center gap-[40px_58px] justify-between flex-wrap mt-[77px] max-md:max-w-full max-md:mt-10">
                <ContactInfo 
                  email="contact@clyde.com" 
                  location="Los Angeles,CA" 
                />
                {/* <SocialLinks /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactUs;