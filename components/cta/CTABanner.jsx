'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#1D2B3A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-3">
              {siteConfig.cta.heading}
            </h2>
            <p className="text-white/90 text-lg">
              {siteConfig.cta.subheading}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Phone Button */}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1D2B3A] px-8 py-4 rounded font-bold text-lg hover:bg-[#F2F4F7] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            {/* Quote Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1A1D21] text-white px-8 py-4 rounded font-medium hover:bg-[#13161A] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {siteConfig.cta.secondaryButtonText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
