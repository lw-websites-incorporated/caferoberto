import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import HoursTable from '../components/HoursTable';
import TestimonialGrid from '../components/TestimonialGrid';

const Home = () => {
  useEffect(() => {
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

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
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

  const highlights = [
    {
      title: 'Breakfast and continental pastries',
      description:
        'Croissants, muffins, and warm waffles with Italian ice cream, alongside classic breakfast plates.',
      image: '/images/shrimp.jpg',
      alt: 'Breakfast pastries and coffee at Cafe Roberto',
    },
    {
      title: 'Pasta, pizza, and calzone',
      description:
        'Italian favourites prepared with care, from slow-baked lasagne to crisp, generous pizzas.',
      image: '/images/pizza.jpg',
      alt: 'Freshly prepared pasta and pizza',
    },
    {
      title: 'Terrace dinners and house wine',
      description:
        'Easy evenings on the terrace with a glass of house wine and comforting plates to share.',
      image: '/images/wine.jpg',
      alt: 'Wine and terrace dining at dusk',
    },
  ];

  const testimonials = [
    {
      name: 'Tina B',
      quote: 'A really enjoyable lunch with excellent value. The lasagne tasted homemade and everything looked spotless.',
      date: '18 Feb 2025',
    },
    {
      name: 'yolandacarnell',
      quote: 'Excellent Italian food with warm service. The pasta is fantastic and the salmon tagliatelle is a winner.',
      date: '18 Jan 2025',
    },
    {
      name: 'Peter H',
      quote: 'The best in High Wycombe for welcoming, home cooked Italian food. It was cold that night and desserts were limited.',
      date: '17 Jan 2025',
    },
    {
      name: 'chantalrowland',
      quote: 'We are regulars and the owners, staff, and food are exceptional. Authentic and fresh.',
      date: '9 Dec 2024',
    },
    {
      name: 'sandsayers',
      quote: 'Freshly cooked, plentiful dishes and a lovely house Pinot Grigio. Pastas and desserts were excellent.',
      date: '29 Sept 2024',
    },
    {
      name: 'Aisling F',
      quote: 'A fantastic breakfast spot with friendly, quick service. Lovely outside when it is sunny.',
      date: '5 Sept 2024',
    },
    {
      name: 'Pedro P',
      quote: 'Best Italian food in High Wycombe and the best calzone in Bucks. Thanks to chef Lello and Zeinab.',
      date: '30 June 2024',
    },
    {
      name: 'Agnie M',
      quote: 'Tasty meals and professional service with genuine empathy for a wheelchair user. Thank you, Zeinab.',
      date: '25 June 2024',
    },
  ];

  const galleryItems = [
    { src: '/images/Robertos.webp', alt: 'Cafe Roberto interior atmosphere' },
    { src: '/images/lamb.jpg', alt: 'Lamb cutlets plated for dinner' },
    { src: '/images/tuna-steak.jpg', alt: 'Tuna steak with Italian sides' },
    { src: '/images/swordfish.jpg', alt: 'Swordfish served with fresh garnish' },
    { src: '/images/pizza.jpg', alt: 'Stone baked pizza ready to serve' },
    { src: '/images/shrimp.jpg', alt: 'Prawn dish from the menu' },
  ];

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
        <title>Cafe Roberto Italian Dining in High Wycombe</title>
        <meta
          name="description"
          content="Cafe Roberto is a warm Italian cafe and restaurant in High Wycombe, serving breakfast, lunch, and dinner with friendly service."
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative min-h-[85vh] overflow-hidden px-6 pb-16 pt-28">
        <img
          src="/images/Robertos%20Hero.webp"
          alt="Cafe Roberto dining room"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="relative mx-auto max-w-6xl"></div>
      </section>

      <section className="bg-[color:var(--paper)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="reveal space-y-4">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">Our story</p>
            <h2 className="font-display text-3xl text-[color:var(--ink)]">
              A charming dining spot with an inviting atmosphere and friendly service.
            </h2>
            <p>
              Cafe Roberto is a welcoming space for breakfast, lunch, and unhurried dinners. Expect
              Italian warmth, familiar classics, and a team that takes care of the details.
            </p>
            <p>
              Mornings begin with continental pastries and a proper breakfast line up, while lunch
              leans into warm salads, baked potatoes, and pasta that feels like home. As the day
              settles, the terrace comes into its own with simple, generous plates and a glass of
              house wine.
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              We keep the pace calm and the welcome genuine, so you can slow down, linger, and enjoy
              the atmosphere.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="reveal flex items-end justify-between border-b border-[color:var(--border-color)] pb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">Highlights</p>
              <h2 className="font-display text-3xl text-[color:var(--ink)]">What we are known for</h2>
            </div>
            <Link to="/menu" className="text-xs uppercase tracking-[0.3em] text-[color:var(--terracotta)]">
              View menu
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className={`reveal flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--border-color)] ${index % 2 === 0 ? 'bg-white' : 'bg-[color:var(--paper)]'} shadow-[var(--shadow-soft)]`}
              >
                <div className="h-48 overflow-hidden">
                  <img src={highlight.image} alt={highlight.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-xl text-[color:var(--ink)]">{highlight.title}</h3>
                  <p className="text-sm text-[color:var(--muted)]">{highlight.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">Reviews</p>
            <h2 className="font-display text-3xl text-[color:var(--ink)]">Guests say it best</h2>
          </div>
          <TestimonialGrid testimonials={testimonials} />
          <p className="text-xs text-[color:var(--muted)]">
            Service can be slower at peak times, thank you for your patience.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--paper)] px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">Gallery</p>
            <h2 className="font-display text-3xl text-[color:var(--ink)]">A look inside Cafe Roberto</h2>
          </div>
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="reveal space-y-4">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">Location</p>
            <h2 className="font-display text-3xl text-[color:var(--ink)]">Find us in the heart of town</h2>
            <p className="text-sm text-[color:var(--muted)]">
              26-28 White Hart St, High Wycombe HP11 2HL, United Kingdom
            </p>
            <HoursTable hours={hours} />
            <a
              href="https://maps.google.com/?q=26-28%20White%20Hart%20St%20High%20Wycombe%20HP11%202HL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[color:var(--terracotta)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[color:var(--terracotta)] transition hover:bg-[color:var(--terracotta)] hover:text-white"
            >
              Get directions
            </a>
          </div>
          <div className="reveal overflow-hidden rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--paper)] p-6 shadow-[var(--shadow-soft)]">
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

      <section className="bg-[color:var(--paper)] px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-[color:var(--border-color)] bg-white p-8 shadow-[var(--shadow-soft)] md:flex-row md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">Bookings</p>
            <h2 className="font-display text-3xl text-[color:var(--ink)]">Reserve a table for your next visit</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              We will do our best to seat you quickly, even on busy days.
            </p>
          </div>
          <Link
            to="/book"
            className="rounded-full border border-[color:var(--terracotta)] bg-[color:var(--terracotta)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:opacity-90"
          >
            Book a table
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
