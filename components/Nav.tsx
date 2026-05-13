'use client';

import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '#top', label: 'home', id: 'top' },
  { href: '#work', label: 'work', id: 'work' },
  { href: '#about', label: 'about', id: 'about' },
  { href: '#contact', label: 'contact', id: 'contact' },
];

export function Nav() {
  const [active, setActive] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    window.addEventListener('hashchange', close);
    return () => {
      window.removeEventListener('resize', close);
      window.removeEventListener('hashchange', close);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[color:var(--bg)]/72 border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-wide mx-auto px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between text-[13px]">
        <a href="#top" className="font-mono flex items-center gap-2 group">
          <span className="text-accent">$</span>
          <span className="font-medium">oreva<span className="text-muted">.dev</span></span>
        </a>
        <div className="flex items-center gap-6 font-mono text-muted">
          <div className="hidden sm:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative transition-colors duration-300 hover:text-fg ${
                  active === l.id ? 'text-fg' : ''
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent" />
                )}
              </a>
            ))}
          </div>
          <a
            href="mailto:orevadavidumolo@gmail.com"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-fg text-bg text-[12px] font-medium hover:opacity-90 transition-opacity duration-300"
          >
            <span>let&apos;s talk</span>
            <span>→</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden relative w-8 h-8 rounded-full border border-line-strong bg-bg-elev/70 text-fg transition-colors duration-200 hover:border-accent"
          >
            <span
              className={`absolute left-2 right-2 top-[11px] h-px bg-current transition-transform duration-200 ${
                open ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-2 right-2 top-[17px] h-px bg-current transition-transform duration-200 ${
                open ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>
      <div
        className={`sm:hidden overflow-hidden border-line transition-[max-height,opacity] duration-200 ${
          open ? 'max-h-44 opacity-100 border-t' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-6 mb-3 rounded-xl border border-line-strong bg-bg/95 shadow-xl backdrop-blur-md p-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-lg px-3 py-2 font-mono text-[12px] transition-colors duration-200 ${
                active === l.id ? 'text-fg bg-bg-elev' : 'text-muted hover:text-fg hover:bg-bg-elev/60'
              }`}
            >
              <span className="capitalize tracking-[0.02em]">{l.label}</span>
              {active === l.id && <span className="h-1 w-1 rounded-full bg-accent" />}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
