import React from 'react';

const MenuFilters = ({ search, onSearch, tags, activeTags, onToggleTag }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[color:var(--border-color)] bg-white p-4 shadow-[var(--shadow-soft)] md:flex-row md:items-center md:justify-between">
      <label className="flex w-full items-center gap-3 text-sm text-[color:var(--muted)] md:max-w-sm">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)]">Search</span>
        <input
          type="search"
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Search the menu"
          className="w-full rounded-full border border-[color:var(--border-color)] bg-[color:var(--paper)] px-4 py-2 text-sm text-[color:var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--terracotta)]"
        />
      </label>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isActive = activeTags.includes(tag.id);
          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => onToggleTag(tag.id)}
              className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition ${
                isActive
                  ? 'border-[color:var(--terracotta)] bg-[color:var(--terracotta)] text-white'
                  : 'border-[color:var(--border-color)] bg-white text-[color:var(--ink)] hover:border-[color:var(--terracotta)]'
              }`}
            >
              {tag.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MenuFilters;
