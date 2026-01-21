import { siteConfig } from '@/config/siteConfig';

export default function Testimonials() {
  const { heading, subheading, entries } = siteConfig.testimonials;

  return (
    <section className={`py-24 px-6 md:px-12 border-t ${siteConfig.styles.borderLight}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${siteConfig.styles.textPrimary}`}>
          {heading}
        </h2>
        <p className={`text-lg md:text-xl ${siteConfig.styles.textMuted} mb-12`}>
          {subheading}
        </p>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {entries.map(({ quote, name, title }, i) => (
            <div key={i} className="p-6 rounded-lg border shadow-sm">
              <p className={`${siteConfig.styles.textSubtle} italic mb-4`}>&ldquo;{quote}&rdquo;</p>
              <div className="text-sm font-medium text-gray-900">{name}</div>
              <div className="text-xs text-gray-500">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}