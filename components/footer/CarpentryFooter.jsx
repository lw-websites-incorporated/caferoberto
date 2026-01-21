import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

export default function CarpentryFooter() {
  const { siteName, footer, contact } = siteConfig;

  return (
    <footer className="bg-[#2C2416] text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteName}</h3>
            <p className="text-[#D4C4B0] text-sm leading-relaxed">
              Quality craftsmanship for over 15 years. Bespoke carpentry services
              for homes across Surrey and South London.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footer.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#D4C4B0] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-[#D4C4B0]">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li>{contact.serviceArea}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#5C4033] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#8B7355]">
            <p>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Quality Craftsmanship, Built to Last
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
