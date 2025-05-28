function Footer() {
  return (
    <footer className="flex flex-col items-center px-[104px] pt-6 pb-6 max-md:px-5">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[24px] sm:gap-10 justify-center sm:justify-between items-center max-w-full sm:border-b border-solid border-b-[color:var(--neutral-015,rgba(255,255,255,0.10))] w-full pb-[23px]">
        <h2 className="self-stretch my-auto text-[18px] sm:text-2xl text-center sm:text-start font-semibold tracking-tighter leading-tight text-neutral-200">
          Clyde.
        </h2>
        <nav className="flex gap-8 items-center justify-between self-stretch my-auto text-[14px] sm:text-lg font-medium min-h-[49px] min-w-60 text-[#9D9D9D] sm:text-neutral-200 px-[30px] sm:px-0">
          <a href="#" className="self-stretch my-auto hover:text-white">Home</a>
          <a href="#" className="self-stretch my-auto hover:text-white">Games</a>
          <a href="#" className="self-stretch my-auto hover:text-white">About</a>
          <a href="#" className="self-stretch my-auto hover:text-white">Contact Us</a>
        </nav>
      </div>
      <div className="sm:hidden w-full pt-[22px] border-t-1 border-[#111111]">
        <p className="text-[12px] text-[#5F5F5F] text-center pb-[12px] ">Follow us on</p>
        <div className="flex justify-between pt-[12px] px-[71px] pb-[30px] border-b-1 border-[#111111]">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_506_375)">
                <path d="M13.857 2.75728C13.3427 2.97157 12.8284 3.143 12.2284 3.18585C12.8284 2.843 13.257 2.28585 13.4713 1.643C12.9141 1.98585 12.3141 2.20014 11.6713 2.32871C11.157 1.77157 10.4284 1.42871 9.657 1.42871C8.11414 1.42871 6.82843 2.67157 6.82843 4.25728C6.82843 4.47157 6.87128 4.68585 6.91414 4.90014C4.557 4.77157 2.49985 3.65728 1.08557 1.943C0.828425 2.37157 0.699854 2.843 0.699854 3.35728C0.699854 4.343 1.21414 5.20014 1.94271 5.71443C1.47128 5.71443 1.04271 5.58585 0.656996 5.37157V5.41443C0.656996 6.78585 1.64271 7.90014 2.92843 8.15728C2.67128 8.20014 2.457 8.243 2.19985 8.243C2.02843 8.243 1.857 8.243 1.68557 8.20014C2.02842 9.31443 3.09985 10.1287 4.29985 10.1716C3.357 10.943 2.11414 11.3716 0.785568 11.3716C0.571282 11.3716 0.314139 11.3716 0.0998535 11.3287C1.38557 12.1001 2.88557 12.5716 4.47128 12.5716C9.657 12.5716 12.4856 8.28585 12.4856 4.55728C12.4856 4.42871 12.4856 4.30014 12.4856 4.21443C12.9999 3.78585 13.4713 3.31443 13.857 2.75728Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_506_375">
                  <rect width="13.7143" height="13.7143" fill="white" transform="translate(0.14209 0.142578)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
              <path d="M7.66484 9.16903C8.86408 9.16903 9.83627 8.19685 9.83627 6.9976C9.83627 5.79835 8.86408 4.82617 7.66484 4.82617C6.46559 4.82617 5.49341 5.79835 5.49341 6.9976C5.49341 8.19685 6.46559 9.16903 7.66484 9.16903Z" fill="white"/>
              <path d="M10.3792 0.484375H4.95058C2.85569 0.484375 1.15112 2.18949 1.15112 4.28492V9.71349C1.15112 11.8084 2.85624 13.5129 4.95167 13.5129H10.3802C12.4751 13.5129 14.1797 11.8078 14.1797 9.7124V4.28383C14.1797 2.18895 12.4746 0.484375 10.3792 0.484375ZM7.66541 10.2558C5.86909 10.2558 4.40827 8.79497 4.40827 6.99866C4.40827 5.20235 5.86909 3.74152 7.66541 3.74152C9.46172 3.74152 10.9226 5.20235 10.9226 6.99866C10.9226 8.79497 9.46172 10.2558 7.66541 10.2558ZM11.4654 3.74152C11.1658 3.74152 10.9226 3.49832 10.9226 3.19866C10.9226 2.899 11.1658 2.6558 11.4654 2.6558C11.7651 2.6558 12.0083 2.899 12.0083 3.19866C12.0083 3.49832 11.7651 3.74152 11.4654 3.74152Z" fill="white"/>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
              <g clip-path="url(#clip0_506_389)">
                <path d="M14.1617 1.58731C14.1507 1.5367 14.1264 1.48992 14.0914 1.45175C14.0564 1.41357 14.0119 1.38537 13.9624 1.37003C13.7824 1.33451 13.5961 1.34783 13.4229 1.4086C13.4229 1.4086 1.407 5.72731 0.720855 6.2056C0.572569 6.30845 0.523283 6.36803 0.498855 6.43874C0.380141 6.77903 0.749569 6.92903 0.749569 6.92903L3.84643 7.93831C3.89874 7.94735 3.95243 7.94413 4.00328 7.92888C4.70786 7.48403 11.0914 3.45288 11.4604 3.31745C11.5183 3.29988 11.5611 3.31745 11.5517 3.36031C11.4009 3.87717 5.88814 8.77617 5.85771 8.80617C5.84292 8.8183 5.8313 8.83385 5.82383 8.85146C5.81637 8.86908 5.81329 8.88824 5.81486 8.90731L5.52685 11.9292C5.52685 11.9292 5.406 12.872 6.34714 11.9292C7.01443 11.261 7.65471 10.7082 7.97571 10.4395C9.04071 11.1745 10.1867 11.9875 10.6809 12.4109C10.7638 12.4914 10.8621 12.5544 10.9699 12.5961C11.0777 12.6378 11.1928 12.6573 11.3083 12.6535C11.7797 12.6355 11.9083 12.1199 11.9083 12.1199C11.9083 12.1199 14.0974 3.3106 14.1711 2.12988C14.178 2.01417 14.1879 1.94003 14.1887 1.86074C14.1926 1.76878 14.1835 1.67673 14.1617 1.58731Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_506_389">
                  <rect width="13.7143" height="13.7143" fill="white" transform="translate(0.475342 0.142578)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_506_393)">
                <path d="M5.48268 13.4294V7.85798H3.57031V5.28655H5.48268V3.49083C5.48268 1.53474 6.72102 0.572266 8.46599 0.572266C9.30185 0.572266 10.0202 0.634494 10.2296 0.662313V2.70654L9.01935 2.70709C8.07034 2.7071 7.85603 3.15805 7.85603 3.8198V5.28655H10.4275L9.57031 7.85798H7.85603V13.4294H5.48268Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_506_393">
                  <rect width="13.7143" height="13.7143" fill="white" transform="translate(0.14209 0.142578)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <p className="self-stretch my-auto text-center text-sm font-medium leading-none text-[#5F5F5F] sm:text-slate-300 pt-[30px]">
          © Clyde 2025. All rights reserved
        </p>
      </div>
      <div className=" hidden sm:flex flex-wrap gap-10 justify-between items-center mt-6 w-full ">
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
