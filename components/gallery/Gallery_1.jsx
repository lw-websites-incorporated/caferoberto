'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = siteConfig.gallery.images;

  return (
    <section className={`${siteConfig.styles.bgLight} py-24 px-6 md:px-12 border-t ${siteConfig.styles.borderLight}`}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map(({ src, alt }, i) => (
            <div
              key={i}
              className="cursor-pointer group relative overflow-hidden rounded-lg border hover:shadow-md transition"
              onClick={() => setSelectedImage({ src, alt })}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full px-6" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
