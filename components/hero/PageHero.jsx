import Image from 'next/image';

export default function PageHero({
  title,
  subtitle,
  image = 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2340&auto=format&fit=crop',
  imageAlt = 'Page header background',
  imagePosition = 'center',
  imageScale = 1,
  minHeightClass = 'min-h-[40vh] md:min-h-[50vh]'
}) {
  return (
    <section className={`relative ${minHeightClass} flex items-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition, transform: `scale(${imageScale})` }}
          priority
          quality={85}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1A1D21]/70" />

      {/* Decorative element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-[#1D2B3A] hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container-custom py-32 text-center">
        {/* Accent line */}
        <div className="accent-line-center mb-6" />

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-white mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
