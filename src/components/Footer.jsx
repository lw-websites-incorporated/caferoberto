import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[color:var(--paper)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">Cafe Roberto</h4>
            <p className="mt-4 font-display text-lg text-[color:var(--ink)]">
              Warm Italian hospitality with a relaxed High Wycombe rhythm.
            </p>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              26-28 White Hart St, High Wycombe HP11 2HL, United Kingdom
            </p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">Phone: available on request</p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">Opening Hours</h4>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              Wednesday 9am to 6pm
              <br />
              Thursday 9am to 9pm
              <br />
              Friday 9am to 9pm
              <br />
              Saturday 9am to 9pm
              <br />
              Sunday 9am to 6pm
              <br />
              Monday 9am to 6pm
              <br />
              Tuesday 9am to 6pm
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">Quick Links</h4>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-[color:var(--ink)]">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/book">Book</Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-[color:var(--border-color)] pt-6 text-xs text-[color:var(--muted)]">
          <p>Cafe Roberto, High Wycombe.</p>
          <p className="mt-3">&copy; {new Date().getFullYear()} Cafe Roberto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
