import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Phone } from 'lucide-react';

export default function CarpentryHero() {
  const { hero, contact } = siteConfig;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white">
      {/* Background image */}
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2C2416]/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
          {hero.heading}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          {hero.subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
          <Link
            href={hero.ctaHref}
            className="inline-block bg-[#5C4033] hover:bg-white text-white hover:text-[#5C4033] font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-150 cursor-pointer"
          >
            {hero.ctaText}
          </Link>
          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 bg-[#5C4033] hover:bg-white text-white hover:text-[#5C4033] font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-150 cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
