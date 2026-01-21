'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = siteConfig.nav;

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              height={siteConfig.logo.height}
              priority
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
            {nav.links.map(link => (
              <a key={link.href} href={link.href} className="hover:text-amber-600 transition">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="hidden md:block">
          <a
            href="/contact"
            className="bg-slate-600 text-white px-5 py-1.5 rounded-full text-sm font-medium shadow hover:bg-slate-700 transition"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 text-sm font-semibold text-gray-700 transition-all">
          <ul className="space-y-0 divide-y divide-gray-200">
            {nav.links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 hover:text-amber-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-white bg-slate-600 px-4 py-2 rounded-md text-center hover:bg-slate-700 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
