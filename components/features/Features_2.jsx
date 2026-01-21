import { siteConfig } from '@/config/siteConfig';

export default function IntroFeatureSection() {
  const intro = siteConfig.intro;

  return (
    <section className="py-16 px-6 md:px-12 bg-white text-center">
      <h2 className={`text-3xl font-bold mb-4 ${siteConfig.styles.textPrimary}`}>
        {intro.title}
      </h2>
      <p className={`text-lg mb-8 ${siteConfig.styles.textSubtle}`}>
        {intro.description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {intro.features.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="font-semibold text-md mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}