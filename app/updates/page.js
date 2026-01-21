'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { Instagram, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

// Placeholder Instagram-style images
const placeholderImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=600&auto=format&fit=crop',
];

export default function UpdatesPage() {
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
        title={siteConfig.updates.heading}
        subtitle={siteConfig.updates.intro}
        image="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2340&auto=format&fit=crop"
        imageAlt="Custom carpentry updates"
      />

      {/* Instagram Feed Section */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="accent-line-center mb-6" />
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-[#1D2B3A]" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1A1D21]">
                Follow Us on Instagram
              </h2>
            </div>
            <p className="text-[#5C6670] max-w-2xl mx-auto">
              Stay up to date with our latest projects, behind-the-scenes content, and carpentry inspiration.
            </p>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {placeholderImages.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#1D2B3A]/0 group-hover:bg-[#1D2B3A]/80 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href={siteConfig.updates.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1D2B3A] text-white px-8 py-4 rounded font-medium hover:bg-[#15202C] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              Follow {siteConfig.updates.instagramHandle}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
