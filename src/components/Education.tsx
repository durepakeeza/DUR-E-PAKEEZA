import { EDUCATION, PROFILE } from '../data/resume';
import { Reveal } from './Reveal';

export function Education() {
  return (
    <section
      id="education"
      className="bg-[#0E0E10] text-[#FAF8F5] border-b border-[#27272B]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <Reveal className="space-y-3">
              <p className="text-[13px] font-semibold tracking-[0.14em] text-[#C8A96A] uppercase">
                Education
              </p>
              <h2 className="font-display text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.12] text-[#FAF8F5]">
                Academic Foundation
              </h2>
            </Reveal>

            <div className="relative mt-10 space-y-6 md:pl-10">
              <div
                aria-hidden="true"
                className="hidden md:block absolute left-3 top-2 bottom-2 w-px bg-[#27272B]"
              />

              {EDUCATION.map((edu, index) => (
                <Reveal key={edu.id} delay={index * 0.08}>
                  <article className="relative rounded-sm border border-[#27272B] bg-[#141417] p-6 sm:p-7 transition-colors duration-200 hover:border-[#C8A96A]/45">
                    <div
                      aria-hidden="true"
                      className="hidden md:flex absolute -left-[34px] top-8 h-3 w-3 rotate-45 border border-[#C8A96A] bg-[#0E0E10]"
                    />
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-display text-[24px] font-medium leading-snug text-[#FAF8F5]">
                        {edu.degree}
                      </h3>
                      <span className="text-[13px] font-medium text-[#C8A96A] whitespace-nowrap shrink-0 tabular-nums">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] text-[#A8A29A]">
                      {edu.institution}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.12} className="space-y-3">
              <p className="text-[13px] font-semibold tracking-[0.14em] text-[#C8A96A] uppercase">
                Languages
              </p>
              <h2 className="font-display text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.12] text-[#FAF8F5]">
                Communication
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 rounded-sm border border-[#27272B] bg-[#141417] p-6 sm:p-7">
                <ul className="divide-y divide-[#27272B]">
                  {PROFILE.languages.map((language, index) => (
                    <li
                      key={language}
                      className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                    >
                      <span className="font-display text-[22px] font-medium text-[#FAF8F5]">
                        {language}
                      </span>
                      <span className="text-[12px] text-[#A8A29A] tabular-nums">
                        0{index + 1}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
