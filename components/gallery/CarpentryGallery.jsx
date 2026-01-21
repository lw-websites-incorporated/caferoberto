'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { ArrowRight, X } from 'lucide-react';

export default function CarpentryGallery() {
  const { gallery } = siteConfig;
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="py-20 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2416] mb-4">
              {gallery.heading}
            </h2>
            <p className="text-lg text-[#5C4033] max-w-2xl mx-auto">
              {gallery.subheading}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(image)}
                className="relative h-64 md:h-72 rounded-xl overflow-hidden shadow-md group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#2C2416]/0 group-hover:bg-[#2C2416]/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[#5C4033] hover:text-[#4A3429] font-semibold transition-colors"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
