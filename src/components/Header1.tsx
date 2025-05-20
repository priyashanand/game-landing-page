import { Link } from 'react-router-dom';

const Header1 = () => {


  // Active link logic


  return (
    <header className="w-full h-20 relative z-50">
      <div className="px-[104px] mx-auto flex items-center justify-between h-full">

        {/* Logo */}
        <div className="text-[#E6E6E6] font-semibold text-[24px] leading-[29px] tracking-[-0.04em]">
          Clyde
        </div>

        {/* Navigation Links */}
        

        {/* Contact Button */}
        <div className="relative group">
          <span className="absolute w-[103px] h-[1px] left-[18px] top-[37px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
          <div className="absolute w-[137px] h-[36px] top-[1px] left-[1px] bg-[#09090B] rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
          <Link
            to="/"
            className="relative z-10 w-[139px] h-[38px] rounded-full flex items-center justify-center text-[#A1A1AA] text-[14px] font-medium leading-[24px]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header1;
