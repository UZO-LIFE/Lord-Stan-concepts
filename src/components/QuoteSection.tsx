import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import { COMPANY_INFO } from '../data/content';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  RotateCcw,
  MessageCircle,
  AlertCircle,
  ExternalLink,
  Loader2,
} from 'lucide-react';

interface QuoteSectionProps {
  initialPackagingType?: string;
}

interface SubmissionResponse {
  success: boolean;
  emailSent?: boolean;
  emailServiceConfigured?: boolean;
  emailDeliveryError?: string | null;
  recipient?: string;
  subject?: string;
  error?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialPackagingType }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    packagingType: initialPackagingType || 'Folding Paperboard Cartons',
    estimatedQuantity: '1,000 – 5,000 units',
    projectDetails: '',
    timeline: 'Standard (3–4 weeks)',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Update packaging type if prop changes
  React.useEffect(() => {
    if (initialPackagingType) {
      setFormData((prev) => ({ ...prev, packagingType: initialPackagingType }));
    }
  }, [initialPackagingType]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof QuoteFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.companyName.trim()) {
      errs.companyName = 'Company name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please provide project specifications or dimensional requirements';
    } else if (formData.projectDetails.trim().length < 15) {
      errs.projectDetails = 'Please enter at least 15 characters describing your project';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${response.status}`);
      }

      const result: SubmissionResponse = await response.json();
      setSubmissionResult(result);
      setSubmittedData({ ...formData });
    } catch (err: unknown) {
      const error = err as Error;
      console.error('Submission error:', error);
      setErrorMessage(
        error.message ||
          'We encountered an issue submitting your quote request. Please try again or reach out directly via WhatsApp or phone.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setSubmittedData(null);
    setErrorMessage(null);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      packagingType: 'Folding Paperboard Cartons',
      estimatedQuantity: '1,000 – 5,000 units',
      projectDetails: '',
      timeline: 'Standard (3–4 weeks)',
    });
    setErrors({});
  };

  // Generate mailto link for direct sending fallback
  const mailtoSubject = encodeURIComponent('New Packaging Quote Request — Lord Stan Concepts');
  const mailtoBody = submittedData
    ? encodeURIComponent(`Hello Lord Stan Concepts,

Here are my project details for a packaging quote:

Full Name: ${submittedData.fullName}
Company Name: ${submittedData.companyName}
Email: ${submittedData.email}
Phone / WhatsApp: ${submittedData.phone}
Packaging Type: ${submittedData.packagingType}
Estimated Quantity: ${submittedData.estimatedQuantity}
Timeline: ${submittedData.timeline || 'Standard'}

Project Details & Specifications:
${submittedData.projectDetails}

Thank you,
${submittedData.fullName}`)
    : '';

  const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  // Generate WhatsApp message with submitted details if available
  const quoteWhatsappUrl = submittedData
    ? `https://wa.me/2348035017193?text=${encodeURIComponent(
        `Hello Lord Stan Concepts, I submitted a packaging quote request for *${submittedData.companyName}* (${submittedData.packagingType}, qty: ${submittedData.estimatedQuantity}). My contact number is ${submittedData.phone}.`
      )}`
    : COMPANY_INFO.whatsappUrl;

  return (
    <section id="quote" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7647]">
              LET&apos;S WORK TOGETHER
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121214] tracking-tight mb-4 text-balance">
            Let&apos;s Build Something Worth Packaging.
          </h2>

          <p className="text-base sm:text-lg text-[#55555C] leading-relaxed">
            Tell us about your packaging requirements, and let&apos;s explore the right production solution for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Main Form Area (8 Columns) */}
          <div className="lg:col-span-8">
            <div className="bg-white p-6 sm:p-10 rounded-xl border border-[#DFD8CC] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              {submissionResult && submittedData ? (
                /* SUCCESS STATE */
                <div className="animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#8C7647] mb-6">
                    <CheckCircle2 className="w-6 h-6 text-[#C5A059]" />
                  </div>

                  {/* Required Confirmation Headline */}
                  <h3 className="text-2xl font-bold text-[#121214] tracking-tight mb-3">
                    Thank you for contacting Lord Stan Concepts!
                  </h3>

                  {/* Required Confirmation Body */}
                  <p className="text-base text-[#2E2E32] font-medium mb-6 leading-relaxed">
                    Your enquiry has been submitted successfully. We&apos;ll be in touch as soon as possible.
                  </p>

                  {/* Summary of Submitted Details */}
                  <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-lg border border-[#E4DFD3] space-y-3 mb-6 text-xs sm:text-sm text-[#484850]">
                    <div className="flex items-center justify-between pb-2 border-b border-[#EAE5D9]">
                      <span className="font-semibold uppercase tracking-wider text-[11px] text-[#8C7647]">
                        Submitted Enquiry Details
                      </span>
                      <span className="text-xs text-[#7A7A84] font-mono">
                        Target: {COMPANY_INFO.email}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <span className="font-semibold text-[#18181A] block text-xs">Full Name:</span>
                        <span>{submittedData.fullName}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#18181A] block text-xs">Company Name:</span>
                        <span>{submittedData.companyName}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#18181A] block text-xs">Email Address:</span>
                        <span>{submittedData.email}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#18181A] block text-xs">Phone Number:</span>
                        <span>{submittedData.phone}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#18181A] block text-xs">Packaging Type:</span>
                        <span>{submittedData.packagingType}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#18181A] block text-xs">Estimated Quantity:</span>
                        <span>{submittedData.estimatedQuantity}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#EAE5D9]">
                      <span className="font-semibold text-[#18181A] block text-xs">Project Specifications:</span>
                      <p className="mt-1 text-[#5A5A62] italic whitespace-pre-wrap">
                        &ldquo;{submittedData.projectDetails}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Honest Email Integration Status Notice */}
                  <div className="p-4 rounded-lg bg-[#F5F2EB] border border-[#DDD7CB] text-xs text-[#52525A] mb-8 space-y-1.5">
                    <div className="flex items-center gap-2 font-semibold text-[#18181B]">
                      <Mail className="w-3.5 h-3.5 text-[#8C7647]" />
                      <span>Email Delivery Routing: {COMPANY_INFO.email}</span>
                    </div>
                    {submissionResult.emailSent ? (
                      <p className="text-emerald-700">
                        An email notification has been automatically dispatched via our connected email service.
                      </p>
                    ) : submissionResult.emailServiceConfigured ? (
                      <p className="text-amber-700">
                        Email service responded with:{' '}
                        {submissionResult.emailDeliveryError || 'Processing queue'}. Your details are recorded in our backend.
                      </p>
                    ) : (
                      <p>
                        Your enquiry was securely recorded and queued for <strong>{COMPANY_INFO.email}</strong>. For immediate assistance or direct transfer, you can also forward via your email client or WhatsApp below.
                      </p>
                    )}
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                    <a
                      href={quoteWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp (+234 803 501 7193)</span>
                    </a>

                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-[#F2EFE9] text-[#121214] border border-[#DDD7CB] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-[#8C7647]" />
                      <span>Open in Email App</span>
                    </a>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#121214] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#2A2A2E] transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Submit Another Specification</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM INPUT STATE */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-xs text-red-800 animate-in fade-in">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Submission Error</p>
                        <p className="mt-0.5">{errorMessage}</p>
                        <p className="mt-1 text-[11px] text-red-700">
                          You can also message us directly on WhatsApp at{' '}
                          <a
                            href={COMPANY_INFO.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-semibold"
                          >
                            +234 803 501 7193
                          </a>{' '}
                          or email{' '}
                          <a href={`mailto:${COMPANY_INFO.email}`} className="underline font-semibold">
                            {COMPANY_INFO.email}
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#242428] mb-1.5"
                      >
                        Full Name <span className="text-[#8C7647]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border ${
                          errors.fullName
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#DDD7CB] focus:border-[#121214]'
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-[#121214] text-[#121214] placeholder-[#9E9EA7] transition-all`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#242428] mb-1.5"
                      >
                        Company Name <span className="text-[#8C7647]">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Maison Botanique"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border ${
                          errors.companyName
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#DDD7CB] focus:border-[#121214]'
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-[#121214] text-[#121214] placeholder-[#9E9EA7] transition-all`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.companyName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#242428] mb-1.5"
                      >
                        Email Address <span className="text-[#8C7647]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#DDD7CB] focus:border-[#121214]'
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-[#121214] text-[#121214] placeholder-[#9E9EA7] transition-all`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#242428] mb-1.5"
                      >
                        Phone / WhatsApp Number <span className="text-[#8C7647]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +234 803 000 0000"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#DDD7CB] focus:border-[#121214]'
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-[#121214] text-[#121214] placeholder-[#9E9EA7] transition-all`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Type of packaging required */}
                    <div>
                      <label
                        htmlFor="packagingType"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#242428] mb-1.5"
                      >
                        Type of Packaging Required
                      </label>
                      <select
                        id="packagingType"
                        value={formData.packagingType}
                        onChange={(e) => setFormData({ ...formData, packagingType: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD7CB] rounded-md focus:outline-none focus:border-[#121214] text-[#121214]"
                      >
                        <option value="Folding Paperboard Cartons">Folding Paperboard Cartons</option>
                        <option value="Rigid Presentation Boxes">Rigid Luxury Presentation Boxes</option>
                        <option value="Cosmetic & Skincare Boxes">Cosmetic &amp; Skincare Boxes</option>
                        <option value="Confectionery & Food Packaging">Confectionery &amp; Food Packaging</option>
                        <option value="Retail Display & Product Sleeves">Retail Display &amp; Product Sleeves</option>
                        <option value="Custom Die-Cut Corrugated Mailers">Custom Die-Cut Corrugated Mailers</option>
                        <option value="Sample Prototype Run">Sample Prototype Run</option>
                        <option value="Other / Bespoke Structural Brief">Other / Bespoke Structural Brief</option>
                      </select>
                    </div>

                    {/* Estimated quantity */}
                    <div>
                      <label
                        htmlFor="estimatedQuantity"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#242428] mb-1.5"
                      >
                        Estimated Quantity
                      </label>
                      <select
                        id="estimatedQuantity"
                        value={formData.estimatedQuantity}
                        onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD7CB] rounded-md focus:outline-none focus:border-[#121214] text-[#121214]"
                      >
                        <option value="Sample Run (1 – 50 units)">Sample Run (1 – 50 units)</option>
                        <option value="500 – 1,000 units">500 – 1,000 units</option>
                        <option value="1,000 – 5,000 units">1,000 – 5,000 units</option>
                        <option value="5,000 – 20,000 units">5,000 – 20,000 units</option>
                        <option value="20,000+ units">20,000+ units</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label
                      htmlFor="projectDetails"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#242428] mb-1.5"
                    >
                      Project Details &amp; Specifications <span className="text-[#8C7647]">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      disabled={isSubmitting}
                      placeholder="Share dimensions (L x W x H), desired finishes (e.g. gold hot foil, soft-touch, spot UV), paper stock preferences, or specific timeline goals..."
                      className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border ${
                        errors.projectDetails
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#DDD7CB] focus:border-[#121214]'
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-[#121214] text-[#121214] placeholder-[#9E9EA7] transition-all`}
                    />
                    {errors.projectDetails && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.projectDetails}</p>
                    )}
                  </div>

                  {/* Submission Button & Note */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#121214] hover:bg-[#2A2A2E] disabled:bg-[#52525A] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-md transition-all duration-200 shadow-sm cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 text-[#D4AF37] animate-spin" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D4AF37]" />
                          <span>Request a Quote</span>
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-[#787882]">
                      Directs enquiry to{' '}
                      <span className="font-semibold text-[#18181B]">{COMPANY_INFO.email}</span>.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information Area (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="bg-white p-7 sm:p-8 rounded-xl border border-[#DFD8CC] shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-7">
              <div>
                <h3 className="text-lg font-bold text-[#121214] tracking-tight mb-2">
                  Studio Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#5D5D66] leading-relaxed">
                  Have an urgent production deadline or custom prototype inquiry? Connect directly with our team.
                </p>
              </div>

              {/* Functional WhatsApp Action Card */}
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#DDD6C8] space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121214]">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Instant WhatsApp Enquiry</span>
                </div>
                <p className="text-xs text-[#5D5D66]">
                  Start a direct chat with our production desk on WhatsApp for instant inquiries.
                </p>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Clickable Channels */}
              <div className="space-y-4 pt-2 border-t border-[#F1ECE3]">
                {/* Email */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <Mail className="w-4 h-4 text-[#8C7647] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-[#18181B] text-xs uppercase tracking-wide">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#3C3C43] hover:text-[#8C7647] transition-colors break-all underline decoration-[#C5A059]/40 underline-offset-2"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Clickable Phone Number */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <Phone className="w-4 h-4 text-[#8C7647] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-[#18181B] text-xs uppercase tracking-wide">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-[#3C3C43] hover:text-[#8C7647] font-medium transition-colors underline decoration-[#C5A059]/40 underline-offset-2"
                    >
                      {COMPANY_INFO.phoneDisplay} ({COMPANY_INFO.phone})
                    </a>
                  </div>
                </div>

                {/* Studio Hours */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <Clock className="w-4 h-4 text-[#8C7647] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-[#18181B] text-xs uppercase tracking-wide">
                      Studio Hours
                    </span>
                    <span className="text-[#55555D]">{COMPANY_INFO.hours}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-[#8C7647] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-[#18181B] text-xs uppercase tracking-wide">
                      Location
                    </span>
                    <span className="text-[#55555D]">{COMPANY_INFO.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#E4DFD3] text-xs text-[#5D5D66]">
                <span className="font-semibold text-[#18181A] block mb-1">Production Turnaround:</span>
                {COMPANY_INFO.responseCommitment}
              </div>
            </div>

            {/* Quick Material Tip */}
            <div className="mt-6 p-5 rounded-xl bg-[#F3EFE7] border border-[#DFD8CC] text-xs text-[#5D5D66]">
              <span className="font-bold text-[#18181A] uppercase tracking-wide text-[11px] block mb-1">
                Direct Contact Commitment
              </span>
              All quotes are sent directly to <strong>{COMPANY_INFO.email}</strong> and attended to promptly by our production team.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
