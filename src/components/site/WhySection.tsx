import { motion } from 'framer-motion';
import { Users, Target, Globe, ShieldCheck, Sparkles, Cpu } from 'lucide-react';
import { SectionEyebrow, fadeInUp, staggerContainer } from '@/components/site/SiteChrome';
import footerLogoImg from '@/assets/Ma_footer_logo_200x160.png';

interface Props {
  standalone?: boolean;
}

export const WhySection = ({ standalone }: Props) => {


  return (
    <section
      id="why"
      className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-300 ${standalone ? '' : 'border-t border-[var(--site-border)]'}`}
      style={{ backgroundColor: 'var(--site-bg)' }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 md:mb-16 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-xl">
            <SectionEyebrow>04 / Why ma.ai</SectionEyebrow>

            <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-6">
              <h2 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.9]" style={{ color: 'var(--site-fg)' }}>Why</h2>
              <h2 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.9] pr-4" style={{ color: 'var(--site-fg)' }}>ma.ai?</h2>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-[18px] sm:text-[20px] font-normal leading-[1.5] max-w-[500px]" style={{ color: 'var(--site-muted)' }}>
              We combine human insight, creative intelligence and AI capability to drive real business impact.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="hidden lg:flex relative w-[500px] h-[450px] justify-center items-center">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="relative z-10 w-[420px]"
            >
              <div className="absolute inset-[15%] bg-[#6D28D9]/40 blur-[80px] rounded-full"></div>
              <img src={footerLogoImg} alt="ma.ai intelligence core" loading="lazy" className="relative w-[160px] md:w-[200px] h-auto mx-auto drop-shadow-2xl" />
            </motion.div>
            <div className="absolute top-[10%] left-[5%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }}><Cpu size={24} /></div>
            <div className="absolute top-[15%] right-[5%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }}><Sparkles size={24} /></div>
            <div className="absolute bottom-[20%] left-[10%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }}><Users size={24} /></div>
            <div className="absolute bottom-[25%] right-[10%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }}><ShieldCheck size={24} /></div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};
