'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function ServicesPage() {
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
        title={siteConfig.servicesPage.heading}
        subtitle={siteConfig.servicesPage.intro}
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2340&auto=format&fit=crop"
        imageAlt="Bespoke carpentry services"
      />

      {/* Main Services Grid */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="accent-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1A1D21]">
              Our Main Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.servicesPage.mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-700 card-hover ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D21]/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-playfair font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#5C6670] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#1D2B3A] font-medium text-sm hover:gap-3 transition-all duration-300 gap-2"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-[#D6D9DE]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="accent-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1A1D21] mb-4">
              We Also Undertake
            </h2>
            <p className="text-[#5C6670] max-w-2xl mx-auto">
              In addition to our main services, we offer a wide range of carpentry and woodworking solutions.
            </p>
          </div>

          {/* Tag-style layout */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {siteConfig.servicesPage.additionalServices.map((service, index) => (
              <span
                key={service}
                className="bg-white px-5 py-3 rounded-full text-[#1A1D21] font-medium shadow-sm hover:shadow-md hover:bg-[#1D2B3A] hover:text-white transition-all duration-300 cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
