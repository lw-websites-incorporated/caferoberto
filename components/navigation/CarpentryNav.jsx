'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';
import { X, Menu } from 'lucide-react';

export default function CarpentryNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const nav = siteConfig.nav;

  // Split nav links for left and right sides
  const leftLinks = nav.links.slice(0, 2); // Services, About
  const rightLinks = nav.links.slice(2);   // Gallery, Contact

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Navigation - Logo centered with links on sides */}
        <div className="hidden md:flex items-center justify-center">
          {/* Left Links */}
          <nav className="flex items-center gap-8">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-[#8B7355] ${
                  pathname === link.href ? 'text-[#5C4033]' : 'text-[#2C2416]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <Link href="/" className="mx-12">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={120}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Right Links */}
          <nav className="flex items-center gap-8">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-[#8B7355] ${
                  pathname === link.href ? 'text-[#5C4033]' : 'text-[#2C2416]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#2C2416] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Logo - Centered */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={100}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Placeholder for alignment */}
          <div className="w-6"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <ul className="space-y-0 divide-y divide-gray-100">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-4 text-sm font-medium tracking-wide uppercase transition-colors ${
                    pathname === link.href ? 'text-[#5C4033]' : 'text-[#2C2416]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
