import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/resume';
import { MonogramLogo } from './MonogramLogo';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id);
            }
          });
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const primaryLinks = NAV_LINKS.slice(0, 7);
  const contactLink = NAV_LINKS[7];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0E0E10]/95 backdrop-blur-md border-b border-[#27272B]'
          : 'bg-[#0E0E10]/88 backdrop-blur-sm border-b border-[#27272B]/60'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
        <a
          href="#home"
          aria-label="Dur E Pakeeza Home"
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:rounded-sm"
        >
          <MonogramLogo variant="dark" showWordmark />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-[13px] font-medium tracking-[0.02em]"
        >
          {primaryLinks.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-[#FAF8F5]'
                    : 'text-[#A8A29A] hover:text-[#FAF8F5]'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-px bg-[#C8A96A] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={contactLink.href}
            className="hidden lg:inline-flex items-center justify-center rounded-sm border border-[#C8A96A]/65 bg-[#C8A96A]/10 px-4 py-2 text-[13px] font-medium text-[#FAF8F5] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#C8A96A] hover:text-[#0E0E10]"
          >
            {contactLink.label}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-sm border border-[#27272B] text-[#FAF8F5] transition-colors duration-150 hover:border-[#C8A96A]/60"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b border-[#27272B] bg-[#131316]"
          >
            <nav aria-label="Mobile navigation" className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-[44px] items-center justify-between border-b border-[#27272B]/50 last:border-b-0 text-[15px] font-medium transition-colors duration-150 ${
                      isActive ? 'text-[#C8A96A]' : 'text-[#FAF8F5] hover:text-[#C8A96A]'
                    }`}
                  >
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
