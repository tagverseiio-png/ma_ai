import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SiteNav, SiteFooter, fontStyles, fadeInUp } from '@/components/site/SiteChrome';

interface PageShellProps {
  index: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  children: ReactNode;
}

export const PageShell = ({ index, eyebrow, title, accent, intro, children }: PageShellProps) => {
  return (
    <>
      <style>{fontStyles}</style>
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)', color: 'var(--site-fg)' }}>
        <SiteNav />
        <main>
          <section className="relative pt-48 pb-24 overflow-hidden">
            <div className="absolute top-[-30%] right-[-10%] w-[700px] h-[700px] bg-[#CCFF00]/20 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-40%] left-[-15%] w-[600px] h-[600px] bg-[#CCFF00]/10 blur-[160px] rounded-full pointer-events-none" />
            <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-medium text-sm tracking-widest" style={{ color: 'var(--site-fg)' }}>{index}</span>
                  <div className="h-[1px] w-16 bg-[#CCFF00]/50" />
                  <span className="text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: 'var(--site-muted)' }}>{eyebrow}</span>
                </div>
                <h1 className="text-[34px] sm:text-[52px] md:text-[84px] font-bold leading-[1.03] tracking-[-0.02em] max-w-[900px]">
                  {title}{' '}
                  <span style={{ color: 'var(--site-fg)' }}>{accent}</span>
                </h1>
                <p className="text-[18px] md:text-[20px] font-light leading-[1.6] max-w-[620px] mt-8" style={{ color: 'var(--site-muted)' }}>{intro}</p>
              </motion.div>
            </div>
          </section>
          {children}
        </main>
        <SiteFooter />
      </div>
    </>
  );
};

export const Section = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <section className={`py-20 border-t border-[var(--site-border)] ${className}`}>
    <div className="max-w-[1400px] mx-auto px-5 md:px-12">{children}</div>
  </section>
);
