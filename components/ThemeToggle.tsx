'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch (_) {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="text-[12px] font-mono text-muted hover:text-fg transition-colors duration-300"
    >
      {theme === 'dark' ? '☼' : '☾'}
    </button>
  );
}
