import { motion } from 'framer-motion';
import { Users, Target, Globe, ShieldCheck, Sparkles, Cpu } from 'lucide-react';
import { SectionEyebrow, fadeInUp, staggerContainer } from '@/components/site/SiteChrome';
import footerLogoImg from '@/assets/Ma_footer_logo_200x160.png';

interface Props {
  standalone?: boolean;
}

export const WhySection = ({ standalone }: Props) => {
  const reasons = [
    {
      id: '01',
      icon: <Users size={48} className="drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }} />,
      title: 'Human-centred.',
      desc: 'Technology starts with people. Adoption is designed, not assumed.',
      baseColor: 'from-[#3B82F6] to-[#8B5CF6]'
    },
    {
      id: '02',
      icon: <Target size={48} className="drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }} />,
      title: 'Outcome-first.',
      desc: 'We start with the end in mind and build what drives measurable impact.',
      baseColor: 'from-[#8B5CF6] to-[#8B5CF6]'
    },
    {
      id: '03',
      icon: <Globe size={48} className="drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }} />,
      title: 'Globally fluent.',
      desc: '40+ languages. Cross-cultural teams. One global standard.',
      baseColor: 'from-[#0EA5E9] to-[#3B82F6]'
    },
    {
      id: '04',
      icon: <ShieldCheck size={48} className="drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }} />,
      title: 'Responsibly delivered.',
      desc: 'Ethical by design. Secure by default. Governance built in.',
      baseColor: 'from-[#8B5CF6] to-[#8B5CF6]'
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-[var(--site-border)] rounded-[24px] p-6 sm:p-8 transition-all duration-300 relative overflow-hidden flex flex-col items-start group hover:border-[var(--site-fg)] hover:shadow-xl"
              style={{ backgroundColor: 'var(--site-bg)' }}
            >
              <div className="font-medium text-[15px] mb-8" style={{ color: 'var(--site-fg)' }}>{reason.id}</div>
              <div className="mb-10 relative flex justify-start items-center">
                <div className={`absolute top-1/2 left-6 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r ${reason.baseColor} opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-[20px] rounded-full`}></div>
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-[22px] font-bold mb-6 relative tracking-[-0.02em]" style={{ color: 'var(--site-fg)' }}>
                {reason.title}
                <div className={`absolute -bottom-3 left-0 w-8 h-[2px] bg-gradient-to-r ${reason.baseColor}`}></div>
              </h3>
              <p className="text-[15px] leading-[1.5] mt-4 font-normal" style={{ color: 'var(--site-muted)' }}>
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
