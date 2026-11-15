import { useState } from 'react';
import { SKILL_GROUPS, SkillGroup } from '../data/resume';
import { Reveal } from './Reveal';

type FilterId = 'all' | SkillGroup['id'];

const FILTER_OPTIONS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'design', label: 'Design & Optimization' },
  { id: 'tools', label: 'Tools' },
  { id: 'soft', label: 'Soft Skills' },
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');

  const visibleGroups =
    activeFilter === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.id === activeFilter);

  return (
    <section
      id="skills"
      className="bg-[#0E0E10] text-[#FAF8F5] border-b border-[#27272B]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-[#C8A96A] uppercase">
              Technical Skills
            </p>
            <h2 className="font-display text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.12] text-[#FAF8F5]">
              Capabilities &amp; Discipline
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter skill categories"
            className="flex flex-wrap items-center gap-1.5 rounded-sm border border-[#27272B] bg-[#141417] p-1"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(option.id)}
                  className={`min-h-[38px] rounded-sm px-3.5 py-1.5 text-[12px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isSelected
                      ? 'bg-[#C8A96A] text-[#0E0E10]'
                      : 'text-[#A8A29A] hover:text-[#FAF8F5]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleGroups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 0.06}
              className={
                group.id === 'soft' && activeFilter === 'all'
                  ? 'md:col-span-2 lg:col-span-2'
                  : ''
              }
            >
              <div className="h-full rounded-sm border border-[#27272B] bg-[#141417] p-6 sm:p-7 transition-colors duration-200 hover:border-[#C8A96A]/45">
                <div className="flex items-baseline justify-between border-b border-[#27272B] pb-4">
                  <h3 className="font-display text-[24px] font-medium text-[#FAF8F5]">
                    {group.label}
                  </h3>
                  <span className="text-[12px] text-[#A8A29A] tabular-nums">
                    {group.items.length} Skills
                  </span>
                </div>

                <ul
                  className={`mt-5 grid gap-x-6 gap-y-2.5 ${
                    group.id === 'soft' && activeFilter === 'all'
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : 'grid-cols-1'
                  }`}
                >
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 border-b border-[#27272B]/55 pb-2.5 text-[14px] text-[#D7D2C9] last:border-b-0 sm:last:border-b"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-3 shrink-0 bg-[#C8A96A]/75"
                      />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
