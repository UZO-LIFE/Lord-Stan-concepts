import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Box, Sparkles, Layers, Palette } from 'lucide-react';
import { ConceptItem } from '../types';

interface LightboxModalProps {
  concept: ConceptItem | null;
  concepts: ConceptItem[];
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
  onRequestQuoteForConcept?: (concept: ConceptItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  concept,
  concepts,
  onClose,
  onNavigate,
  onRequestQuoteForConcept,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!concept) return null;

  const currentIndex = concepts.findIndex((c) => c.id === concept.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={concept.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#FAF8F5] rounded-xl overflow-hidden shadow-2xl border border-[#DFD8C9] max-h-[92vh] flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#121214]/80 hover:bg-[#121214] text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Big Image View */}
        <div className="relative lg:w-3/5 bg-[#EAE6DE] flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px]">
          <img
            src={concept.image}
            alt={concept.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center max-h-[70vh] lg:max-h-[85vh]"
          />

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={() => onNavigate('prev')}
            aria-label="Previous concept"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#121214] shadow-md transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('next')}
            aria-label="Next concept"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#121214] shadow-md transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image index counter */}
          <div className="absolute bottom-3 left-4 bg-[#121214]/75 text-white px-2.5 py-1 rounded text-xs font-mono tabular-nums">
            {currentIndex + 1} / {concepts.length}
          </div>
        </div>

        {/* Right: Concept Specs & Inquiry */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C7647] mb-2">
              <span>{concept.category}</span>
              <span aria-hidden="true">·</span>
              <span>Concept Study</span>
            </div>

            <h3 className="text-2xl font-bold text-[#121214] tracking-tight mb-1">
              {concept.title}
            </h3>
            
            <p className="text-xs font-medium text-[#7A7A82] uppercase tracking-wider mb-4">
              {concept.subtitle}
            </p>

            <p className="text-sm text-[#55555D] leading-relaxed mb-6">
              {concept.description}
            </p>

            {/* Specifications Grid */}
            <div className="space-y-3.5 pt-4 border-t border-[#EAE4D7] mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#121214]">
                Production &amp; Material Specifications
              </h4>

              <div className="flex items-start gap-2.5 text-xs">
                <Layers className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1E1E22]">Material Stock: </span>
                  <span className="text-[#55555C]">{concept.specs.material}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1E1E22]">Finish &amp; Foil: </span>
                  <span className="text-[#55555C]">{concept.specs.finish}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs">
                <Box className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1E1E22]">Box Format: </span>
                  <span className="text-[#55555C]">{concept.specs.structure}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs">
                <Palette className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1E1E22]">Tones: </span>
                  <span className="text-[#55555C]">{concept.specs.colorPalette}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-[#EAE4D7]">
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onRequestQuoteForConcept) {
                  onRequestQuoteForConcept(concept);
                }
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#121214] hover:bg-[#2A2A2E] rounded-md transition-colors"
            >
              <span>Request Quote for this Format</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <p className="text-[11px] text-[#7E7E88] text-center mt-2.5">
              Specifications can be scaled or customized to match your product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
