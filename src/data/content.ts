import { ConceptItem, ServiceItem, ProcessStep } from '../types';

export const ASSETS = {
  hero: '/src/assets/images/hero_packaging_1792519973784.jpg',
  about: '/src/assets/images/about_craftsmanship_1792519975036.jpg',
  serviceProduction: '/src/assets/images/service_production_1792519975342.jpg',
  servicePrinting: '/src/assets/images/service_printing_1792519976869.jpg',
  serviceFinishing: '/src/assets/images/service_finishing_1792519977325.jpg',
  conceptSkincare: '/src/assets/images/concept_skincare_1792519977618.jpg',
  conceptChocolate: '/src/assets/images/concept_chocolate_1792519979480.jpg',
  conceptCosmetics: '/src/assets/images/concept_cosmetics_1792519979568.jpg',
  conceptRetail: '/src/assets/images/concept_retail_1792519981044.jpg',
  conceptGiftbox: '/src/assets/images/concept_giftbox_1792519980119.jpg',
  conceptConsumer: '/src/assets/images/concept_consumer_1792519980572.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'packaging-production',
    eyebrow: '01. Structural & Form',
    title: 'Packaging Production',
    tagline: 'Custom packaging solutions designed to present products professionally and support distinctive brand identities.',
    description: 'We develop precision-engineered structural formats tailored to your product weight, retail footprint, and shipping requirements. From custom folding cartons to high-rigidity presentation boxes, our production solutions ensure structural stability and flawless aesthetics.',
    capabilities: [
      'Rigid luxury presentation boxes',
      'Custom folding paperboard cartons',
      'Corrugated presentation mailers',
      'Custom structural fitments & inserts',
    ],
    image: ASSETS.serviceProduction,
  },
  {
    id: 'printing-services',
    eyebrow: '02. Color & Fidelity',
    title: 'Printing Services',
    tagline: 'Professional printing solutions that bring packaging artwork, colours and brand details to life.',
    description: 'Crisp line definition, calibrated Pantone matching, and deep pigmented ink systems bring every design intention to fruition. We support short-run proofing up to high-volume commercial production runs with strict registration fidelity.',
    capabilities: [
      'High-definition offset lithographic printing',
      'Precise spot PMS & multi-color calibration',
      'High-opacity white & metallic ink options',
      'Eco-conscious soy and vegetable inks',
    ],
    image: ASSETS.servicePrinting,
  },
  {
    id: 'finishing-production',
    eyebrow: '03. Tactile Precision',
    title: 'Finishing & Production',
    tagline: 'Careful finishing and production coordination to help transform printed materials into finished packaging.',
    description: 'Tactile details define the tactile unboxing experience. We integrate specialty post-press processes from hot foil stamping and sculptural embossing to custom die-cutting and soft-touch laminations.',
    capabilities: [
      'Hot foil stamping & blind debossing',
      'Selective spot UV & tactile varnishing',
      'Precision laser die-cutting & creasing',
      'Soft-touch & anti-scuff matte barrier films',
    ],
    image: ASSETS.serviceFinishing,
  },
];

export const CONCEPTS: ConceptItem[] = [
  {
    id: 'skincare-minimalist',
    title: 'Botanical Skincare Carton',
    category: 'Cosmetics & Beauty',
    subtitle: 'Cream & Muted Sage Paperboard',
    description: 'Minimalist vertical skincare carton concept designed for clean beauty formulations. Features natural paperboard texture paired with botanical sage accents and understated geometric typography.',
    specs: {
      material: '350gsm FSC Uncoated White Kraft Paperboard',
      finish: 'Matte tactile coating with blind debossed brandmark',
      structure: 'Straight tuck carton with reinforced dust flaps',
      colorPalette: 'Warm Alabaster, Sage Green, Deep Slate',
    },
    image: ASSETS.conceptSkincare,
  },
  {
    id: 'chocolate-artisan',
    title: 'Artisan Confectionery Box',
    category: 'Gourmet Food',
    subtitle: 'Deep Cocoa Charcoal & Gold Stamping',
    description: 'A study in tactile decadence: rich cocoa-toned heavy stock with dual-line micro-embossed borders and restrained metallic warm gold foil typography.',
    specs: {
      material: '1200gsm Rigid Board with 150gsm soft-feel wrap',
      finish: 'Micro-etched warm gold hot foil & bevelled deboss',
      structure: 'Book-style magnetic closure with custom divider grid',
      colorPalette: 'Dark Cocoa, Antique Gold Foil, Charcoal',
    },
    image: ASSETS.conceptChocolate,
  },
  {
    id: 'cosmetics-neutral',
    title: 'Contemporary Cosmetic Suite',
    category: 'Cosmetics & Beauty',
    subtitle: 'Sand Beige & Alabaster Collection',
    description: 'A unified suite of primary and secondary cosmetic cartons demonstrating modular sizing and consistent typographic hierarchy across multiple product volumes.',
    specs: {
      material: '400gsm Virgin Fibre Caliper Board',
      finish: 'Silk-matte dispersion varnish with sharp creasing',
      structure: 'Reverse-tuck end cartons with internal safety locks',
      colorPalette: 'Desert Sand, Raw Linen, Deep Charcoal',
    },
    image: ASSETS.conceptCosmetics,
  },
  {
    id: 'retail-geometric',
    title: 'Vibrant Retail Carton',
    category: 'Retail & Lifestyle',
    subtitle: 'Architectural Color-Blocking',
    description: 'An expressive retail carton concept contrasting burnt terracotta with midnight ultramarine. Designed for high shelf impact and instant brand recognition.',
    specs: {
      material: '380gsm High-Density Folding Box Board',
      finish: 'Satin hybrid varnish with high-rub resistance',
      structure: 'Auto-lock crash-bottom box for rapid assembly',
      colorPalette: 'Burnt Terracotta, Cobalt Blue, Warm Cream',
    },
    image: ASSETS.conceptRetail,
  },
  {
    id: 'giftbox-embossed',
    title: 'Prestige Presentation Box',
    category: 'Luxury & Gifts',
    subtitle: 'Textured Card & Brushed Gold Framing',
    description: 'Two-piece telescopic rigid gift box featuring understated architectural debossed borders and refined metallic foil typography for premium gifting.',
    specs: {
      material: '1400gsm Dense Greyboard with Japanese textured paper',
      finish: 'Brushed gold foil stamping and multi-level deboss frame',
      structure: 'Two-piece shoulder and neck rigid box',
      colorPalette: 'Off-White Ivory, Brushed Gold, Warm Stone',
    },
    image: ASSETS.conceptGiftbox,
  },
  {
    id: 'consumer-modern',
    title: 'Modern Lifestyle Device Pack',
    category: 'Technology & Hardware',
    subtitle: 'Minimalist Sleek Sleeve & Notch',
    description: 'Clean consumer lifestyle packaging concept utilizing engineered finger notches and crisp technical layout for an effortless unboxing experience.',
    specs: {
      material: '360gsm Bright White Sulfate Paperboard (SBS)',
      finish: 'Soft-touch velvet laminate with anti-fingerprint seal',
      structure: 'Sleeve and tray with custom molded pulp internal bed',
      colorPalette: 'Pure White, Matte Carbon, Steel Grey',
    },
    image: ASSETS.conceptConsumer,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We understand your product, packaging requirements, quantities and project goals.',
    details: 'Initial review of product dimensions, weight, barrier needs, target audience, and delivery timelines to establish production scope.',
  },
  {
    number: '02',
    title: 'Design Coordination',
    description: 'We coordinate packaging artwork and production specifications to prepare the project for production.',
    details: 'Precise structural die-lines, 3D visual fold verification, artwork pre-flight analysis, and material stock selection.',
  },
  {
    number: '03',
    title: 'Printing & Production',
    description: 'Approved designs move through the appropriate printing, cutting and finishing stages.',
    details: 'Calibrated color management, press-side registration checks, precision die-cutting, embossing, and automated folding.',
  },
  {
    number: '04',
    title: 'Quality Check',
    description: 'Finished packaging is inspected for presentation, consistency and overall quality before delivery.',
    details: 'Rigorous inspection of creasing durability, foil adhesion, corner alignment, and pack-out readiness before secure dispatch.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Attention to Detail',
    description: 'Careful consideration of artwork, packaging structure and finishing.',
    detail: 'Every crease, fold, and foil line is calibrated for crisp structural integrity and tactile pleasure.',
  },
  {
    title: 'Production Coordination',
    description: 'A coordinated approach to moving packaging projects through the required production stages.',
    detail: 'Seamless alignment between structural prototyping, paper stock sourcing, and press execution.',
  },
  {
    title: 'Quality Focus',
    description: 'An emphasis on consistent presentation and careful inspection.',
    detail: 'Systematic batch-by-batch checks ensure identical print registration and structural fidelity.',
  },
  {
    title: 'Customer Communication',
    description: 'Clear communication throughout the project, from initial requirements to production updates.',
    detail: 'Direct milestones, transparent turnaround estimates, and dedicated support at every stage.',
  },
];

export const COMPANY_INFO = {
  name: 'Lord Stan Concepts',
  tagline: 'Thoughtful packaging. Professional presentation.',
  summary: 'We bring ideas to life through quality packaging, professional printing and carefully executed production solutions.',
  email: 'anujuluuzondu@gmail.com',
  phone: '+2348035017193',
  phoneDisplay: '+234 803 501 7193',
  whatsappMessage: "Hello Lord Stan Concepts, I'm interested in your packaging and printing services. I'd like to make an enquiry about a project.",
  whatsappUrl: `https://wa.me/2348035017193?text=${encodeURIComponent("Hello Lord Stan Concepts, I'm interested in your packaging and printing services. I'd like to make an enquiry about a project.")}`,
  hours: 'Monday – Friday, 8:00 AM – 6:00 PM (WAT)',
  location: 'Studio & Production Coordination Suite',
  responseCommitment: 'Quotes and project evaluations are reviewed within 1–2 business days.',
};

