import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7647]">
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121214] tracking-tight mb-4 text-balance">
            From Concept to Finished Packaging.
          </h2>

          <p className="text-base sm:text-lg text-[#55555C] leading-relaxed">
            A clear, coordinated process helps turn packaging requirements into carefully executed production outcomes.
          </p>
        </div>

        {/* 4 Numbered Steps Sequence */}
        <div className="relative">
          {/* Subtle connecting line across desktop steps */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-px bg-[#E4DDD0] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.number}
                className="group flex flex-col bg-white p-6 sm:p-7 rounded-xl border border-[#E5DFD4] hover:border-[#C5A059]/60 shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-200"
              >
                {/* Step Header with Clean Number Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#DDD7CB] flex items-center justify-center font-mono text-base font-bold text-[#121214] group-hover:bg-[#121214] group-hover:text-white transition-colors duration-200 tabular-nums">
                    {step.number}
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-[#A8A8B2] group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all" />
                  )}
                </div>

                {/* Step Title & Core Description */}
                <h3 className="text-lg font-bold text-[#121214] tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#2B2B2F] leading-snug mb-3">
                  {step.description}
                </p>

                {/* Expanded Details */}
                <p className="text-xs text-[#6B6B75] leading-relaxed pt-3 border-t border-[#F0ECE2] mt-auto">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Disclaimer & Commitment Banner */}
        <div className="mt-12 p-5 sm:p-6 bg-[#F3EFE7] rounded-xl border border-[#DFD8CB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#8C7647] shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#18181A]">
                Illustrative Production Coordination Model
              </p>
              <p className="text-xs text-[#67676F]">
                Turnaround timelines and review gates are tailored during consultation based on run size and tooling needs.
              </p>
            </div>
          </div>
          <a
            href="#quote"
            className="text-xs font-semibold uppercase tracking-wider text-[#121214] hover:text-[#8C7647] whitespace-nowrap shrink-0 transition-colors"
          >
            Start Your Consultation &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
