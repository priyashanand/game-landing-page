import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Active link logic
  const isHome = pathname === '/';
  const isGames = pathname === '/games';
  const isCaseStudies = [
    '/casestudies',
    '/csp/revolvingGames',
    '/csp/netsol',
    '/csp/metaende',
    '/csp/cerwinvega',
  ].includes(pathname);
  const isContact = pathname === '/contact';

  return (
    <header className="w-full h-20 relative z-50">
      <div className="px-[104px] mx-auto flex items-center justify-between h-full">

        {/* Logo */}
        <div className="text-[#E6E6E6] font-semibold text-[24px] leading-[29px] tracking-[-0.04em]">
          Clyde
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-[30px] absolute left-1/2 transform -translate-x-1/2 top-[15px]">
          <Link
            to="/"
            className={`text-[18px] font-medium ${
              isHome && !isContact ? 'text-[#E3E3E3]' : 'text-[#908F8F]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/games"
            className={`text-[18px] font-medium ${
              isGames && !isContact ? 'text-[#E3E3E3]' : 'text-[#908F8F]'
            }`}
          >
            Games
          </Link>
          <Link
            to="/casestudies"
            className={`text-[18px] font-medium ${
              isCaseStudies && !isContact ? 'text-[#E3E3E3]' : 'text-[#908F8F]'
            }`}
          >
            CaseStudies
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="relative group">
          <span className="absolute w-[103px] h-[1px] left-[18px] top-[37px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
          <div className="absolute w-[137px] h-[36px] top-[1px] left-[1px] bg-[#09090B] rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
          <Link
            to="/contact"
            className="relative z-10 w-[139px] h-[38px] rounded-full flex items-center justify-center text-[#A1A1AA] text-[14px] font-medium leading-[24px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
