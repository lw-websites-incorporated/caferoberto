'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        title={siteConfig.portfolio.heading}
        subtitle={siteConfig.portfolio.intro}
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2340&auto=format&fit=crop"
        imageAlt="Custom carpentry portfolio"
      />

      {/* Portfolio Categories */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="accent-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1A1D21] mb-4">
              Browse by Category
            </h2>
            <p className="text-[#5C6670] max-w-2xl mx-auto">
              Click on a category to explore our projects in that area.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {siteConfig.portfolio.categories.map((category, index) => (
              <div
                key={category.slug}
                className={`group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D21]/90 via-[#1A1D21]/40 to-transparent group-hover:from-[#1D2B3A]/90 group-hover:via-[#1D2B3A]/50 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-playfair font-bold text-white mb-2 group-hover:translate-y-0 transition-transform duration-300">
                    {category.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">View Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-[#5C6670] mb-6">
              Have a project in mind? We&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1D2B3A] text-white px-8 py-4 rounded font-medium hover:bg-[#15202C] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
