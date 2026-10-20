export interface ConceptItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  specs: {
    material: string;
    finish: string;
    structure: string;
    colorPalette: string;
  };
  image: string;
  aspect?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  capabilities: string[];
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  packagingType: string;
  estimatedQuantity: string;
  projectDetails: string;
  timeline?: string;
}
