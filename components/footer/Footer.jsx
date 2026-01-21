import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1D21] text-white">
      {/* CTA Banner */}
      <div className="bg-[#1D2B3A] py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-2">
            {siteConfig.cta.heading}
          </h2>
          <p className="text-white/90 mb-6">{siteConfig.cta.subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.cta.buttonHref}
              className="inline-block bg-white text-[#1D2B3A] px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
            >
              {siteConfig.cta.buttonText}
            </Link>
            <a
              href={siteConfig.cta.secondaryButtonHref}
              className="inline-block border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-[#1D2B3A] transition-all duration-300"
            >
              {siteConfig.cta.secondaryButtonText}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Bespoke carpentry services for residential and commercial clients across North West London and the Chilterns.
            </p>
            <div className="accent-line" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.footer.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#1D2B3A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
            <div className="space-y-6">
              {siteConfig.footer.locations?.map((location) => (
                <div key={location.name} className="text-sm">
                  <h5 className="font-semibold text-[#1D2B3A] mb-1">{location.name}</h5>
                  <p className="text-white/70">{location.address}</p>
                  <p className="text-white/70">{location.city}</p>
                  <a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="text-white/70 hover:text-[#1D2B3A] transition-colors duration-300"
                  >
                    {location.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-[#1D2B3A] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-[#1D2B3A]" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-[#1D2B3A] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.serviceArea}</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {siteConfig.footer.social.instagram && (
                <a
                  href={siteConfig.footer.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1D2B3A] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.footer.social.facebook && (
                <a
                  href={siteConfig.footer.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1D2B3A] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteConfig.footer.social.whatsapp && (
                <a
                  href={siteConfig.footer.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1D2B3A] transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              )}
              {siteConfig.footer.social.email && (
                <a
                  href={siteConfig.footer.social.email}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1D2B3A] transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
              {siteConfig.footer.social.phone && (
                <a
                  href={siteConfig.footer.social.phone}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1D2B3A] transition-colors duration-300"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <p className="text-white/50 text-sm text-center">
            &copy; {currentYear} {siteConfig.footer.copyright}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
