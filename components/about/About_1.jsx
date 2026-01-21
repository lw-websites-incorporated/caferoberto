import { siteConfig } from '@/config/siteConfig';

export default function AboutUs() {
  const { heading, subheading, features } = siteConfig.about;
  const { textPrimary, textSubtle, textMuted, bgLight } = siteConfig.styles;

  return (
    <section className={`py-24 px-6 md:px-12 ${bgLight}`}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${textPrimary}`}>
          {heading}
        </h2>
        <p className={`text-lg md:text-xl ${textSubtle}`}>
          {subheading}
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all duration-200"
          >
            <div className="mb-4">
              <div className="w-10 h-10 rounded-full bg-[#78ADA5] opacity-80 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-bold">
                {feature.title.charAt(0)}
              </div>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>
              {feature.title}
            </h3>
            <p className={`text-sm ${textMuted}`}>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}