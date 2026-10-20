import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { ArrowUp, Mail, Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#quote' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#121214] text-[#E5E5EB] pt-16 pb-12 border-t border-[#26262B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#26262B]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-sans text-xl font-bold tracking-tight text-white">
                  LORD STAN CONCEPTS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              </div>
              
              <p className="text-sm text-[#A1A1AA] italic font-medium mb-4">
                &ldquo;{COMPANY_INFO.tagline}&rdquo;
              </p>
              
              <p className="text-xs text-[#82828C] leading-relaxed max-w-sm mb-6">
                Custom packaging engineering, high-fidelity commercial printing, and precision finishing for brands that demand quality presentation.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-2 pt-2 border-t border-[#26262B] text-xs text-[#9E9EA8]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Email: </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:text-[#C5A059] transition-colors underline decoration-[#C5A059]/40"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Phone: </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-white hover:text-[#C5A059] transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>WhatsApp: </span>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline"
                >
                  Chat with us (+234 803 501 7193)
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A1A1AA] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#D1D1D9] hover:text-[#C5A059] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Production Capabilities Col */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A1A1AA] mb-4">
              Packaging Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-[#9E9EA8]">
              <li>Folding Box Board &amp; SBS Cartons</li>
              <li>Rigid Shoulder &amp; Magnetic Presentation Boxes</li>
              <li>Calibrated Spot PMS &amp; High-Pigment Offset</li>
              <li>Foil Stamping, Blind Emboss &amp; Spot UV</li>
              <li>Engineered Laser Die-lines &amp; Creasing</li>
            </ul>

            <div className="mt-6 flex items-center justify-between">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#9E9EA8] hover:text-white transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© 2026 Lord Stan Concepts. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              {COMPANY_INFO.email}
            </a>
            <span>·</span>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hover:text-white transition-colors"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
