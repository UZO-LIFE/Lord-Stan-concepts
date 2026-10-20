import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-xl shadow-2xl border border-[#DFD8CC] p-4 text-[#121214] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE2] mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-xs">
                LS
              </div>
              <div>
                <p className="text-xs font-bold leading-tight">Lord Stan Concepts</p>
                <p className="text-[10px] text-[#6E6E77]">Packaging &amp; Print Desk</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#8C8C96] hover:text-[#121214] transition-colors rounded"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#52525A] mb-3 leading-relaxed">
            Need quick answers or want to discuss sample runs? Chat directly with our production desk on WhatsApp:
          </p>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat +234 803 501 7193</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 bg-[#FAF8F5]/95 hover:bg-white text-[#121214] border border-[#DDD6C8] rounded-full shadow-lg text-xs font-semibold tracking-wide transition-all hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>WhatsApp Us</span>
          </button>
        )}

        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Lord Stan Concepts on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BD5A] active:scale-95 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};
