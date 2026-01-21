import './globals.css';
import { Open_Sans, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import { siteConfig } from '@/config/siteConfig';

// Load Open Sans font
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
});

// Load Playfair Display font
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = siteConfig.metadata.base;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${openSans.variable}
          ${playfair.variable}
          font-sans
          antialiased
          bg-[#F2F4F7]
          text-[#1A1D21]
        `}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
