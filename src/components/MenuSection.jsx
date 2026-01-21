import React from 'react';

const MenuSection = ({ section }) => {
  return (
    <section id={section.id} className="scroll-mt-32">
      <div className="flex items-end justify-between border-b border-[color:var(--border-color)] pb-4">
        <h2 className="font-display text-2xl text-[color:var(--ink)] md:text-3xl">{section.title}</h2>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
          Cafe Roberto
        </span>
      </div>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {section.items.map((item) => (
          <li key={`${section.id}-${item.name}`} className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-lg text-[color:var(--ink)]">{item.name}</h3>
              {item.price ? (
                <span className="text-sm text-[color:var(--terracotta)]">{item.price}</span>
              ) : null}
            </div>
            {item.description ? (
              <p className="text-sm text-[color:var(--muted)]">{item.description}</p>
            ) : null}
            {item.tags && item.tags.length ? (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={`${section.id}-${item.name}-${tag}`}
                    className="rounded-full border border-[color:var(--border-color)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuSection;
