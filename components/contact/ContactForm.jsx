'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-[#1A1D21] mb-2">
          Thank You!
        </h3>
        <p className="text-[#5C6670] mb-6">
          Your message has been sent successfully. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-[#1D2B3A] font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-playfair font-bold text-[#1A1D21] mb-6">
        {siteConfig.contact.form.heading}
      </h3>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1A1D21] mb-2">
            {siteConfig.contact.form.fields.name.label} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={siteConfig.contact.form.fields.name.placeholder}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2B3A] transition-all ${
              errors.name ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1A1D21] mb-2">
            {siteConfig.contact.form.fields.email.label} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={siteConfig.contact.form.fields.email.placeholder}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2B3A] transition-all ${
              errors.email ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1A1D21] mb-2">
            {siteConfig.contact.form.fields.phone.label}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={siteConfig.contact.form.fields.phone.placeholder}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2B3A] transition-all"
          />
        </div>

        {/* Service Dropdown */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[#1A1D21] mb-2">
            {siteConfig.contact.form.fields.service.label}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2B3A] transition-all bg-white"
          >
            <option value="">Select a service...</option>
            {siteConfig.contact.form.fields.service.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#1A1D21] mb-2">
            {siteConfig.contact.form.fields.message.label} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={siteConfig.contact.form.fields.message.placeholder}
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2B3A] transition-all resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1D2B3A] text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#15202C] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {siteConfig.contact.form.button}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
