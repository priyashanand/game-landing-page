function Footer() {
  return (
    <footer className="flex flex-col items-center px-[104px] pt-6 pb-6 max-md:px-5">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[24px] sm:gap-10 justify-center sm:justify-between items-center max-w-full sm:border-b border-solid border-b-[color:var(--neutral-015,rgba(255,255,255,0.10))] w-full pb-[23px]">
        <h2 className="self-stretch my-auto text-[18px] sm:text-2xl text-center sm:text-start font-semibold tracking-tighter leading-tight text-neutral-200">
          Clyde.
        </h2>
        <nav className="flex sm:gap-[30px] items-center justify-between self-stretch my-auto text-[14px] sm:text-lg font-medium min-h-[49px min-w-[60px] text-[#9D9D9D] sm:text-neutral-200 px-[30px] sm:px-0">
          <a href="#" className="self-stretch my-auto hover:text-white">Home</a>
          <a href="/games" className="self-stretch my-auto hover:text-white">Games</a>
          <a href="/casestudies" className="self-stretch my-auto hover:text-white">CaseStudies</a>
          <a href="/contact" className="self-stretch my-auto hover:text-white">Contact Us</a>
        </nav>
      </div>
      <div className="sm:hidden w-full pt-[22px] border-t-1 border-[#111111]">
        <p className="self-stretch my-auto text-center text-sm font-medium leading-none text-[#5F5F5F] sm:text-slate-300 pt-[30px]">
          © Clyde 2025. All rights reserved
        </p>
      </div>
      <div className=" hidden sm:flex flex-wrap gap-10 justify-between items-center mt-6 w-full ">
        <p className="self-stretch my-auto text-sm font-medium leading-none text-slate-300">
          © Clyde 2025. All rights reserved
        </p>        
      </div>
    </footer>
  );
}

export default Footer;
