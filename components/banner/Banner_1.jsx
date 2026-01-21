'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

export default function BannerStrip() {
  const [visible, setVisible] = useState(true);
  const banner = siteConfig.banner;

  if (!banner.show || !visible) return null;

  return (
    <div className={`${siteConfig.styles.bgPrimary} ${siteConfig.styles.textLight} text-sm py-3 px-4 relative`}>
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-4 text-xl font-bold hover:opacity-70 transition"
        aria-label="Close"
      >
        &times;
      </button>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        <span className="text-base font-medium">{banner.message}</span>
        <a
          href={banner.cta.href}
          className="underline hover:opacity-80 transition text-base font-semibold"
        >
          {banner.cta.label}
        </a>
      </div>
    </div>
  );
}