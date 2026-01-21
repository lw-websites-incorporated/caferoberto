'use client';

import Script from 'next/script';
import { siteConfig } from '@/config/siteConfig';

export default function CarpentryTestimonials() {
  const { testimonials } = siteConfig;

  return (
    <section className="py-20 px-6 md:px-12 bg-[#5C4033]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {testimonials.heading}
          </h2>
          <p className="text-lg text-[#D4C4B0] max-w-2xl mx-auto">
            {testimonials.subheading}
          </p>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div>
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            strategy="lazyOnload"
          />
          <div
            className="elfsight-app-65dcc345-e3b5-4e95-972a-d46347ea1876"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}
