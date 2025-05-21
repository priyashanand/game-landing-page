import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Or use SVG if no icons installed

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const linkClasses = (active: boolean) =>
    `text-[18px] font-medium ${active && !isContact ? 'text-[#E3E3E3]' : 'text-[#908F8F]'}`;

  return (
    <header className="w-full h-20 relative z-50">
      <div className="px-[24px] md:px-[104px] mx-auto flex items-center justify-between h-full">

        {/* Logo */}
        <div className="text-[#E6E6E6] font-semibold text-[24px] tracking-[-0.04em]">
          Clyde
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-[30px] absolute left-1/2 transform -translate-x-1/2 top-[15px]">
          <Link to="/" className={linkClasses(isHome)}>Home</Link>
          <Link to="/games" className={linkClasses(isGames)}>Games</Link>
          <Link to="/casestudies" className={linkClasses(isCaseStudies)}>CaseStudies</Link>
        </nav>

        {/* Contact Button (always visible) */}
        <div className="relative group hidden md:block">
          <span className="absolute w-[103px] h-[1px] left-[18px] top-[37px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
          <div className="absolute w-[137px] h-[36px] top-[1px] left-[1px] bg-[#09090B] rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
          <Link
            to="/contact"
            className="relative z-10 w-[139px] h-[38px] rounded-full flex items-center justify-center text-[#A1A1AA] text-[14px] font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-[#111] text-white p-6 space-y-4">
          <Link to="/" className={linkClasses(isHome)} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/games" className={linkClasses(isGames)} onClick={() => setIsMobileMenuOpen(false)}>Games</Link>
          <Link to="/casestudies" className={linkClasses(isCaseStudies)} onClick={() => setIsMobileMenuOpen(false)}>CaseStudies</Link>
          <Link to="/contact" className="text-[16px] font-medium text-[#A1A1AA]" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
