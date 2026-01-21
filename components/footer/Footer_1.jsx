import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from 'lucide-react';
import { FaTripadvisor, FaTiktok } from 'react-icons/fa';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
  const { siteName, footer, styles } = siteConfig;
  const {
    instagram,
    facebook,
    twitter,
    linkedin,
    tiktok,
    youtube,
    tripadvisor,
  } = footer.social;

  const socialLinks = [
    { href: instagram, label: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
    { href: facebook, label: 'Facebook', icon: <Facebook className="w-5 h-5" /> },
    { href: twitter, label: 'Twitter', icon: <Twitter className="w-5 h-5" /> },
    { href: linkedin, label: 'LinkedIn', icon: <Linkedin className="w-5 h-5" /> },
    { href: youtube, label: 'YouTube', icon: <Youtube className="w-5 h-5" /> },
    { href: tiktok, label: 'TikTok', icon: <FaTiktok className="w-5 h-5" /> },
    { href: tripadvisor, label: 'TripAdvisor', icon: <FaTripadvisor className="w-5 h-5" /> },
  ].filter(link => !!link.href); // Only show if defined

  return (
    <footer className={`bg-white border-t ${styles.borderDark} py-12 px-6 md:px-12`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>

        <nav className="flex space-x-6 mb-4 md:mb-0">
          {footer.nav.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gray-900 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {socialLinks.length > 0 && (
          <div className="flex space-x-4">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-gray-900 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
