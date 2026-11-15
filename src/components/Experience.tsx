import { EXPERIENCES } from '../data/resume';
import { Reveal } from './Reveal';

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0E0E10] text-[#FAF8F5] border-b border-[#27272B]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <Reveal className="max-w-2xl space-y-3">
          <p className="text-[13px] font-semibold tracking-[0.14em] text-[#C8A96A] uppercase">
            Experience
          </p>
          <h2 className="font-display text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.12] text-[#FAF8F5]">
            Professional Journey
          </h2>
          <p className="text-[15px] leading-relaxed text-[#A8A29A]">
            WordPress and frontend engineering roles delivering responsive, customized websites for remote teams and clients.
          </p>
        </Reveal>

        <div className="relative mt-14 space-y-8 md:pl-10">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-3 top-2 bottom-2 w-px bg-[#27272B]"
          />

          {EXPERIENCES.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 0.08}>
              <article className="relative rounded-sm border border-[#27272B] bg-[#141417] p-6 sm:p-8 transition-colors duration-200 hover:border-[#C8A96A]/45">
                <div
                  aria-hidden="true"
                  className="hidden md:flex absolute -left-[34px] top-9 h-3 w-3 rotate-45 border border-[#C8A96A] bg-[#0E0E10]"
                />

                <div className="flex flex-col gap-3 border-b border-[#27272B] pb-5 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-[26px] font-medium leading-tight text-[#FAF8F5]">
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-[14px] font-medium text-[#C8A96A]">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[13px] text-[#A8A29A] tabular-nums">
                    <span>{exp.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3.5 text-[14px] sm:text-[15px] leading-[1.65] text-[#D0CBC2]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-3 shrink-0 bg-[#C8A96A]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
