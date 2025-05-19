function Footer() {
  return (
    <footer className="flex flex-col items-center px-[104px] pt-10 pb-6 max-md:px-5">
      <div className="flex flex-wrap gap-10 justify-between items-center max-w-full border-b border-solid border-b-[color:var(--neutral-015,rgba(255,255,255,0.10))] w-full">
        <h2 className="self-stretch my-auto text-2xl font-semibold tracking-tighter leading-tight text-neutral-200">
          Clyde.
        </h2>
        <nav className="flex gap-8 items-center self-stretch my-auto text-lg font-medium min-h-[49px] min-w-60 text-neutral-200">
          <a href="#" className="self-stretch my-auto hover:text-white">Home</a>
          <a href="#" className="self-stretch my-auto hover:text-white">Games</a>
          <a href="#" className="self-stretch my-auto hover:text-white">About</a>
          <a href="#" className="self-stretch my-auto hover:text-white">Contact Us</a>
        </nav>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center mt-6 w-full ">
        <p className="self-stretch my-auto text-sm font-medium leading-none text-slate-300">
          © Clyde 2025. All rights reserved
        </p>
        <div className="flex gap-8 items-start self-stretch my-auto min-w-60">
          <a href="#" aria-label="Social media link">
            <img
              src="/assets/footerimg1.png"
              alt="Social media icon"
              className="object-contain shrink-0 w-10 aspect-square rounded-[56px]"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="/assets/footerimg2.png"
              alt="Social media icon"
              className="object-contain shrink-0 w-10 aspect-square rounded-[56px]"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="/assets/footerimg3.png"
              alt="Social media icon"
              className="object-contain shrink-0 w-10 aspect-square rounded-[56px]"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="/assets/footerimg4.png"
              alt="Social media icon"
              className="object-contain shrink-0 w-10 aspect-square rounded-[56px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
