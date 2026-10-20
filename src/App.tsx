/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConceptItem } from './types';

export default function App() {
  const [selectedPackagingType, setSelectedPackagingType] = useState<string>('Folding Paperboard Cartons');

  const scrollToQuote = () => {
    const el = document.querySelector('#quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    let type = 'Folding Paperboard Cartons';
    if (serviceTitle.toLowerCase().includes('finishing')) {
      type = 'Rigid Luxury Presentation Boxes';
    } else if (serviceTitle.toLowerCase().includes('printing')) {
      type = 'Custom Die-Cut Corrugated Mailers';
    }
    setSelectedPackagingType(type);
    scrollToQuote();
  };

  const handleSelectConceptForQuote = (concept: ConceptItem) => {
    let type = 'Folding Paperboard Cartons';
    if (concept.category.includes('Cosmetics')) {
      type = 'Cosmetic & Skincare Boxes';
    } else if (concept.category.includes('Food')) {
      type = 'Confectionery & Food Packaging';
    } else if (concept.category.includes('Luxury')) {
      type = 'Rigid Luxury Presentation Boxes';
    } else if (concept.category.includes('Retail')) {
      type = 'Retail Display & Product Sleeves';
    }
    setSelectedPackagingType(type);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121214] font-sans selection:bg-[#C5A059]/20 selection:text-[#121214] flex flex-col">
      {/* SECTION 1: NAVIGATION */}
      <Navbar onOpenQuote={scrollToQuote} />

      <main className="flex-grow">
        {/* SECTION 2: HERO */}
        <Hero onOpenQuote={scrollToQuote} />

        {/* SECTION 3: ABOUT US */}
        <About />

        {/* SECTION 4: OUR SERVICES */}
        <Services onSelectService={handleSelectService} />

        {/* SECTION 5: OUR WORK */}
        <Portfolio onSelectConceptForQuote={handleSelectConceptForQuote} />

        {/* SECTION 6: OUR PROCESS */}
        <Process />

        {/* SECTION 7: WHY CHOOSE US */}
        <WhyChooseUs />

        {/* SECTION 8: CONTACT & QUOTE REQUEST */}
        <QuoteSection initialPackagingType={selectedPackagingType} />
      </main>

      {/* SECTION 9: FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP ENQUIRY ACTION */}
      <FloatingWhatsApp />
    </div>
  );
}
