import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

export default function MenuHighlightSection() {
  const menu = siteConfig.menuHighlights;
  const styles = siteConfig.styles;

  return (
    <section className={`py-20 px-6 md:px-12 ${styles.bgLight}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-10 ${styles.textPrimary}`}>
          {menu.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {menu.items.map((item, i) => (
            <div key={i} className="rounded-lg shadow bg-white overflow-hidden">
              <Image
                src={item.image}
                alt={item.label}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className={`p-4 text-sm font-medium ${styles.textSubtle}`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href={menu.cta.href}
            className={`${styles.bgPrimary} ${styles.textLight} px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition`}
          >
            {menu.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}