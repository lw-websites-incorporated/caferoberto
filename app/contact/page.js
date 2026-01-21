'use client';

import { useEffect, useRef, useState } from 'react';
import PageHero from '@/components/hero/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function ContactPage() {
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
        title={siteConfig.contact.heading}
        subtitle={siteConfig.contact.subheading}
        image="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2340&auto=format&fit=crop"
        imageAlt="Contact Custom Carpentry"
      />

      {/* Contact Content */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Main Contact */}
              <div className="mb-8">
                <div className="accent-line mb-6" />
                <h2 className="text-2xl font-playfair font-bold text-[#1A1D21] mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#1D2B3A] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#15202C] transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#5C6670] mb-1">Mobile</p>
                      <p className="text-lg font-semibold text-[#1A1D21] group-hover:text-[#1D2B3A] transition-colors">
                        {siteConfig.contact.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#1D2B3A] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#15202C] transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#5C6670] mb-1">Email</p>
                      <p className="font-semibold text-[#1A1D21] group-hover:text-[#1D2B3A] transition-colors">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-bold text-[#1A1D21] mb-4">
                  Our Locations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {siteConfig.contact.locations.map((location) => (
                    <div key={location.name} className="bg-[#D6D9DE] rounded-lg p-5">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#1D2B3A] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#1D2B3A] mb-1">{location.name}</h4>
                          <p className="text-sm text-[#5C6670]">{location.address}</p>
                          <p className="text-sm text-[#5C6670]">{location.city}</p>
                          <a
                            href={`tel:${location.phone.replace(/\s/g, '')}`}
                            className="text-sm font-medium text-[#1A1D21] hover:text-[#1D2B3A] transition-colors mt-2 inline-block"
                          >
                            {location.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-[#F2F4F7] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#1D2B3A]" />
                  <h3 className="text-xl font-playfair font-bold text-[#1A1D21]">
                    Opening Hours
                  </h3>
                </div>
                <ul className="space-y-3">
                  {siteConfig.contact.hours.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span className="text-[#5C6670]">{item.day}</span>
                      <span className="font-medium text-[#1A1D21]">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
