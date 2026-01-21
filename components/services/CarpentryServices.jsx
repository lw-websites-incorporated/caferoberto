import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import {
  ChefHat,
  Armchair,
  ShirtIcon,
  Layers,
  DoorOpen,
  Hammer,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  kitchen: ChefHat,
  furniture: Armchair,
  wardrobe: ShirtIcon,
  flooring: Layers,
  door: DoorOpen,
  hammer: Hammer,
};

export default function CarpentryServices() {
  const { services } = siteConfig;

  return (
    <section className="py-20 px-6 md:px-12 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2416] mb-4">
            {services.heading}
          </h2>
          <p className="text-lg text-[#5C4033] max-w-2xl mx-auto">
            {services.subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Hammer;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#D4C4B0]/30"
              >
                <div className="w-14 h-14 bg-[#D4C4B0] rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-[#5C4033]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C2416] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#5C4033] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#5C4033] hover:text-[#4A3429] font-semibold transition-colors"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
