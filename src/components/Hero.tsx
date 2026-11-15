import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/resume';

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative bg-[#0E0E10] text-[#FAF8F5] border-b border-[#27272B]"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 lg:items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-[13px] font-medium tracking-[0.14em] text-[#C8A96A] uppercase"
              >
                {PROFILE.title}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(2.75rem,5.5vw,4.5rem)] font-medium leading-[1.03] tracking-[0.02em] text-[#FAF8F5]"
              >
                {PROFILE.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl text-[16px] sm:text-[17px] leading-[1.7] text-[#C8C3BA] tracking-[0.01em]"
              >
                {PROFILE.heroSummary}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a
                  href="#projects"
                  className="inline-flex min-h-[44px] items-center gap-2.5 rounded-sm bg-[#C8A96A] px-6 py-3 text-[14px] font-semibold text-[#0E0E10] whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#D7BA80]"
                >
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center gap-2.5 rounded-sm border border-[#3A3A40] bg-[#161619] px-6 py-3 text-[14px] font-medium text-[#FAF8F5] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#C8A96A]/70 hover:text-[#C8A96A]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Contact Me</span>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#27272B] pt-6 text-[13px] text-[#A8A29A]"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#C8A96A]" aria-hidden="true" />
                <span>{PROFILE.location}</span>
              </span>
              <span aria-hidden="true" className="text-[#45454C]">
                ·
              </span>
              <span>3 Years Experience</span>
              <span aria-hidden="true" className="text-[#45454C]">
                ·
              </span>
              <span>WordPress &amp; Frontend</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[340px] sm:min-h-[420px] overflow-hidden rounded-sm border border-[#27272B] bg-[#161619]">
              {!imageFailed ? (
                <img
                  src="/images/hero-studio.webp"
                  alt="Minimalist editorial architectural studio workspace"
                  referrerPolicy="no-referrer"
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full min-h-[340px] flex-col items-center justify-center bg-[#161619] p-8 text-center">
                  <span className="font-display text-4xl text-[#C8A96A]">DP</span>
                  <span className="mt-2 text-xs tracking-widest text-[#A8A29A]">
                    DUR E PAKEEZA
                  </span>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0E10]/55 via-transparent to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
