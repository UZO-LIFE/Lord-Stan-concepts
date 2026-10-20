import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E2D8] shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-3.5'
          : 'bg-[#FAF8F5]/70 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
        {/* Brand Zone: Refined Minimal Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group inline-flex items-center gap-2 text-decoration-none"
        >
          <span className="font-sans text-lg sm:text-xl font-bold tracking-[-0.03em] text-[#121214] group-hover:text-[#B8934A] transition-colors whitespace-nowrap shrink-0">
            LORD STAN CONCEPTS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-80" aria-hidden="true" />
        </a>

        {/* Navigation Links: Clean Typography */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9 text-xs lg:text-sm font-medium tracking-wide uppercase text-[#545458]"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 hover:text-[#121214] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="#quote"
            onClick={(e) => {
              if (onOpenQuote) {
                e.preventDefault();
                onOpenQuote();
              } else {
                handleLinkClick(e, '#quote');
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#121214] hover:bg-[#2A2A2E] active:scale-[0.99] border border-[#121214] rounded-md transition-all duration-200 shadow-sm whitespace-nowrap"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-md text-[#121214] hover:bg-[#EFECE6] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E7E2D8] px-5 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold tracking-wide uppercase text-[#2C2C30] hover:text-[#C5A059] py-1 border-b border-[#F0ECE2] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#quote"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onOpenQuote) {
                    e.preventDefault();
                    onOpenQuote();
                  } else {
                    handleLinkClick(e, '#quote');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#121214] rounded-md"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>

            <div className="pt-3 border-t border-[#F0ECE2] flex flex-col gap-2.5 text-xs">
              <a
                href="tel:+2348035017193"
                className="flex items-center gap-2 text-[#4A4A52] hover:text-[#121214]"
              >
                <span className="font-semibold text-[#18181A]">Phone:</span>
                <span>+234 803 501 7193</span>
              </a>
              <a
                href="https://wa.me/2348035017193?text=Hello%20Lord%20Stan%20Concepts%2C%20I%27m%20interested%20in%20your%20packaging%20and%20printing%20services.%20I%27d%20like%20to%20make%20an%20enquiry%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] font-medium"
              >
                <span>WhatsApp: +234 803 501 7193</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
