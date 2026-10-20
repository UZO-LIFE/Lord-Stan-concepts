import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/content';

interface HeroProps {
  onOpenQuote?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onOpenQuote) {
      e.preventDefault();
      onOpenQuote();
    } else {
      e.preventDefault();
      const target = document.querySelector('#quote');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Decorative hairline gold top accent line */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Quiet Subtitle / Brand Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="h-px w-6 bg-[#C5A059]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7647]">
                Packaging &amp; Print Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#121214] tracking-[-0.035em] leading-[1.08] mb-6 text-balance">
              Packaging That Makes Your Brand Stand Out.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#55555B] font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl">
              We bring ideas to life through quality packaging, professional printing and carefully executed production solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#quote"
                onClick={handleQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#121214] hover:bg-[#2A2A2E] active:scale-[0.99] rounded-md transition-all duration-200 shadow-sm text-center"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </a>

              <a
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#121214] bg-white hover:bg-[#F2EFE9] border border-[#DDD8CD] active:scale-[0.99] rounded-md transition-all duration-200 text-center"
              >
                <span>Explore Our Work</span>
                <ArrowDown className="w-4 h-4 text-[#73737C]" />
              </a>
            </div>

            {/* Trust markers / Specifications in quiet editorial layout */}
            <div className="pt-6 border-t border-[#E8E4DA] grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#121214] font-mono tabular-nums">
                  100%
                </p>
                <p className="text-xs text-[#71717A] mt-0.5 font-medium">Custom Dimensions</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#121214] font-mono tabular-nums">
                  PMS
                </p>
                <p className="text-xs text-[#71717A] mt-0.5 font-medium">Color Calibrated</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#121214] font-mono tabular-nums">
                  FSC®
                </p>
                <p className="text-xs text-[#71717A] mt-0.5 font-medium">Certified Stocks</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#E3DDCF] bg-[#EFECE6] shadow-[0_20px_50px_rgba(0,0,0,0.06)] group">
              <img
                src={ASSETS.hero}
                alt="Architectural studio arrangement of custom-printed Lord Stan Concepts folding cartons and rigid packaging boxes with gold foil debossing"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[460px] lg:h-[520px] object-cover object-center transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Subtle architectural frame detail */}
              <div className="absolute inset-0 border border-white/30 pointer-events-none rounded-xl m-2" />

              {/* Caption pill-free badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E2DDD3] px-4 py-3 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#121214] uppercase tracking-wide">
                    Rigid &amp; Folding Carton Studies
                  </p>
                  <p className="text-[11px] text-[#696970]">
                    Matte paperboard, micro-creasing &amp; gold hot stamping
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8C7647] shrink-0 pl-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Production Ready</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
