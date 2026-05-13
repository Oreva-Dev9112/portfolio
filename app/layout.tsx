import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oreva | Full-stack, AI, and data',
  description:
    'Full-stack engineer working across AI, data, dashboards, automation, and product development.',
  openGraph: {
    title: 'Oreva',
    description: 'Full-stack, AI, and data.',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme set before hydration to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (t === 'dark' || (!t && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
