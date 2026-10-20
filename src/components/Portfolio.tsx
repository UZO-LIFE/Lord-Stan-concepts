import React, { useState } from 'react';
import { CONCEPTS } from '../data/content';
import { ConceptItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Eye, Layers, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onSelectConceptForQuote?: (concept: ConceptItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectConceptForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeConcept, setActiveConcept] = useState<ConceptItem | null>(null);

  const categories = [
    'All',
    'Cosmetics & Beauty',
    'Gourmet Food',
    'Luxury & Gifts',
    'Retail & Lifestyle',
    'Technology & Hardware',
  ];

  const filteredConcepts = selectedCategory === 'All'
    ? CONCEPTS
    : CONCEPTS.filter((item) => item.category === selectedCategory);

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (!activeConcept) return;
    const currentIndex = filteredConcepts.findIndex((c) => c.id === activeConcept.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredConcepts.length;
      setActiveConcept(filteredConcepts[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredConcepts.length) % filteredConcepts.length;
      setActiveConcept(filteredConcepts[prevIndex]);
    }
  };

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#F4F1EA] border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#C5A059]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7647]">
                SELECTED CONCEPTS
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121214] tracking-tight mb-4 text-balance">
              Good Packaging Gets Noticed.
            </h2>

            <p className="text-base sm:text-lg text-[#55555C] leading-relaxed">
              Explore a collection of packaging concepts demonstrating how thoughtful design and quality presentation can elevate a product.
            </p>
          </div>

          {/* Editorial notice tag */}
          <div className="bg-[#FAF8F5] border border-[#DDD6C8] px-4 py-3 rounded-lg lg:max-w-xs text-xs text-[#6F6F78]">
            <p className="font-semibold text-[#1E1E22] uppercase tracking-wide text-[11px] mb-0.5">
              Concept Demonstrations
            </p>
            <p>
              Illustrative packaging and finishing studies showcasing structural and material capabilities.
            </p>
          </div>
        </div>

        {/* Category Filters (Clean Segmented Buttons) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 ${
                selectedCategory === category
                  ? 'bg-[#121214] text-white shadow-xs font-semibold'
                  : 'bg-white hover:bg-[#EAE5DA] text-[#4E4E55] border border-[#DDD6C9]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Concept Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConcepts.map((concept) => (
            <div
              key={concept.id}
              onClick={() => setActiveConcept(concept)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveConcept(concept);
                }
              }}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-[#E3DDCF] hover:border-[#C5A059] shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Hover zoom */}
              <div className="relative aspect-[4/3] bg-[#EFECE6] overflow-hidden">
                <img
                  src={concept.image}
                  alt={concept.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* View Details Icon badge on hover */}
                <div className="absolute top-4 right-4 bg-white/90 group-hover:bg-[#121214] text-[#121214] group-hover:text-white p-2 rounded-full shadow-md transition-colors duration-200">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Card Image Overlay Info */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#E8D4A2] block">
                    {concept.category}
                  </span>
                  <h3 className="text-base font-bold tracking-tight text-white drop-shadow-xs">
                    {concept.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#8C7647] uppercase tracking-wide mb-1.5">
                    {concept.subtitle}
                  </p>
                  <p className="text-xs text-[#5D5D66] line-clamp-2 leading-relaxed mb-4">
                    {concept.description}
                  </p>
                </div>

                {/* Micro specs teaser */}
                <div className="pt-3 border-t border-[#F0ECE2] flex items-center justify-between text-[11px] text-[#71717A]">
                  <span className="inline-flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#C5A059]" />
                    <span className="truncate max-w-[130px]">{concept.specs.structure}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-[#121214] group-hover:text-[#8C7647]">
                    <span>Inspect Specs</span>
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        concept={activeConcept}
        concepts={filteredConcepts}
        onClose={() => setActiveConcept(null)}
        onNavigate={handleNavigate}
        onRequestQuoteForConcept={(item) => {
          if (onSelectConceptForQuote) {
            onSelectConceptForQuote(item);
          } else {
            const target = document.querySelector('#quote');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      />
    </section>
  );
};
