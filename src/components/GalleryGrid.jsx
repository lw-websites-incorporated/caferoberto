import React from 'react';

const GalleryGrid = ({ items }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure
          key={item.alt}
          className="group relative overflow-hidden rounded-2xl border border-[color:var(--border-color)] bg-white shadow-[var(--shadow-soft)]"
        >
          {item.src ? (
            <img
              src={item.src}
              alt={item.alt}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-64 items-center justify-center bg-[color:var(--paper)] text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
              {item.label}
            </div>
          )}
        </figure>
      ))}
    </div>
  );
};

export default GalleryGrid;
