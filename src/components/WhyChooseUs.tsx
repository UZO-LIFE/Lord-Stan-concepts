import React from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import { Compass, Workflow, CheckCheck, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Compass className="w-5 h-5 text-[#8C7647]" key="compass" />,
    <Workflow className="w-5 h-5 text-[#8C7647]" key="workflow" />,
    <CheckCheck className="w-5 h-5 text-[#8C7647]" key="checkcheck" />,
    <MessageSquare className="w-5 h-5 text-[#8C7647]" key="message" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F1EA] border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7647]">
              THE DIFFERENCE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121214] tracking-tight mb-4 text-balance">
            Thoughtful Design. Careful Execution.
          </h2>

          <p className="text-base sm:text-lg text-[#55555C] leading-relaxed">
            Packaging is more than a container. It&apos;s part of how customers experience your brand.
          </p>
        </div>

        {/* 4 Feature Blocks with Simple, Consistent Line Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="bg-white p-7 rounded-xl border border-[#DFD8CC] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                {/* Clean line icon enclosure */}
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#DDD7CA] flex items-center justify-center mb-6">
                  {icons[index]}
                </div>

                <h3 className="text-lg font-bold text-[#121214] tracking-tight mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#2C2C30] leading-snug mb-3">
                  {item.description}
                </p>
              </div>

              <p className="text-xs text-[#6C6C75] leading-relaxed pt-3 border-t border-[#F1ECE3] mt-4">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
