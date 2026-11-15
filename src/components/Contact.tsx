import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/resume';
import { Reveal } from './Reveal';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const handleComposeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resolvedSubject = subject.trim() || 'Project Inquiry';
    const bodyLines = [
      senderName.trim() ? `From: ${senderName.trim()}` : '',
      '',
      message.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      resolvedSubject
    )}&body=${encodeURIComponent(bodyLines)}`;
    window.location.href = mailtoHref;
  };

  return (
    <section
      id="contact"
      className="bg-[#F7F4EE] text-[#141416] border-b border-[#E2DBD0]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <p className="text-[13px] font-semibold tracking-[0.14em] text-[#9B7B3E] uppercase">
                Contact
              </p>
              <h2 className="font-display text-[clamp(2.25rem,3.6vw,3.1rem)] font-medium leading-[1.08] text-[#141416]">
                Let&rsquo;s Work Together
              </h2>
              <p className="max-w-md text-[15px] leading-[1.7] text-[#5C5852]">
                Available for Frontend Development, WordPress, and Elementor Pro projects, remote collaborations, and full-time roles.
              </p>
            </div>

            <div className="divide-y divide-[#E2DBD0] border-t border-b border-[#E2DBD0]">
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="space-y-0.5">
                  <p className="text-[12px] font-semibold tracking-[0.08em] text-[#5C5852] uppercase">
                    Location
                  </p>
                  <p className="inline-flex items-center gap-2 text-[15px] font-medium text-[#141416]">
                    <MapPin className="h-4 w-4 text-[#9B7B3E]" aria-hidden="true" />
                    <span>{PROFILE.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 py-4">
                <div className="space-y-0.5 min-w-0">
                  <p className="text-[12px] font-semibold tracking-[0.08em] text-[#5C5852] uppercase">
                    Email
                  </p>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="block truncate text-[15px] font-medium text-[#141416] transition-colors hover:text-[#9B7B3E]"
                  >
                    {PROFILE.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-sm border border-[#D4CCC0] bg-[#FAF8F5] px-3.5 py-2 text-[12px] font-medium text-[#141416] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#9B7B3E] hover:text-[#9B7B3E]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#9B7B3E]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#141416] px-5 py-2.5 text-[13px] font-semibold text-[#FAF8F5] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#9B7B3E]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Email</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-sm border border-[#D4CCC0] bg-[#FAF8F5] px-5 py-2.5 text-[13px] font-medium text-[#141416] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#9B7B3E] hover:text-[#9B7B3E]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-sm border border-[#D4CCC0] bg-[#FAF8F5] px-5 py-2.5 text-[13px] font-medium text-[#141416] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#9B7B3E] hover:text-[#9B7B3E]"
              >
                <span>Behance</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6">
            <form
              onSubmit={handleComposeSubmit}
              className="rounded-sm border border-[#E2DBD0] bg-[#FAF8F5] p-6 sm:p-8 space-y-5"
            >
              <div className="border-b border-[#E2DBD0] pb-4">
                <h3 className="font-display text-[24px] font-medium text-[#141416]">
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-[13px] text-[#5C5852]">
                  Prepares an email directly to {PROFILE.email} in your mail client.
                </p>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-[12px] font-semibold tracking-[0.06em] text-[#5C5852] uppercase"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={senderName}
                  onChange={(event) => setSenderName(event.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-sm border border-[#D4CCC0] bg-white px-4 py-3 text-[14px] text-[#141416] placeholder:text-[#8E887E] transition-colors focus:border-[#9B7B3E] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="block text-[12px] font-semibold tracking-[0.06em] text-[#5C5852] uppercase"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="WordPress Website / Frontend Role"
                  className="w-full rounded-sm border border-[#D4CCC0] bg-white px-4 py-3 text-[14px] text-[#141416] placeholder:text-[#8E887E] transition-colors focus:border-[#9B7B3E] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-[12px] font-semibold tracking-[0.06em] text-[#5C5852] uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Share details about your website project or opportunity..."
                  className="w-full resize-y rounded-sm border border-[#D4CCC0] bg-white px-4 py-3 text-[14px] text-[#141416] placeholder:text-[#8E887E] transition-colors focus:border-[#9B7B3E] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-sm bg-[#141416] px-6 py-3 text-[14px] font-semibold text-[#FAF8F5] transition-colors duration-150 hover:bg-[#9B7B3E]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Open in Email Client</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
