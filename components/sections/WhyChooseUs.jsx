'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Users, Shield } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const iconMap = {
  award: Award,
  users: Users,
  shield: Shield,
};

export default function WhyChooseUs() {
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
    <section ref={sectionRef} className="section-padding bg-[#1A1D21] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1D2B3A]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1D2B3A]/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="accent-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            {siteConfig.whyChooseUs.heading}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {siteConfig.whyChooseUs.subheading}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={item.title}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-[#1D2B3A]/20 rounded-full" />
                  <div className="absolute inset-2 bg-[#1D2B3A] rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-playfair font-bold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
