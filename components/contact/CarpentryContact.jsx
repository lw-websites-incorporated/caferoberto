'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function CarpentryContact() {
  const { contact } = siteConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2416] mb-4">
            {contact.heading}
          </h2>
          <p className="text-lg text-[#5C4033] max-w-2xl mx-auto">
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#2C2416] mb-6">
                Contact Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4C4B0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#5C4033]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B7355] mb-1">Phone</p>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="text-lg font-medium text-[#2C2416] hover:text-[#5C4033] transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4C4B0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#5C4033]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B7355] mb-1">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-lg font-medium text-[#2C2416] hover:text-[#5C4033] transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4C4B0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#5C4033]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B7355] mb-1">Service Area</p>
                    <p className="text-lg font-medium text-[#2C2416]">
                      {contact.serviceArea}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-[#FAF8F5] rounded-xl p-6 border border-[#D4C4B0]">
              <h4 className="font-semibold text-[#2C2416] mb-3">
                Free Quotes & Consultations
              </h4>
              <p className="text-[#5C4033] leading-relaxed">
                Get in touch to discuss your project. We offer free, no-obligation
                quotes and are happy to visit your property to provide accurate
                estimates.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#FAF8F5] rounded-xl p-8 border border-[#D4C4B0]">
            <h3 className="text-xl font-semibold text-[#2C2416] mb-6">
              {contact.form.heading}
            </h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-medium">
                  Thank you for your message! We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#2C2416] mb-2"
                  >
                    {contact.form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={contact.form.fields.name.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D4C4B0] bg-white text-[#2C2416] placeholder-[#8B7355] focus:outline-none focus:ring-2 focus:ring-[#5C4033] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#2C2416] mb-2"
                  >
                    {contact.form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={contact.form.fields.email.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D4C4B0] bg-white text-[#2C2416] placeholder-[#8B7355] focus:outline-none focus:ring-2 focus:ring-[#5C4033] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#2C2416] mb-2"
                  >
                    {contact.form.fields.phone.label}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={contact.form.fields.phone.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-[#D4C4B0] bg-white text-[#2C2416] placeholder-[#8B7355] focus:outline-none focus:ring-2 focus:ring-[#5C4033] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#2C2416] mb-2"
                  >
                    {contact.form.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contact.form.fields.message.placeholder}
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D4C4B0] bg-white text-[#2C2416] placeholder-[#8B7355] focus:outline-none focus:ring-2 focus:ring-[#5C4033] focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5C4033] hover:bg-[#4A3429] text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  {contact.form.button}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
