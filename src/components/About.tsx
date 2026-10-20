import React from 'react';
import { ASSETS } from '../data/content';
import { Layers, Sparkles, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4F1EA] border-y border-[#E8E2D5] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Craftsmanship Photography */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden border border-[#DFD8C9] bg-[#EAE5DA] shadow-md group">
                <img
                  src={ASSETS.about}
                  alt="Craftsman hands meticulously inspecting a printed packaging carton fold lines and paperboard quality"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Subtle overlay accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                
                {/* Clean watermark-free caption bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm border border-[#E0D9CB] p-3.5 rounded-lg">
                  <div className="flex items-center justify-between text-xs text-[#26262A]">
                    <span className="font-semibold uppercase tracking-wider">Quality Inspection Bench</span>
                    <span className="text-[#8C7647] font-medium">100% Pre-Delivery Check</span>
                  </div>
                </div>
              </div>

              {/* Decorative warm accent block behind */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#C5A059]/40 pointer-events-none -z-10 rounded-br-2xl hidden sm:block" />
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#C5A059]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7647]">
                WHO WE ARE
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121214] tracking-tight leading-tight mb-6 text-balance">
              Ideas Into Packaging. Precision Into Every Detail.
            </h2>

            {/* Body Text */}
            <p className="text-base sm:text-lg text-[#55555C] leading-relaxed mb-6">
              At Lord Stan Concepts, we help businesses transform packaging ideas into finished products. Through coordinated design, printing and finishing processes, we focus on delivering packaging solutions that represent each brand professionally.
            </p>

            {/* Supporting Statement / Pull Quote */}
            <div className="p-5 sm:p-6 bg-white border border-[#E3DDCF] rounded-lg mb-8 shadow-xs relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C5A059] rounded-l-lg" />
              <p className="text-base sm:text-lg font-medium text-[#1E1E22] italic pl-2">
                &ldquo;Every detail matters, from the first concept to the final finish.&rdquo;
              </p>
            </div>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#FAF8F5] border border-[#DDD6C8] flex items-center justify-center shrink-0 text-[#8C7647]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-[#121214]">Structural</h3>
                  <p className="text-xs text-[#6F6F77] mt-0.5">Accurate die-lines &amp; folds</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#FAF8F5] border border-[#DDD6C8] flex items-center justify-center shrink-0 text-[#8C7647]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-[#121214]">Finishes</h3>
                  <p className="text-xs text-[#6F6F77] mt-0.5">Tactile foils &amp; coatings</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#FAF8F5] border border-[#DDD6C8] flex items-center justify-center shrink-0 text-[#8C7647]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-[#121214]">Execution</h3>
                  <p className="text-xs text-[#6F6F77] mt-0.5">Commercial consistency</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
