import React from 'react';

const TestimonialGrid = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {testimonials.map((testimonial) => (
        <article
          key={`${testimonial.name}-${testimonial.date}`}
          className="border-b border-[color:var(--border-color)] pb-4 last:border-b-0"
        >
          <p className="text-sm text-[color:var(--muted)]">"{testimonial.quote}"</p>
          <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink)]">
            <span className="font-medium">{testimonial.name}</span>
            <span className="ml-2 text-[color:var(--muted)]">{testimonial.date}</span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default TestimonialGrid;
