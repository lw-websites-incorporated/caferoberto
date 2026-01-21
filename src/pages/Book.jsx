import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import HoursTable from '../components/HoursTable';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: '',
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
    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter a phone number.';
    }
    if (!formData.date) {
      nextErrors.date = 'Please select a date.';
    }
    if (!formData.time) {
      nextErrors.time = 'Please select a time.';
    }
    if (!formData.guests) {
      nextErrors.guests = 'Please select a party size.';
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        notes: '',
      });
    }
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
        <title>Book a Table | Cafe Roberto</title>
        <meta
          name="description"
          content="Book a table at Cafe Roberto in High Wycombe. Reserve your table in moments."
        />
      </Helmet>

      <section className="px-6 pb-10 pt-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">Cafe Roberto</p>
            <h1 className="font-display text-4xl text-[color:var(--ink)]">Book a table</h1>
            <p className="text-sm text-[color:var(--muted)]">
              Reserve your table in moments and we will confirm as soon as possible.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border-color)] shadow-[var(--shadow-soft)]">
            <img
              className="h-64 w-full object-cover sm:h-72"
              src="/images/shrimp.jpg"
              alt="Cafe Roberto table setting"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--paper)] px-6 py-10">
        <div className="mx-auto max-w-6xl reveal">
          <div className="rounded-2xl border border-[color:var(--border-color)] bg-white px-6 py-4 text-sm text-[color:var(--muted)] shadow-[var(--shadow-soft)]">
            Busy periods can mean a short delay, but we will keep you updated and seated as soon as we can.
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] reveal">
            <div>
              <h2 className="font-display text-3xl text-[color:var(--ink)]">Reservation request</h2>
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
                  <label className="form-label" htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[color:var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--terracotta)] ${errors.phone ? 'border-red-300' : 'border-[color:var(--border-color)]'}`}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone ? <p className="mt-2 text-xs text-red-500">{errors.phone}</p> : null}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="date">Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[color:var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--terracotta)] ${errors.date ? 'border-red-300' : 'border-[color:var(--border-color)]'}`}
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                    {errors.date ? <p className="mt-2 text-xs text-red-500">{errors.date}</p> : null}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="time">Time</label>
                    <select
                      id="time"
                      name="time"
                      className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[color:var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--terracotta)] ${errors.time ? 'border-red-300' : 'border-[color:var(--border-color)]'}`}
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select time</option>
                      <option value="08:00">8:00 AM</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                    </select>
                    {errors.time ? <p className="mt-2 text-xs text-red-500">{errors.time}</p> : null}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="guests">Party size</label>
                  <select
                    id="guests"
                    name="guests"
                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[color:var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--terracotta)] ${errors.guests ? 'border-red-300' : 'border-[color:var(--border-color)]'}`}
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select party size</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6 people</option>
                    <option value="7">7 people</option>
                    <option value="8">8+ people</option>
                  </select>
                  {errors.guests ? <p className="mt-2 text-xs text-red-500">{errors.guests}</p> : null}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="notes">Notes (optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    className="min-h-[160px] w-full rounded-2xl border border-[color:var(--border-color)] bg-white px-4 py-3 text-sm text-[color:var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--terracotta)]"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special requests or dietary requirements?"
                  ></textarea>
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full border border-[color:var(--terracotta)] bg-[color:var(--terracotta)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:opacity-90">
                  Confirm booking
                </button>
                {submitted ? (
                  <p className="text-sm text-[color:var(--olive)]">Thank you for your booking request. We will confirm shortly.</p>
                ) : null}
              </form>
            </div>

            <div className="space-y-6 rounded-3xl border border-[color:var(--border-color)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">Phone</p>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  Phone details are available on request.
                </p>
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

              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">Address</p>
                <p className="mt-3 text-sm text-[color:var(--muted)]">26-28 White Hart St, High Wycombe HP11 2HL, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Book;
