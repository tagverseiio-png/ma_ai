import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight, Play, ChevronDown, Linkedin,
  Mail, Phone, MapPin, Instagram, Twitter, Heart,
  Users, Target, Globe, ShieldCheck, PlayCircle,
  Film, Box, Megaphone, AudioLines,
  Activity, Sparkles, Cpu, ChevronLeft, ChevronRight
} from 'lucide-react';
import heroCity from '@/assets/hero-city.jpg';
import workNightDrive from '@/assets/work-night-drive.jpg';
import workZeroGravity from '@/assets/work-zero-gravity.jpg';
import workColors from '@/assets/work-colors.jpg';
import workBeyondEarth from '@/assets/work-beyond-earth.jpg';
import workTomorrow from '@/assets/work-tomorrow.jpg';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import teamMeena from '@/assets/team-meena.jpg';
import teamPrarthana from '@/assets/team-prarthana.jpg';
import storySphere from '@/assets/story-sphere.png';
import whyCube from '@/assets/why-cube.png';
import teamOrbit from '@/assets/team-orbit.jpg';
import teamOrbitWhite from '@/assets/team-orbit-white-theme.png';
import ctaLogo3d from '@/assets/cta-logo3d.png';
import showReelVideo from '@/assets/SHOW REEL HD .mp4';
import { SiteNav, SiteFooter, Logo, fontStyles, fadeInUp, staggerContainer } from '@/components/site/SiteChrome';
import { ServicesSection } from '@/components/site/ServicesSection';
import { useTheme } from '@/hooks/use-theme';



const HeroSection = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contentOpacity = useTransform(scrollY, [0, 150], [0, 1]);
  const contentY = useTransform(scrollY, [0, 150], [20, 0]);
  const titleY = useTransform(scrollY, [0, 150], [isMobile ? 70 : 160, 0]);
  const pointerEvents = useTransform(scrollY, (v) => (v > 50 ? 'auto' : 'none'));

  return (
    <section className="relative min-h-screen pt-32 pb-12 md:pt-48 md:pb-16 bg-[#111111] flex flex-col justify-end overflow-hidden">
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        suppressHydrationWarning
      >
        <source src={showReelVideo} type="video/mp4" suppressHydrationWarning />
      </video>
      
      {/* Subtle bottom gradient to make text readable without blocking video */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 w-full relative z-10">
        
        {/* Top Label */}
        <motion.div style={{ opacity: contentOpacity, y: titleY }} className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]"></div>
          <span className="text-white text-[12px] md:text-[13px] tracking-[0.1em] uppercase font-bold drop-shadow-md">
            01 / Welcome to ma.ai
          </span>
        </motion.div>
        
        {/* Huge Heading */}
        <motion.div style={{ y: titleY }} className="mb-8 md:mb-12">
          <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-white tracking-[-0.05em] leading-[0.9] max-w-[1200px] drop-shadow-lg">
            We build worlds<br />that move you.
          </h1>
        </motion.div>

        {/* Full width divider */}
        <motion.hr style={{ opacity: contentOpacity }} className="border-white/20 mb-6 md:mb-8" />

        {/* Bottom Split */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-10">
          <motion.p style={{ opacity: contentOpacity, pointerEvents, y: contentY }} className="text-white/90 text-[15px] md:text-[16px] max-w-[500px] leading-[1.4] font-medium drop-shadow-md">
            We partner with ambitious brands to create AI-powered solutions that drive impact, automate complexity, and shape the future.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link to="/work" className="group px-8 py-4 rounded-[40px] bg-[#CCFF00] text-[#111111] hover:bg-white hover:text-[#111111] transition-colors text-[13px] tracking-[0.08em] uppercase font-bold flex items-center justify-center gap-3 shadow-lg">
              Explore our work <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-[40px] border-[1.5px] border-white text-white hover:bg-white hover:text-[#111111] transition-colors text-[13px] tracking-[0.08em] uppercase font-bold flex items-center justify-center gap-3 shadow-lg backdrop-blur-sm">
              What we do
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section id="about" className="pt-16 pb-24 md:pt-24 md:pb-40 relative overflow-hidden border-t border-[var(--site-border)] transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)' }}>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        
        {/* Top label */}
        <div className="flex flex-col items-start mb-6 md:mb-8 relative z-10 text-left">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]"></div>
            <span className="text-[13px] tracking-[0.1em] uppercase font-bold" style={{ color: 'var(--site-fg)' }}>02 / The ma.ai story</span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-20">
            
            <motion.h2 variants={fadeInUp} className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-[-0.04em] leading-[1] mb-8 whitespace-nowrap" style={{ color: 'var(--site-fg)' }}>
              From <span className="text-[#7C3AED]">ma</span> <span className="font-normal text-[0.6em]" style={{ color: 'var(--site-muted)' }}>(間)</span> to <span className="text-[#7C3AED]">maa</span> <span className="font-normal text-[0.6em]" style={{ color: 'var(--site-muted)' }}>(माँ)</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 text-[11px] tracking-[0.25em] uppercase mb-16 font-bold" style={{ color: 'var(--site-fg)' }}>
              <span>Space</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></span>
              <span>Care</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></span>
              <span>Presence</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative pl-5 sm:pl-8 border-l-[3px] border-[#CCFF00] mb-16">
              <p className="text-[20px] sm:text-[26px] leading-[1.4] font-light" style={{ color: 'var(--site-fg)' }}>
                AI that gives <span className="font-bold">room.</span><br />
                <span className="font-bold">Present</span> when needed.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 font-bold text-[13px] tracking-[0.05em] uppercase transition-colors duration-300" style={{ color: 'var(--site-fg)' }}>
              <div className="w-4 h-4 rounded-full border-[3px] border-[#CCFF00] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full"></div>
              </div>
              Quietly working in the background
            </motion.div>
          </motion.div>

          {/* 3D Sphere - preserved */}
          <div className="relative h-[420px] sm:h-[560px] lg:h-[700px] flex items-center justify-center lg:justify-end lg:pr-10">

            {/* Floating UI Tags - preserved */}
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute top-[2%] left-0 z-30 scale-[0.8] origin-left sm:scale-100">
              <div className="flex items-center gap-2 text-[16px] font-bold transition-colors duration-300 drop-shadow-sm" style={{ color: 'var(--site-fg)' }}>
                <Activity size={24} className="text-[#CCFF00]" /> Understands context
              </div>
            </motion.div>

            <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="hidden sm:block absolute top-[5%] right-[5%] z-30">
              <div className="flex items-center gap-2 text-[16px] font-bold transition-colors duration-300 drop-shadow-sm" style={{ color: 'var(--site-fg)' }}>
                <Sparkles size={24} className="text-[#CCFF00]" /> Adapts intelligently
              </div>
            </motion.div>

            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }} className="absolute bottom-[4%] left-0 z-30 scale-[0.8] origin-left sm:scale-100 sm:left-[20%]">
              <div className="flex items-center gap-2 text-[16px] font-bold transition-colors duration-300 drop-shadow-sm" style={{ color: 'var(--site-fg)' }}>
                <Users size={24} className="text-[#CCFF00]" /> Works with you, not over you
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-14, 14, -14] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative w-[300px] sm:w-[420px] lg:w-[520px] max-w-full"
            >
              <div className="absolute inset-[12%] rounded-full bg-[#CCFF00]/20 blur-[90px]"></div>
              <img src={storySphere} alt="ma.ai intelligence sphere" loading="lazy" className="relative w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <Logo light={true} className="w-[60px] h-[42px] sm:w-[90px] sm:h-[62px] mb-1" />
                <span className="font-bold text-[22px] sm:text-[32px] tracking-tight" style={{ color: 'var(--site-fg)' }}>ma.ai</span>
              </div>
            </motion.div>

            {/* Right side floating characters - preserved */}
            <div className="hidden lg:flex absolute right-[-20px] top-[20%] flex flex-col gap-6 text-xl font-light items-center" style={{ color: 'var(--site-fg)' }}>
              <span>間</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></span>
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--site-muted)' }}></span>
              <div className="w-6 h-6 rounded-full bg-[#CCFF00]/20 flex items-center justify-center border border-[#CCFF00]">
                <div className="w-2 h-2 rounded-full bg-[#CCFF00]"></div>
              </div>
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--site-muted)' }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></span>
              <span>माँ</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const worksData = [
  // Showreel / Brand Films
  { id: 1, title: 'Night Drive', type: 'Showreel / Brand Films', duration: '00:52', image: workNightDrive },
  { id: 2, title: 'Colors of Imagination', type: 'Showreel / Brand Films', duration: '01:28', image: workColors, featured: true },
  { id: 3, title: 'Echoes of Time', type: 'Showreel / Brand Films', duration: '02:15', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // Client Case Studies
  { id: 4, title: 'Zero Gravity', type: 'Client Case Studies', duration: '00:45', image: workZeroGravity },
  { id: 5, title: 'Global Connect', type: 'Client Case Studies', duration: '01:10', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Future Retail', type: 'Client Case Studies', duration: '01:45', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // Micro Drama Series
  { id: 7, title: 'The Last Passenger', type: 'Micro Drama Series', duration: '03:20', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'Neon Shadows', type: 'Micro Drama Series', duration: '04:15', image: 'https://images.unsplash.com/photo-1604085572502-a39c44569eeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 9, title: 'Silent Words', type: 'Micro Drama Series', duration: '02:55', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // Social Media Vertical Content
  { id: 10, title: 'Summer Drop', type: 'Social Media Vertical Content', duration: '00:15', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 11, title: 'Tech Review #01', type: 'Social Media Vertical Content', duration: '00:30', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 12, title: 'Behind the Scenes', type: 'Social Media Vertical Content', duration: '00:45', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // YouTube Video
  { id: 13, title: 'The New Tomorrow', type: 'YouTube Video', duration: '00:58', image: workTomorrow },
  { id: 14, title: 'AI in 2026', type: 'YouTube Video', duration: '12:30', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 15, title: 'Designing for the Future', type: 'YouTube Video', duration: '08:45', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // VFX Content
  { id: 16, title: 'Beyond Earth', type: 'VFX Content', duration: '01:12', image: workBeyondEarth },
  { id: 17, title: 'City of Glass', type: 'VFX Content', duration: '00:40', image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 18, title: 'Liquid Metal', type: 'VFX Content', duration: '00:25', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const categories = [
  { name: 'ALL WORK', icon: <Film size={16} />, match: null as string | null },
  { name: 'SHOWREEL / BRAND FILMS', icon: <Film size={16} />, match: 'Showreel / Brand Films' },
  { name: 'CLIENT CASE STUDIES', icon: <Target size={16} />, match: 'Client Case Studies' },
  { name: 'MICRO DRAMA SERIES', icon: <PlayCircle size={16} />, match: 'Micro Drama Series' },
  { name: 'SOCIAL MEDIA VERTICAL', icon: <Activity size={16} />, match: 'Social Media Vertical Content' },
  { name: 'YOUTUBE VIDEO', icon: <Play size={16} />, match: 'YouTube Video' },
  { name: 'VFX CONTENT', icon: <Sparkles size={16} />, match: 'VFX Content' },
];

const WorksSection = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [active, setActive] = useState(2);

  const visibleWorks = category ? worksData.filter((w) => w.type === category) : worksData;
  const activeIndex = Math.min(active, visibleWorks.length - 1);

  const move = (dir: number) =>
    setActive((prev) => {
      const len = visibleWorks.length;
      const current = Math.min(prev, len - 1);
      return (current + dir + len) % len;
    });

  return (
    <section id="work" className="py-24 md:py-40 relative overflow-hidden border-t border-[var(--site-border)] transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)' }}>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14 md:mb-20">
          <div className="flex flex-col items-start text-left">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex items-center gap-3 mb-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]"></div>
              <span className="text-[13px] tracking-[0.1em] uppercase font-bold" style={{ color: 'var(--site-fg)' }}>03 / Works</span>
            </motion.div>
            
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-[52px] sm:text-[72px] md:text-[90px] lg:text-[100px] font-bold mb-8 tracking-[-0.05em] leading-[0.9] max-w-[1000px]" style={{ color: 'var(--site-fg)' }}>
              Where ideas<br/>come alive.
            </motion.h2>
          </div>
          
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-[16px] md:text-[18px] font-normal leading-[1.5] max-w-[350px] md:mt-20" style={{ color: 'var(--site-muted)' }}>
            Built for attention.<br />Designed for velocity.
          </motion.p>
        </div>

        <hr className="border-[var(--site-border)] mb-12" />

        {/* 3-column card grid - editorial style from reference image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {visibleWorks.slice(0, 3).map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-[20px] border border-[var(--site-border)] overflow-hidden group cursor-pointer transition-colors duration-300"
              style={{ backgroundColor: 'var(--site-card-bg)' }}
              onClick={() => setActive(i)}
            >
              {/* Neon green image area with asterisk */}
              <div className="relative h-[220px] md:h-[260px] overflow-hidden">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#111111] text-[#CCFF00] flex items-center justify-center">
                  <Play size={14} className="fill-current ml-0.5" />
                </div>
              </div>
              
              {/* Card body */}
              <div className="p-6">
                <span className="text-[11px] tracking-[0.15em] uppercase font-bold block mb-3" style={{ color: 'var(--site-fg)' }}>{work.type} / {work.duration}</span>
                <h3 className="text-[22px] md:text-[26px] font-bold tracking-[-0.03em] leading-[1.1] mb-3" style={{ color: 'var(--site-fg)' }}>{work.title}</h3>
                <p className="text-[14px] leading-[1.5] mb-6" style={{ color: 'var(--site-muted)' }}>A showcase of AI-crafted stories, films and experiences.</p>
                <Link to="/work" className="text-[12px] tracking-[0.1em] uppercase font-bold flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: 'var(--site-fg)' }}>
                  EXPLORE SYSTEM <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories Pill Grid */}
        <div className="flex flex-wrap justify-start gap-3 sm:gap-4 mb-12">
          {categories.map((cat) => {
            const selected = category === cat.match;
            return (
              <button
                type="button"
                key={cat.name}
                aria-pressed={selected}
                onClick={() => { setCategory(cat.match); setActive(0); }}
                className={`group h-[42px] px-[13px] rounded-full border ${selected ? 'border-[#CCFF00] bg-[#CCFF00] text-[#111111]' : 'border-[var(--site-border)] text-[var(--site-fg)]'} text-[11px] font-bold tracking-widest hover:bg-[#CCFF00] hover:border-[#CCFF00] hover:text-[#111111] transition-all duration-300 flex items-center uppercase overflow-hidden`}
                style={!selected ? { backgroundColor: 'var(--site-surface)' } : undefined}
              >
                <div className="shrink-0 flex items-center justify-center">{cat.icon}</div>
                <span className={`transition-all duration-300 whitespace-nowrap overflow-hidden inline-block flex items-center ${selected ? 'max-w-[200px] opacity-100 ml-2' : 'max-w-[200px] opacity-100 ml-2 md:max-w-0 md:opacity-0 md:ml-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:ml-2'}`}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* View All CTA */}
        <hr className="border-[var(--site-border)]" />
        <div className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[16px] font-normal max-w-[460px]" style={{ color: 'var(--site-muted)' }}>
            Over 120 films, campaigns and AI experiments delivered for brands across 14 markets.
          </p>
          <Link
            to="/work"
            className="group px-8 py-3.5 rounded-[40px] border-[1.5px] font-bold hover:bg-[#111111] hover:text-[#CCFF00] hover:border-[#111111] transition-all inline-flex items-center gap-3 tracking-[0.08em] text-[13px] uppercase"
            style={{ borderColor: 'var(--site-fg)', backgroundColor: 'var(--site-surface)', color: 'var(--site-fg)' }}
          >
            Explore our works
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

    </section>
  );
};

const WhySection = () => {
  const reasons = [
    {
      id: '01',
      icon: <Users size={48} className="drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }} />,
      title: 'Human-centred.',
      desc: 'Technology starts with people. Adoption is designed, not assumed.',
      baseColor: 'from-[#3B82F6] to-[#CCFF00]'
    },
    {
      id: '02',
      icon: <Target size={48} className="drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }} />,
      title: 'Outcome-first.',
      desc: 'We start with the end in mind and build what drives measurable impact.',
      baseColor: 'from-[#CCFF00] to-[#CCFF00]'
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
      baseColor: 'from-[#CCFF00] to-[#CCFF00]'
    }
  ];

  return (
    <section id="services" className="pt-6 pb-20 md:pt-8 md:pb-32 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">

        {/* Top Split Area */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 md:mb-24 gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]"></div>
              <span className="text-[13px] tracking-[0.1em] uppercase font-bold" style={{ color: 'var(--site-fg)' }}>04 / Why ma.ai</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-6">
              <h2 className="text-[48px] sm:text-[64px] md:text-[88px] font-bold tracking-[-0.06em] leading-[0.9]" style={{ color: 'var(--site-fg)' }}>Why</h2>
              <h2 className="text-[48px] sm:text-[64px] md:text-[88px] font-bold tracking-[-0.06em] leading-[0.9] pr-4" style={{ color: 'var(--site-fg)' }}>ma.ai?</h2>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-[18px] sm:text-[20px] font-normal leading-[1.5] max-w-[500px]" style={{ color: 'var(--site-muted)' }}>
              We combine human insight, creative intelligence and AI capability to drive real business impact.
            </motion.p>
          </motion.div>

          {/* Mockup matching 3D Glass Cube */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="hidden lg:flex relative w-[500px] h-[450px] justify-center items-center">

            <div className="absolute inset-0 flex items-center justify-center opacity-50">
              <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent shadow-[0_0_10px_#CCFF00]"></div>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent absolute rotate-[15deg]"></div>
              <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent absolute -rotate-[15deg]"></div>
            </div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="relative z-10 w-[420px]"
            >
              <div className="absolute inset-[15%] bg-[#6D28D9]/40 blur-[80px] rounded-full"></div>
              <img src={whyCube} alt="ma.ai intelligence core" loading="lazy" className="relative w-full h-auto" />
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-[6%] pointer-events-none">
                <Logo light={false} className="w-[90px] h-[62px] mb-1 drop-shadow-[0_0_18px_rgba(255,255,255,0.6)]" />
                <span className="font-bold text-[28px] tracking-tight drop-shadow-md" style={{ color: 'var(--site-fg)' }}>ma.ai</span>
              </div>
            </motion.div>

            {/* Floating UI Elements from Mockup */}
            <div className="absolute top-[10%] left-[5%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }}><Cpu size={24} /></div>
            <div className="absolute top-[15%] right-[5%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }}><Sparkles size={24} /></div>
            <div className="absolute bottom-[20%] left-[10%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }}><Users size={24} /></div>
            <div className="absolute bottom-[25%] right-[10%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={{ color: 'var(--site-fg)' }}><ShieldCheck size={24} /></div>
          </motion.div>
        </div>

        {/* Feature Cards Grid exactly styling 3D bases */}
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

              {/* Clean Modern Icon Presentation */}
              <div className="mb-10 relative flex justify-start items-center">
                {/* Soft ambient glow behind the icon */}
                <div className={`absolute top-1/2 left-6 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r ${reason.baseColor} opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-[20px] rounded-full`}></div>
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                  {reason.icon}
                </div>
              </div>

              <h3 className="text-[22px] font-bold mb-6 relative tracking-[-0.02em]" style={{ color: 'var(--site-fg)' }}>
                {reason.title}
                {/* Thin colored underline matching mockup */}
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

const TeamSection = () => {
  const { theme } = useTheme();
  
  const team = [
    {
      name: 'Meena Chabbria',
      role: 'Founder & Chief Everything Officer',
      bio: 'The one who started it all — quite literally. Meena is sales, strategy and spotlight energy rolled into one person, and somehow makes multitasking look like a superpower. If ma.ai has a face and a heartbeat, it\'s her.',
      ig: 'mee.a_chhabbria',
      image: teamMeena
    },
    {
      name: 'Prarthana Chabbria',
      role: 'Co-Founder & Head of Operations (Certified Diva Boss)',
      bio: 'Runs the entire operation on caffeine, precision and zero patience for anything less than excellent.',
      ig: 'Prarthana_chabbria',
      image: teamPrarthana
    },
    {
      name: 'Vinay Sakhrani',
      role: 'Co-Founder & Creative Director',
      bio: 'The creative brain behind everything you see. Big believer in work-life balance — until a deadline says otherwise, and then it\'s an all-nighter, no questions asked. Chill by default, unstoppable on demand.',
      ig: 'Vinay_sakhrani',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Placeholder for Vinay
    },
    {
      name: 'Souvik Seal',
      role: 'Co-Founder & CEO',
      bio: 'The brain of the operation, in the most literal sense. Souvik lives life on Sop\'s and runs on spreadsheets, and cold hard data — a walking encyclopedia who somehow makes numbers sound like a personality trait.',
      ig: 'souvik_seal', // Placeholder as it was missing from prompt
      image: team1
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden border-t border-[var(--site-border)] transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)' }}>

      <div className="absolute right-[-45%] sm:right-[-10%] top-[2%] sm:top-[-8%] w-[1100px] max-w-[160%] sm:max-w-[85%] pointer-events-none select-none z-0">
        <img src={theme === 'dark' ? teamOrbit : teamOrbitWhite} alt="" aria-hidden="true" loading="lazy" className="w-full h-auto opacity-40 sm:opacity-80" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--site-bg) 0%, transparent 40%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--site-bg) 0%, transparent 40%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--site-bg) 0%, transparent 15%)' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14 md:mb-20">
          <span className="text-[13px] tracking-[0.1em] uppercase font-semibold block mb-10" style={{ color: 'var(--site-fg)' }}>05 / The team</span>
          <h2 className="text-[48px] sm:text-[64px] md:text-[80px] font-bold tracking-[-0.06em] leading-[0.9]" style={{ color: 'var(--site-fg)' }}>The minds</h2>
          <h2 className="text-[48px] sm:text-[64px] md:text-[80px] font-bold mb-8 tracking-[-0.06em] leading-[0.9]" style={{ color: 'var(--site-fg)' }}>behind ma.ai</h2>
          <div className="h-[2px] w-20 bg-[#CCFF00]/40 mb-6"></div>
          <p className="text-[18px] max-w-[450px] font-normal leading-[1.5]" style={{ color: 'var(--site-muted)' }}>
            A team of strategists, creators and engineers building AI with purpose.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="bg-[#0B0B13] rounded-[24px] overflow-hidden group relative border border-white/5 shadow-2xl"
            >
              {/* Specialized mockup border - subtle glowing purple bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[50%] rounded-b-[24px] border-b-[2px] border-x-[2px] border-transparent bg-gradient-to-t from-[#7C3AED]/30 to-transparent p-[1px] z-30 pointer-events-none" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'destination-out' }}></div>
              <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

              <div className="h-[320px] sm:h-[380px] overflow-hidden relative bg-[#0B0B13]">
                {/* Image deeply integrated with background */}
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-[20%] group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B13] via-[#0B0B13]/70 to-transparent z-10"></div>
              </div>

              <div className="p-6 sm:p-8 relative z-20 -mt-24">
                <h3 className="text-[24px] font-bold text-white mb-2 tracking-[-0.02em]">{member.name}</h3>
                <p className="text-[#7C3AED] text-[12px] font-bold mb-8 tracking-[0.05em]">{member.role}</p>

                <div className="space-y-1 mb-8">
                  <p className="text-gray-400 text-[13px] font-light leading-[1.6] line-clamp-4">{member.bio}</p>
                </div>

                {/* Specific Instagram Icon Design */}
                <a href={`https://instagram.com/${member.ig}`} target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#7C3AED]/20 hover:border-[#7C3AED] transition-all cursor-pointer backdrop-blur-sm z-30">
                  <Instagram size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exact Bottom Banner styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[var(--site-border)] rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden transition-colors duration-300"
          style={{ color: 'var(--site-fg)' }}
        >
          {/* subtle left glow */}
          <div className="absolute left-0 top-0 w-[30%] h-full bg-gradient-to-r from-[#CCFF00]/5 to-transparent pointer-events-none"></div>

          <div className="flex items-center gap-4 sm:gap-8 mb-6 md:mb-0 relative z-10">
            {/* The circular icon with dashed rings */}
            <div className="w-[72px] h-[72px] flex items-center justify-center relative">
              <div className="absolute inset-0 border border-[var(--site-border)] rounded-full border-dashed"></div>
              <div className="absolute inset-2 border border-[var(--site-border)] rounded-full"></div>
              <div className="absolute inset-3 border border-[#CCFF00]/20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--site-bg)' }}>
                <Users size={24} style={{ color: 'var(--site-fg)' }} />
              </div>
            </div>

            <div className="border-l border-[var(--site-border)] pl-4 sm:pl-8">
              <h4 className="text-[19px] sm:text-[24px] font-bold leading-tight tracking-[-0.02em]" style={{ color: 'var(--site-fg)' }}>Different minds.</h4>
              <h4 className="text-[19px] sm:text-[24px] font-bold leading-tight tracking-[-0.02em]" style={{ color: 'var(--site-fg)' }}>One shared purpose.</h4>
            </div>
          </div>

          <Link to="/members" className="hover:opacity-70 transition-colors flex items-center gap-4 border-b pb-2 text-[13px] tracking-[0.08em] uppercase font-semibold relative z-10 group" style={{ color: 'var(--site-fg)', borderColor: 'var(--site-muted)' }}>
            View more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" style={{ color: 'var(--site-muted)' }} />
          </Link>

        </motion.div>
      </div>
    </section>
  );
};


export default function MaLanding() {
  return (
    <>
      <style>{fontStyles}</style>
      <div className="min-h-screen scroll-smooth transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)', color: 'var(--site-fg)', WebkitTextFillColor: 'inherit' }}>
        <SiteNav />
        <main>
          <HeroSection />
          <StorySection />
          <WorksSection />
          <WhySection />
          <TeamSection />
          <ServicesSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}