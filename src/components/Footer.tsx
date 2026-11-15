import { NAV_LINKS, PROFILE } from '../data/resume';
import { MonogramLogo } from './MonogramLogo';

export function Footer() {
  return (
    <footer className="bg-[#0E0E10] text-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-[#27272B] pb-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <MonogramLogo variant="dark" showWordmark />
            <p className="text-[13px] text-[#A8A29A]">
              {PROFILE.title} · {PROFILE.location}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#A8A29A]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-150 hover:text-[#FAF8F5] whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-[12px] text-[#8A847D] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {PROFILE.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="transition-colors hover:text-[#C8A96A]"
            >
              {PROFILE.email}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#C8A96A]"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PROFILE.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#C8A96A]"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
