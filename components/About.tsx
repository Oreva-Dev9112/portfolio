'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

type Row = {
  range: string;
  title: string;
  body: string;
  current?: boolean;
};

const rows: Row[] = [
  {
    range: '2025-present',
    title: 'Data Developer Intern · City, University of London',
    body: 'Data reporting and analytics work across SQL, Python, Tableau, and Power BI. Building dashboards that make operational data easier to read and act on.',
    current: true,
  },
  {
    range: '2025-present',
    title: 'AI Contributor',
    body: 'Code evaluation and model review work for AI systems, with a focus on clear rubrics and reliable technical judgement.',
  },
  {
    range: '2024-2025',
    title: 'Frontend & Web Apps · BlueBow Group (London, contract)',
    body: 'Inventory and sales dashboards in Next.js and TypeScript. Improved load times and made reporting easier for the team using it every day.',
  },
  {
    range: '2024-2025',
    title: 'BSc Information Technology & BIS · Middlesex University',
    body: 'First-Class Honours (1:1).',
  },
  {
    range: '2022-2024',
    title: 'Full-Stack Developer · Micro Impact Resources',
    body: 'Client platforms across React, Node.js, PHP, and MySQL. A mix of websites, internal tools, and admin systems that replaced a lot of manual work.',
  },
  {
    range: '2019-present',
    title: 'Freelance · Upwork & direct clients',
    body: 'Custom CMS builds, automation scripts, AI integrations, and small product experiments for clients and personal projects.',
  },
  {
    range: '2018-present',
    title: 'Junior Full-Stack & Software Dev · NIIT Warri',
    body: 'E-learning portals, healthcare sites, Java desktop apps. Mentored students through the same curriculum I came through.',
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export function About() {
  return (
    <section className="relative px-6 lg:px-10 py-24 md:py-32">
      <div className="max-w-wide mx-auto">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          <div>
            <SectionHeader id="about" label="path so far" />
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="text-display-md font-medium tracking-tight mt-6 mb-6"
            >
              A practical mix of <span className="font-display italic font-normal">software</span>,{' '}
              <span className="font-display italic font-normal">data</span>, and product work.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="text-[16px] leading-[1.65] text-muted mb-6 max-w-[420px]"
            >
              I started by building client projects, then kept moving toward work where
              software, data, and product decisions overlap. These days that means React
              and Node.js apps, Python and SQL data work, dashboards in Tableau and Power
              BI, AI systems, automation, and the small details that make products usable.
            </motion.p>
          </div>

          <div className="space-y-1">
            {rows.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: easeOut }}
                className="group grid grid-cols-[100px_1fr] gap-5 py-5 border-b border-line last:border-b-0 hover:bg-bg-elev/50 px-2 -mx-2 rounded-md transition-colors duration-300"
              >
                <div className="font-mono text-[12px] text-subtle pt-1 flex items-start gap-2">
                  {r.current && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 soft-pulse" />
                  )}
                  <span>{r.range}</span>
                </div>
                <div>
                  <h3 className="text-[16px] font-medium leading-[1.4] mb-1.5 group-hover:text-accent transition-colors duration-300">
                    {r.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-muted">{r.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
