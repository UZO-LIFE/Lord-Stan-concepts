import React from 'react';
import { SERVICES } from '../data/content';
import { ArrowUpRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleServiceInquiry = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const target = document.querySelector('#quote');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7647]">
              WHAT WE DO
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121214] tracking-tight mb-4 text-balance">
            Packaging Solutions Built Around Your Brand.
          </h2>
          
          <p className="text-base sm:text-lg text-[#55555C] leading-relaxed">
            From printed cartons to carefully finished packaging, we help bring product presentation ideas to life.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col bg-white rounded-xl border border-[#E5DFD3] hover:border-[#C5A059]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] bg-[#EFECE6] overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - Lord Stan Concepts`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                
                {/* Number indicator */}
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono font-semibold tracking-wider text-[#121214] border border-[#DDD7CB]">
                  0{index + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C7647] block mb-1">
                    {service.eyebrow}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[#121214] tracking-tight mb-3 group-hover:text-[#8C7647] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-[#2B2B2F] leading-snug mb-3">
                    {service.tagline}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-[#66666E] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <ul className="space-y-2 pt-2 border-t border-[#F0ECE2] mb-6">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#48484F]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <button
                  type="button"
                  onClick={() => handleServiceInquiry(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#121214] text-[#121214] hover:text-white rounded-md border border-[#E2DDD2] hover:border-[#121214] text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
