import { SERVICES } from '../data/resume';
import { Reveal } from './Reveal';

export function Services() {
  return (
    <section
      id="services"
      className="bg-[#F7F4EE] text-[#141416] border-b border-[#E2DBD0]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <Reveal className="max-w-2xl space-y-3">
          <p className="text-[13px] font-semibold tracking-[0.14em] text-[#9B7B3E] uppercase">
            Services
          </p>
          <h2 className="font-display text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.12] text-[#141416]">
            How I Can Help Your Team
          </h2>
          <p className="text-[15px] leading-relaxed text-[#5C5852]">
            Focused web development and WordPress customization services grounded in clean implementation and responsive design.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.index} delay={index * 0.04} className="flex">
              <div className="flex w-full flex-col justify-between rounded-sm border border-[#E2DBD0] bg-[#FAF8F5] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#9B7B3E]/60">
                <div className="space-y-3">
                  <p className="font-display text-[22px] font-medium text-[#9B7B3E] tabular-nums">
                    {service.index}
                  </p>
                  <h3 className="text-[16px] font-semibold leading-snug text-[#141416]">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-[#5C5852]">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
