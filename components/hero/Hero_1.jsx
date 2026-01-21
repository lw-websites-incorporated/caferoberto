import Image from 'next/image'
import { siteConfig } from '@/config/siteConfig'

export default function HeroSection() {
  const { hero, styles, fonts } = siteConfig

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center text-white">
      {/* Background image */}
      <Image
        src={hero.image}
        alt={hero.imageAlt || 'Coffee background'}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main heading and mobile blurb */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight uppercase tracking-wide ${fonts.headingClass}`}>
          {hero.heading}{' '}
          <span className={siteConfig.styles.highlightColour}>{hero.highlightWord}</span>
        </h1>

        {/* Mobile blurb below heading */}
        {hero.blurb && (
          <p className="mt-6 text-sm text-white/80 max-w-md mx-auto block md:hidden">
            {hero.blurb}
          </p>
        )}
      </div>

      {/* Opening hours - bottom left on desktop, stacked center on mobile */}
      <div className="absolute bottom-6 left-0 w-full px-6 md:w-auto md:left-6 flex flex-col md:gap-3 md:items-start items-center justify-center gap-2 z-10">
        <div className="bg-white text-black px-4 py-2 rounded-full shadow text-sm font-semibold">
          {hero.hours.weekdays.label}
          <span className="ml-4">{hero.hours.weekdays.time}</span>
        </div>
        <div className="bg-black/80 text-white px-4 py-2 rounded-full shadow border border-white text-sm font-semibold">
          {hero.hours.saturday.label}–{hero.hours.sunday.label}
          <span className="ml-4">
            {hero.hours.saturday.time} / {hero.hours.sunday.time}
          </span>
        </div>
      </div>

      {/* Desktop-only blurb bottom right */}
      {hero.blurb && (
        <div className="hidden md:block absolute bottom-8 right-6 max-w-xs text-right text-sm text-white/80 z-10">
          {hero.blurb}
        </div>
      )}
    </section>
  )
}