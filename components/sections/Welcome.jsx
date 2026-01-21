'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#F2F4F7]">
      <div className="container-custom">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Accent line */}
          <div className="accent-line-center mb-6" />

          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#1A1D21] mb-8">
            {siteConfig.welcome.heading}
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#1D2B3A] text-white px-8 py-4 font-medium text-lg rounded hover:bg-[#15202C] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
