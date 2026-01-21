import React from 'react';

const HoursTable = ({ hours }) => {
  return (
    <div className="space-y-2 text-sm text-[color:var(--muted)]">
      {hours.map((entry) => (
        <div key={entry.day} className="flex items-center justify-between border-b border-[color:var(--border-color)] pb-2 last:border-b-0">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink)]">{entry.day}</span>
          <span>{entry.hours}</span>
        </div>
      ))}
    </div>
  );
};

export default HoursTable;
