import { motion } from 'framer-motion';
import { SectionEyebrow, fadeInUp, staggerContainer } from '@/components/site/SiteChrome';
import storySphere from '@/assets/story-sphere.png';
import footerLogoImg from '@/assets/Ma_footer_logo_200x160.png';

interface Props {
  /** When true (standalone page), removes the top border-t divider */
  standalone?: boolean;
}

export const StorySection = ({ standalone }: Props) => (
  <section
    id="about"
    className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-300 ${standalone ? '' : 'border-t border-[var(--site-border)]'}`}
    style={{ backgroundColor: 'var(--site-bg)' }}
  >
    <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-20">
          <div className="flex flex-col items-start mb-6 md:mb-8 relative z-10 text-left">
            <SectionEyebrow>02 / About Us</SectionEyebrow>
          </div>

          <motion.h2 variants={fadeInUp} className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-[1.1] mb-8" style={{ color: 'var(--site-fg)' }}>
            Anyone can use AI.<br />We make it <span className="text-[#7C3AED]">Exceptional.</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-[16px] sm:text-[18px] leading-[1.7] font-normal mb-8 max-w-[520px]" style={{ color: 'var(--site-muted)' }}>
            At MA AI Creative, we blend AI with creativity, storytelling, strategy, and precision to create original content that stands out.
          </motion.p>

          <motion.div variants={fadeInUp} className="relative pl-5 sm:pl-8 border-l-[3px] border-[#7C3AED] mb-10">
            <p className="text-[20px] sm:text-[24px] leading-[1.4] font-semibold" style={{ color: 'var(--site-fg)' }}>
              Fast. Fresh. Built to make an impact.
            </p>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-[15px] sm:text-[16px] leading-[1.6] font-normal max-w-[480px] mb-8" style={{ color: 'var(--site-muted)' }}>
            That's what makes MA AI Creative one of India's <span className="font-bold" style={{ color: 'var(--site-fg)' }}>fastest growing AI creative studios.</span>
          </motion.p>
        </motion.div>

        {/* 3D Sphere */}
        <div className="relative h-[420px] sm:h-[560px] lg:h-[700px] flex items-center justify-center lg:justify-end lg:pr-10">
          <motion.div
            animate={{ y: [-14, 14, -14] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="relative w-[300px] sm:w-[420px] lg:w-[520px] max-w-full"
          >
            <div className="absolute inset-[12%] rounded-full bg-[#7C3AED]/20 blur-[90px]"></div>
            <img src={storySphere} alt="ma.ai intelligence sphere" loading="lazy" className="relative w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <img src={footerLogoImg} alt="MA Logo" className="w-[100px] sm:w-[140px] h-auto drop-shadow-2xl" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
