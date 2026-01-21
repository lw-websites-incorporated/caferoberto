import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HoursTable from '../components/HoursTable';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Please share a message so we can help.';
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cafe Roberto',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '26-28 White Hart St',
      addressLocality: 'High Wycombe',
      addressRegion: 'Buckinghamshire',
      postalCode: 'HP11 2HL',
      addressCountry: 'GB',
    },
  };

  const hours = [
    { day: 'Wednesday', hours: '9am to 6pm' },
    { day: 'Thursday', hours: '9am to 9pm' },
    { day: 'Friday', hours: '9am to 9pm' },
    { day: 'Saturday', hours: '9am to 9pm' },
    { day: 'Sunday', hours: '9am to 6pm' },
    { day: 'Monday', hours: '9am to 6pm' },
    { day: 'Tuesday', hours: '9am to 6pm' },
  ];

  return (
    <main className="bg-[color:var(--cream)] text-[color:var(--ink)]">
      <Helmet>
        <title>Contact Cafe Roberto | High Wycombe</title>
        <meta
          name="description"
          content="Contact Cafe Roberto in High Wycombe for bookings, questions, or feedback. Find our address and opening hours."
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="px-6 pb-10 pt-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">Cafe Roberto</p>
            <h1 className="font-display text-4xl text-[color:var(--ink)]">Contact Cafe Roberto</h1>
            <p className="text-sm text-[color:var(--muted)]">
              Questions, bookings, or anything you would like to ask? Get in touch and we will reply
              as soon as we can.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border-color)] shadow-[var(--shadow-soft)]">
            <img
              className="h-64 w-full object-cover sm:h-72"
              src="/images/wine.jpg"
              alt="Cafe Roberto seating area"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--paper)] px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <h2 className="font-display text-3xl text-[color:var(--ink)]">We would love to hear from you</h2>
            <p className="mt-3 max-w-2xl text-sm text-[color:var(--muted)]">
              Whether you are planning a visit, organising a catch up, or sharing feedback, we are
              always happy to help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] reveal">
            <div>
              <h2 className="font-display text-3xl text-[color:var(--ink)]">Send us a message</h2>
              <form className="mt-6 space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[color:var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--terracotta)] ${errors.name ? 'border-red-300' : 'border-[color:var(--border-color)]'}`}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name ? <p className="mt-2 text-xs text-red-500">{errors.name}</p> : null}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[color:var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--terracotta)] ${errors.email ? 'border-red-300' : 'border-[color:var(--border-color)]'}`}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email ? <p className="mt-2 text-xs text-red-500">{errors.email}</p> : null}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`min-h-[160px] w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[color:var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--terracotta)] ${errors.message ? 'border-red-300' : 'border-[color:var(--border-color)]'}`}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  ></textarea>
                  {errors.message ? <p className="mt-2 text-xs text-red-500">{errors.message}</p> : null}
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full border border-[color:var(--terracotta)] bg-[color:var(--terracotta)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:opacity-90">
                  Send message
                </button>
                {submitted ? (
                  <p className="text-sm text-[color:var(--olive)]">Thank you for your message. We will be in touch shortly.</p>
                ) : null}
              </form>
            </div>

            <div className="rounded-3xl border border-[color:var(--border-color)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-2xl text-[color:var(--ink)]">Contact details</h2>
              <div className="mt-5 space-y-5 text-sm text-[color:var(--muted)]">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">Address</p>
                  <p className="mt-2">26-28 White Hart St, High Wycombe HP11 2HL, United Kingdom</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">Phone</p>
                  <p className="mt-2">Available on request</p>
                  <button
                    type="button"
                    className="mt-3 inline-flex cursor-not-allowed items-center justify-center rounded-full border border-[color:var(--border-color)] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]"
                    aria-disabled="true"
                  >
                    Call
                  </button>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">Opening hours</p>
                  <div className="mt-3">
                    <HoursTable hours={hours} />
                  </div>
                </div>
              </div>
              <Link to="/book" className="mt-6 inline-flex items-center justify-center rounded-full border border-[color:var(--terracotta)] px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-[color:var(--terracotta)] transition hover:bg-[color:var(--terracotta)] hover:text-white">
                Book a table
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--paper)] px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <h2 className="font-display text-3xl text-[color:var(--ink)]">Find us</h2>
            <p className="mt-3 text-sm text-[color:var(--muted)]">We are in the heart of High Wycombe.</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-[color:var(--border-color)] bg-white p-6 shadow-[var(--shadow-soft)]">
            <iframe
              title="Cafe Roberto location map"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=26-28%20White%20Hart%20St%20High%20Wycombe%20HP11%202HL&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl border border-[color:var(--border-color)]"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
