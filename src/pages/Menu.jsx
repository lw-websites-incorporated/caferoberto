import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import MenuFilters from '../components/MenuFilters';
import MenuSection from '../components/MenuSection';
import { menuSections, menuTags } from '../data/menuData';

const Menu = () => {
  const [search, setSearch] = useState('');
  const [activeTags, setActiveTags] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredSections = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return menuSections
      .map((section) => {
        const items = section.items.filter((item) => {
          const matchesSearch =
            !normalizedSearch ||
            item.name.toLowerCase().includes(normalizedSearch) ||
            (item.description && item.description.toLowerCase().includes(normalizedSearch));
          const matchesTags =
            activeTags.length === 0 ||
            (item.tags && activeTags.some((tag) => item.tags.includes(tag)));
          return matchesSearch && matchesTags;
        });
        return { ...section, items };
      })
      .filter((section) => section.items.length > 0);
  }, [activeTags, search]);

  const handleToggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  return (
    <main className="bg-[color:var(--cream)] text-[color:var(--ink)]">
      <Helmet>
        <title>Cafe Roberto Menu | High Wycombe</title>
        <meta
          name="description"
          content="Explore the Cafe Roberto menu with Italian starters, pasta, pizza, breakfast, and drinks in High Wycombe."
        />
      </Helmet>

      <section className="px-6 pb-8 pt-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">Cafe Roberto</p>
            <h1 className="font-display text-4xl text-[color:var(--ink)]">Our menu</h1>
            <p className="text-sm text-[color:var(--muted)]">
              Italian classics, breakfast favourites, and comforting plates prepared with care.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border-color)] shadow-[var(--shadow-soft)]">
            <img
              className="h-64 w-full object-cover sm:h-72"
              src="/images/lamb.jpg"
              alt="Cafe Roberto signature dishes"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="sticky top-20 z-20 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--paper)] p-4 shadow-[var(--shadow-soft)]">
            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
              {menuSections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="hover:text-[color:var(--terracotta)]">
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          <MenuFilters
            search={search}
            onSearch={setSearch}
            tags={menuTags}
            activeTags={activeTags}
            onToggleTag={handleToggleTag}
          />

          <div className="space-y-12">
            {filteredSections.length ? (
              filteredSections.map((section) => <MenuSection key={section.id} section={section} />)
            ) : (
              <div className="rounded-2xl border border-[color:var(--border-color)] bg-white p-6 text-sm text-[color:var(--muted)]">
                No items match those filters. Try clearing a filter or searching for something else.
              </div>
            )}
          </div>

          <footer className="border-t border-[color:var(--border-color)] pt-6 text-sm text-[color:var(--muted)]">
            <p>
              Please tell us about any allergies. Dishes may be prepared in a kitchen that handles
              allergens.
            </p>
            <Link
              to="/book"
              className="mt-3 inline-block text-[11px] uppercase tracking-[0.3em] text-[color:var(--terracotta)]"
            >
              Book a table
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default Menu;
