import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Check, ArrowRight } from 'lucide-react';

export default function CarpentryAbout() {
  const { about } = siteConfig;

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2416] mb-6">
              {about.heading}
            </h2>
            <div className="prose prose-lg text-[#5C4033] mb-8">
              {about.content.split('\n\n').slice(0, 2).map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {about.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#5C4033] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#2C2416] font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Learn More Link */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#5C4033] hover:text-[#4A3429] font-semibold transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
