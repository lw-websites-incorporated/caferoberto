'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      {/* Floating navbar container */}
      <nav
        className={`max-w-7xl mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 ${
          scrolled ? 'shadow-xl' : 'shadow-lg'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {siteConfig.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 hover:text-[#1D2B3A] ${
                    pathname === link.href
                      ? 'text-[#1D2B3A]'
                      : 'text-[#1A1D21]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="bg-[#1D2B3A] text-white px-5 py-2.5 rounded font-medium hover:bg-[#15202C] transition-all duration-300 hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-[#1A1D21]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-[500px] mt-4 pt-4 border-t border-gray-100' : 'max-h-0'
            }`}
          >
            <div className="space-y-2">
              {siteConfig.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? 'bg-[#F2F4F7] text-[#1D2B3A]'
                      : 'text-[#1A1D21] hover:bg-[#F2F4F7] hover:text-[#1D2B3A]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#1D2B3A] text-white py-3 px-4 rounded font-medium hover:bg-[#15202C] transition-colors duration-300 mt-2"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
