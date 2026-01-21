import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Contact' },
    { path: '/book', label: 'Book' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition ${isScrolled ? 'border-b border-[color:var(--border-color)] bg-white/80 backdrop-blur-lg' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 font-display text-xl tracking-[0.2em] text-[color:var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--terracotta)]"
        >
          <img
            src="/images/Logo%20.gif"
            alt="Cafe Roberto logo"
            className="h-9 w-9 rounded-full border border-[color:var(--border-color)] bg-white object-cover"
          />
          <span>Cafe Roberto</span>
        </Link>
        <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.25em] text-[color:var(--ink)] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`border-b border-transparent pb-1 transition hover:border-[color:var(--terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--terracotta)] ${location.pathname === link.path ? 'border-[color:var(--terracotta)] text-[color:var(--terracotta)]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[color:var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--terracotta)] md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          Menu
          <span className="h-[1px] w-6 bg-[color:var(--ink)]"></span>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t border-[color:var(--border-color)] bg-white px-6 py-4`}
      >
        <nav className="flex flex-col gap-4 text-xs uppercase tracking-[0.25em] text-[color:var(--ink)]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`border-b border-transparent pb-2 transition hover:border-[color:var(--terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--terracotta)] ${location.pathname === link.path ? 'border-[color:var(--terracotta)] text-[color:var(--terracotta)]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
