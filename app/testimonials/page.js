'use client';

import { useEffect, useRef, useState } from 'react';
import PageHero from '@/components/hero/PageHero';
import { Quote, Star, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function TestimonialsPage() {
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
        title={siteConfig.testimonials.heading}
        subtitle={siteConfig.testimonials.subheading}
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2340&auto=format&fit=crop"
        imageAlt="Customer testimonials"
      />

      {/* Testimonials Section */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="accent-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1A1D21] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[#5C6670] max-w-2xl mx-auto">
              Read reviews from our satisfied customers across North West London and the Chilterns.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {siteConfig.testimonials.entries.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-[#D6D9DE] rounded-lg p-8 relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 bg-[#1D2B3A] rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-[#1A1D21] leading-relaxed mb-6 text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1A1D21]">{testimonial.name}</p>
                    <p className="text-sm text-[#1D2B3A]">{testimonial.location}</p>
                  </div>

                  {/* Google Badge */}
                  <div className="flex items-center gap-2 text-sm text-[#5C6670]">
                    <span className="font-medium">Google Reviews</span>
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://www.google.com/search?q=custom+carpentry+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1D2B3A] text-white px-8 py-4 rounded font-medium hover:bg-[#15202C] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              See All Our Reviews on Google
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
