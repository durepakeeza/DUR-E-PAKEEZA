import { ABOUT_CONTENT } from '../data/resume';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section
      id="about"
      className="bg-[#F7F4EE] text-[#141416] border-b border-[#E2DBD0]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5 space-y-4">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-[#9B7B3E] uppercase">
              About Me
            </p>
            <h2 className="font-display text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.12] text-[#141416]">
              {ABOUT_CONTENT.heading}
            </h2>
            <p className="pt-2 text-[14px] leading-relaxed text-[#5C5852]">
              3 years of experience crafting responsive websites across frontend engineering and WordPress customization.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7 space-y-6">
            <div className="space-y-5 text-[15px] sm:text-[16px] leading-[1.75] text-[#2B2926]">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="border-t border-[#E2DBD0] pt-6">
              <p className="mb-4 text-[13px] font-semibold tracking-[0.1em] text-[#5C5852] uppercase">
                Core Areas of Practice
              </p>
              <div className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {ABOUT_CONTENT.coreFocusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 border-b border-[#E2DBD0]/70 pb-2.5 text-[14px] font-medium text-[#141416]"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-4 shrink-0 bg-[#9B7B3E]"
                    />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-14 grid grid-cols-1 gap-6 border-t border-[#E2DBD0] pt-10 sm:grid-cols-3">
            <div>
              <p className="font-display text-[32px] font-medium leading-none text-[#141416] tabular-nums">
                03 Years
              </p>
              <p className="mt-2 text-[13px] text-[#5C5852]">
                Frontend &amp; WordPress Development Experience
              </p>
            </div>
            <div className="sm:border-l sm:border-[#E2DBD0] sm:pl-6">
              <p className="font-display text-[32px] font-medium leading-none text-[#141416]">
                Elementor Pro
              </p>
              <p className="mt-2 text-[13px] text-[#5C5852]">
                Custom Layouts, Landing Pages &amp; WooCommerce
              </p>
            </div>
            <div className="sm:border-l sm:border-[#E2DBD0] sm:pl-6">
              <p className="font-display text-[32px] font-medium leading-none text-[#141416]">
                HTML5 · CSS3 · JS
              </p>
              <p className="mt-2 text-[13px] text-[#5C5852]">
                Responsive Multi-Device &amp; Cross-Browser Craft
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
