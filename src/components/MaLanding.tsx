import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
import storySphere from '@/assets/story-sphere.png';
import whyCube from '@/assets/why-cube.png';
import teamOrbit from '@/assets/team-orbit.jpg';
import ctaLogo3d from '@/assets/cta-logo3d.png';
import { SiteNav, SiteFooter, Logo, fontStyles, fadeInUp, staggerContainer } from '@/components/site/SiteChrome';



const HeroSection = () => {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 20, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 20, mass: 0.6 });

  const imageX = useTransform(smoothX, [-0.5, 0.5], [28, -28]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [18, -18]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-90, 90]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-60, 60]);
  const ringX = useTransform(smoothX, [-0.5, 0.5], [-70, 70]);
  const ringY = useTransform(smoothY, [-0.5, 0.5], [-45, 45]);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#030308]"
    >
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center"
      >
        <div className="w-[620px] h-[620px] rounded-full bg-[#8B5CF6]/15 blur-[130px]" />
      </motion.div>
      {/* Background Image - Cityscape */}
      <motion.div style={{ x: imageX, y: imageY, scale: 1.06 }} className="absolute inset-0 z-0 opacity-90">
        <img 
          src={heroCity} 
          alt="Futuristic Cityscape" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030308] via-[#030308]/70 to-[#030308]/30 w-full md:w-[75%]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030308]/80 via-transparent to-[#030308]"></div>
      </motion.div>


      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10 w-full">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-[800px]">
          
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <span className="text-[#8B5CF6] font-medium text-sm tracking-widest">01</span>
            <div className="h-[1px] w-16 bg-[#8B5CF6]/50"></div>
            <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-semibold">Welcome to ma.ai</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-[36px] sm:text-[52px] md:text-[88px] font-bold text-white leading-[1.05] mb-8 tracking-[-0.02em]">
            We turn ideas <br />
            into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#4F46E5]">intelligent</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#4F46E5]">experiences.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-gray-300 text-lg md:text-[20px] max-w-[600px] mb-12 leading-[1.6] font-light">
            We partner with ambitious brands to create AI-powered solutions that drive impact, automate complexity, and shape the future.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 sm:gap-6">
            <Link to="/work" className="px-8 py-4 rounded-full bg-[#4F46E5] text-white text-[15px] font-semibold hover:bg-[#4338CA] transition-colors flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(79,70,229,0.4)] group">
              Explore our work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-full border border-white/30 text-white text-[15px] font-semibold hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
              What we do <Play size={16} className="fill-current" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Hint (the live cursor ring is rendered site-wide by GlobalCursor) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ x: ringX, y: ringY }}
        className="hidden lg:flex absolute bottom-32 right-[16%] items-center gap-6 pointer-events-none"
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">
          <span className="text-[13px] text-gray-300 font-medium">Move your cursor<br/>to explore</span>
        </div>
      </motion.div>

    </section>
  );
};

const StorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F4F6FB] relative overflow-hidden">
      {/* Abstract light background waves */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#E0E7FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#F3E8FF] rounded-full mix-blend-multiply filter blur-[140px] opacity-70"></div>
        {/* Simulating the dotted mesh texture */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col mb-24">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#4F46E5] font-medium text-sm tracking-widest">02</span>
            <div className="h-[1px] w-16 bg-[#4F46E5]/30"></div>
          </div>
          <span className="text-gray-500 text-[11px] tracking-[0.2em] uppercase font-semibold">The ma.ai story</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-20">
            <motion.h2 variants={fadeInUp} className="text-[32px] sm:text-[44px] md:text-[64px] font-semibold text-gray-900 mb-10 tracking-tight leading-[1.1]">
              From <span className="text-[#8B5CF6]">ma</span> <span className="text-[20px] sm:text-[28px] md:text-[32px] text-gray-400 font-light align-middle">(間)</span> to <span className="text-[#4F46E5]">maa</span> <span className="text-[20px] sm:text-[28px] md:text-[32px] text-gray-400 font-light align-middle">(माँ)</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="flex items-center gap-6 text-[11px] text-gray-500 tracking-[0.25em] uppercase mb-16 font-semibold">
              <span>Space</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>Care</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>Presence</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative pl-5 sm:pl-8 border-l-[3px] border-gray-300 mb-16">
              <p className="text-[20px] sm:text-[26px] text-gray-900 leading-[1.4] font-light">
                AI that gives <span className="font-semibold">room.</span><br />
                <span className="font-semibold">Present</span> when needed.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white text-gray-600 font-semibold text-[13px]">
              <div className="w-4 h-4 rounded-full border-[3px] border-[#8B5CF6] flex items-center justify-center">
                <div className="w-1 h-1 bg-[#8B5CF6] rounded-full"></div>
              </div>
              Quietly working in the background
            </motion.div>
          </motion.div>

          {/* Exact Mockup 3D Sphere Recreation */}
          <div className="relative h-[420px] sm:h-[560px] lg:h-[700px] flex items-center justify-center lg:justify-end lg:pr-10">
            
            {/* Floating UI Tags matching mockup exactly */}
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute top-[2%] left-0 z-30 scale-[0.8] origin-left sm:scale-100">
              <div className="bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white flex items-center gap-3 text-[13px] font-semibold text-gray-700">
                <Activity size={16} className="text-[#8B5CF6]" /> Understands context
              </div>
            </motion.div>
            
            <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="hidden sm:block absolute top-[5%] right-[5%] z-30">
              <div className="bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white flex items-center gap-3 text-[13px] font-semibold text-gray-700">
                <Sparkles size={16} className="text-[#8B5CF6]" /> Adapts intelligently
              </div>
            </motion.div>

            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }} className="absolute bottom-[4%] left-0 z-30 scale-[0.8] origin-left sm:scale-100 sm:left-[20%]">
              <div className="bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white flex items-center gap-3 text-[13px] font-semibold text-gray-700">
                <Users size={16} className="text-[#8B5CF6]" /> Works with you, not over you
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-14, 14, -14] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative w-[300px] sm:w-[420px] lg:w-[520px] max-w-full"
            >
              <div className="absolute inset-[12%] rounded-full bg-[#C4B5FD]/40 blur-[90px]"></div>
              <img src={storySphere} alt="ma.ai intelligence sphere" loading="lazy" className="relative w-full h-auto drop-shadow-[0_40px_80px_rgba(139,92,246,0.25)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <Logo light={true} className="w-[60px] h-[42px] sm:w-[90px] sm:h-[62px] mb-1" />
                <span className="text-[#111827] font-bold text-[22px] sm:text-[32px] tracking-tight">ma.ai</span>
              </div>
            </motion.div>

            {/* Right side floating characters layout */}
            <div className="hidden lg:flex absolute right-[-20px] top-[20%] flex flex-col gap-6 text-gray-400 text-xl font-light items-center">
               <span>間</span>
               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
               {/* Active dot */}
               <div className="w-6 h-6 rounded-full bg-[#EEF2FF] flex items-center justify-center border border-[#C7D2FE]">
                  <div className="w-2 h-2 rounded-full bg-[#4F46E5]"></div>
               </div>
               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
               <span>माँ</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const worksData = [
  { id: 1, title: 'Night Drive', type: 'Brand Film', duration: '00:52', image: workNightDrive },
  { id: 2, title: 'Zero Gravity', type: 'Campaign Film', duration: '00:45', image: workZeroGravity },
  { id: 3, title: 'Colors of Imagination', type: 'Brand Film', duration: '01:28', image: workColors, featured: true },
  { id: 4, title: 'Beyond Earth', type: 'Concept Film', duration: '01:12', image: workBeyondEarth },
  { id: 5, title: 'The New Tomorrow', type: 'Explainer', duration: '00:58', image: workTomorrow },
];

const categories = [
  { name: 'ALL WORK', icon: <Film size={16} />, match: null as string | null },
  { name: 'BRAND FILMS', icon: <Film size={16} />, match: 'Brand Film' },
  { name: 'CAMPAIGNS', icon: <Megaphone size={16} />, match: 'Campaign Film' },
  { name: 'CONCEPT FILMS', icon: <Box size={16} />, match: 'Concept Film' },
  { name: 'EXPLAINERS', icon: <AudioLines size={16} />, match: 'Explainer' },
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
    <section className="py-20 md:py-32 bg-[#05050A] relative overflow-hidden">
      
      {/* Background ambient glow matching mockup */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#4F46E5]/10 via-[#ec4899]/10 to-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-5 mb-14 md:mb-20 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="inline-flex items-center gap-6 mb-8">
          <div className="h-[1px] w-16 bg-[#8B5CF6]/30"></div>
          <span className="text-[#8B5CF6] font-medium text-[11px] tracking-[0.2em] uppercase">Works</span>
          <div className="h-[1px] w-16 bg-[#8B5CF6]/30"></div>
        </motion.div>
        
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-[34px] sm:text-[52px] md:text-[80px] font-bold text-white mb-6 tracking-tight leading-none">
          Where ideas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#8B5CF6]">come alive.</span>
        </motion.h2>
        
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-gray-400 text-lg font-light">
          A showcase of AI-crafted stories, films and experiences.
        </motion.p>
      </div>

      {/* Center-aligned Carousel mimicking the 3D depth */}
      <div className="w-full relative pb-12 sm:pb-16 z-10 flex justify-center items-center gap-6 px-5">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous work"
            className="flex w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-[#05050A]/70 backdrop-blur items-center justify-center text-white hover:bg-white/10 transition-colors absolute left-2 md:left-8 z-30"
          >
             <ChevronLeft size={24} />
          </button>

          {visibleWorks.map((work, i) => {
            const featured = i === activeIndex;
            return (
            <motion.button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${work.title}`}
              key={work.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-[2rem] overflow-hidden flex-shrink-0 cursor-pointer text-left transition-all duration-500 shadow-2xl ${
                featured 
                ? 'w-[min(320px,calc(100vw-40px))] md:w-[480px] h-[420px] md:h-[480px] ring-[2px] ring-[#8B5CF6] ring-offset-2 ring-offset-[#05050A] shadow-[0_0_60px_rgba(139,92,246,0.4)] z-20 scale-105' 
                : 'w-[200px] md:w-[280px] h-[400px] opacity-70 hover:opacity-100 z-10 hidden md:block'
              }`}
            >
              <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
              
              {/* Image Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/40 to-transparent opacity-90"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transition-transform duration-300 hover:scale-110 ${featured ? 'w-20 h-20' : 'w-16 h-16'}`}>
                  <Play className="text-white fill-white ml-1" size={featured ? 32 : 24} />
                </div>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 flex justify-between items-end gap-3">
                <div>
                  <h3 className={`text-white font-semibold mb-1 ${featured ? 'text-2xl' : 'text-lg'}`}>{work.title}</h3>
                  <p className="text-gray-300 text-sm font-light">{work.type}</p>
                  {featured && <div className="h-[2px] w-24 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] mt-4"></div>}
                </div>
                <span className="text-white text-sm font-medium">{work.duration}</span>
              </div>
            </motion.button>
          );})}

          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next work"
            className="flex w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-[#05050A]/70 backdrop-blur items-center justify-center text-white hover:bg-white/10 transition-colors absolute right-2 md:right-8 z-30"
          >
             <ChevronRight size={24} />
          </button>
      </div>

      {/* Categories Pill Grid */}
      <div className="max-w-[1200px] mx-auto px-5 mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 relative z-10">
        {categories.map((cat) => {
          const selected = category === cat.match;
          return (
          <button
            type="button"
            key={cat.name}
            aria-pressed={selected}
            onClick={() => { setCategory(cat.match); setActive(0); }}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border ${selected ? 'border-[#8B5CF6] bg-[#8B5CF6]/10 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]' : 'border-white/10 bg-transparent text-gray-400'} text-[11px] sm:text-[12px] font-semibold tracking-widest hover:text-white hover:border-white/30 transition-all flex items-center gap-2 sm:gap-3`}
          >
            {cat.icon} {cat.name}
          </button>
        );})}
      </div>


      {/* View All CTA */}
      <div className="mt-20 relative">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-[15px] font-light max-w-[460px] text-center md:text-left">
              Over 120 films, campaigns and AI experiments delivered for brands across 14 markets.
            </p>
            <Link
              to="/work"
              className="group relative z-10 px-9 py-4 rounded-full border-[1.5px] border-white/20 bg-[#05050A] text-white font-semibold hover:border-[#8B5CF6] hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all inline-flex items-center gap-3 tracking-[0.15em] text-[13px] uppercase"
            >
              View all works
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

const WhySection = () => {
  const reasons = [
    {
      id: '01',
      icon: <Users size={48} className="text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" />,
      title: 'Human-centred.',
      desc: 'Technology starts with people. Adoption is designed, not assumed.',
      baseColor: 'from-[#3B82F6] to-[#6366F1]'
    },
    {
      id: '02',
      icon: <Target size={48} className="text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" />,
      title: 'Outcome-first.',
      desc: 'We start with the end in mind and build what drives measurable impact.',
      baseColor: 'from-[#8B5CF6] to-[#D946EF]'
    },
    {
      id: '03',
      icon: <Globe size={48} className="text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" />,
      title: 'Globally fluent.',
      desc: '40+ languages. Cross-cultural teams. One global standard.',
      baseColor: 'from-[#0EA5E9] to-[#3B82F6]'
    },
    {
      id: '04',
      icon: <ShieldCheck size={48} className="text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" />,
      title: 'Responsibly delivered.',
      desc: 'Ethical by design. Secure by default. Governance built in.',
      baseColor: 'from-[#6366F1] to-[#8B5CF6]'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#05050A] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        
        {/* Top Split Area */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 md:mb-24 gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <span className="text-[#8B5CF6] font-medium text-sm tracking-widest">04</span>
              <div className="h-[1px] w-12 bg-[#8B5CF6]/50"></div>
              <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-semibold">Why ma.ai</span>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-6">
               <h2 className="text-[40px] sm:text-[56px] md:text-[88px] font-bold text-white tracking-tight">Why</h2>
               <h2 className="text-[40px] sm:text-[56px] md:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#4F46E5] font-serif-italic pr-4">ma.ai?</h2>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-gray-300 text-[17px] sm:text-[20px] font-light leading-[1.6]">
              We combine human insight, creative intelligence and AI capability to drive real business impact.
            </motion.p>
          </motion.div>
          
          {/* Mockup matching 3D Glass Cube */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="hidden lg:flex relative w-[500px] h-[450px] justify-center items-center">
             
             <div className="absolute inset-0 flex items-center justify-center opacity-50">
                <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent shadow-[0_0_10px_#8B5CF6]"></div>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent absolute rotate-[15deg]"></div>
                <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#D946EF] to-transparent absolute -rotate-[15deg]"></div>
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
                 <span className="text-white font-bold text-[28px] tracking-tight drop-shadow-md">ma.ai</span>
               </div>
             </motion.div>

             {/* Floating UI Elements from Mockup */}
             <div className="absolute top-[10%] left-[5%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-[#D946EF] shadow-[0_10px_20px_rgba(0,0,0,0.5)]"><Cpu size={24}/></div>
             <div className="absolute top-[15%] right-[5%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.5)]"><Sparkles size={24}/></div>
             <div className="absolute bottom-[20%] left-[10%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-[#8B5CF6] shadow-[0_10px_20px_rgba(0,0,0,0.5)]"><Users size={24}/></div>
             <div className="absolute bottom-[25%] right-[10%] w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.5)]"><ShieldCheck size={24}/></div>
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
              className="bg-[#0B0D16] border border-white/10 rounded-[24px] p-6 sm:p-8 hover:bg-[#111422] transition-all duration-300 relative overflow-hidden flex flex-col items-start"
            >
              <div className="text-[#8B5CF6] font-medium text-[15px] mb-8">{reason.id}</div>
              
              {/* Emulated 3D Icon Base */}
              <div className="h-32 mb-8 relative w-full flex justify-center">
                 {/* The angled base platform */}
                 <div className="absolute bottom-4 w-32 h-12 bg-gradient-to-b from-[#1E2336] to-[#0A0D15] rounded-xl transform rotate-x-60 skew-x-12 border border-t-white/20 border-l-white/10 shadow-[0_20px_30px_rgba(0,0,0,0.8)] flex items-center justify-center">
                     {/* The glowing pad on top of base */}
                     <div className={`w-24 h-8 rounded-lg bg-gradient-to-r ${reason.baseColor} opacity-80 blur-[2px]`}></div>
                 </div>
                 {/* The Icon sitting on the pad */}
                 <div className={`absolute bottom-8 text-white filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)]`}>
                    {/* Applying a slight gradient to the icon itself using SVG definitions or just drop shadow */}
                    {reason.icon}
                 </div>
              </div>

              <h3 className="text-[22px] font-semibold text-white mb-6 relative">
                {reason.title}
                {/* Thin colored underline matching mockup */}
                <div className={`absolute -bottom-3 left-0 w-8 h-[2px] bg-gradient-to-r ${reason.baseColor}`}></div>
              </h3>
              <p className="text-gray-400 text-[15px] leading-[1.6] mt-4 font-light">
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
  const team = [
    {
      name: 'Souvik Seal',
      role: 'CEO',
      desc1: 'Leads with vision.',
      desc2: 'Drives with precision.',
      image: team1
    },
    {
      name: 'Prarthana Chabbria',
      role: 'Co-Founder',
      desc1: 'Turns ideas into strategy.',
      desc2: 'Builds bridges between vision and execution.',
      image: team2
    },
    {
      name: 'Meena Chabbria',
      role: 'Founder',
      desc1: 'The architect of ma.ai.',
      desc2: 'Guided by purpose. Driven by conviction.',
      image: team3
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#05050A] relative overflow-hidden border-t border-white/5">
      
      <div className="absolute right-[-20%] top-[-8%] w-[1100px] max-w-[110%] sm:right-[-10%] sm:max-w-[85%] pointer-events-none select-none">
        <img src={teamOrbit} alt="" aria-hidden="true" loading="lazy" className="w-full h-auto opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05050A] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/60 via-transparent to-[#05050A]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14 md:mb-20">
          <h2 className="text-[34px] sm:text-[48px] md:text-[72px] font-bold text-white tracking-tight leading-none">The minds</h2>
          <h2 className="text-[34px] sm:text-[48px] md:text-[72px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#4F46E5] mb-8 tracking-tight leading-none">behind ma.ai</h2>
          <div className="h-[2px] w-20 bg-[#8B5CF6]/40 mb-6"></div>
          <p className="text-gray-300 text-[18px] max-w-[400px] font-light leading-[1.6]">
            A team of strategists, creators and engineers building AI with purpose.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="bg-[#05050A] rounded-[24px] overflow-hidden group relative"
            >
              {/* Specialized mockup border - subtle top, glowing purple bottom */}
              <div className="absolute inset-0 rounded-[24px] border border-white/10 z-30 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-[50%] rounded-b-[24px] border-b-[2px] border-x-[2px] border-transparent bg-gradient-to-t from-[#8B5CF6]/30 to-transparent p-[1px] z-30 pointer-events-none" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'destination-out' }}></div>
              <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#4F46E5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              
              <div className="h-[320px] sm:h-[380px] overflow-hidden relative bg-[#0B0D16]">
                {/* Image deeply integrated with background */}
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-[20%] group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/60 to-transparent z-10"></div>
              </div>
              
              <div className="p-6 sm:p-8 relative z-20 -mt-20">
                <h3 className="text-[24px] font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#A855F7] text-[13px] font-medium mb-8 tracking-[0.05em]">{member.role}</p>
                
                <div className="space-y-1">
                  <p className="text-gray-400 text-[13px] font-light">{member.desc1}</p>
                  <p className="text-gray-400 text-[13px] font-light">{member.desc2}</p>
                </div>

                {/* Specific LinkedIn Icon Design */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-11 h-11 rounded-full border-[1.5px] border-[#8B5CF6]/50 flex items-center justify-center text-white hover:bg-[#8B5CF6] hover:border-[#8B5CF6] transition-all cursor-pointer backdrop-blur-sm z-30">
                  <span className="font-bold text-[18px] tracking-tighter">in</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exact Bottom Banner styling */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/10 rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#0B0D1A] to-[#05050A] relative overflow-hidden"
        >
          {/* subtle left glow */}
          <div className="absolute left-0 top-0 w-[30%] h-full bg-gradient-to-r from-[#8B5CF6]/5 to-transparent pointer-events-none"></div>

          <div className="flex items-center gap-4 sm:gap-8 mb-6 md:mb-0 relative z-10">
            {/* The circular icon with dashed rings */}
            <div className="w-[72px] h-[72px] flex items-center justify-center relative">
               <div className="absolute inset-0 border border-white/20 rounded-full border-dashed"></div>
               <div className="absolute inset-2 border border-white/5 rounded-full"></div>
               <div className="absolute inset-3 border border-[#8B5CF6]/20 bg-[#0B0D1A] rounded-full flex items-center justify-center">
                  <Users size={24} className="text-[#8B5CF6]" />
               </div>
            </div>
            
            <div className="border-l border-white/10 pl-4 sm:pl-8">
              <h4 className="text-[19px] sm:text-[24px] font-semibold text-white leading-tight">Different minds.</h4>
              <h4 className="text-[19px] sm:text-[24px] font-semibold text-[#8B5CF6] leading-tight">One shared purpose.</h4>
            </div>
          </div>
          
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors flex items-center gap-4 border-b border-gray-600 pb-2 text-[15px] font-light relative z-10 group">
            View more <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
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
      <div className="min-h-screen bg-[#05050A] text-white selection:bg-[#8B5CF6]/30 scroll-smooth">
        <SiteNav />
        <main>
          <HeroSection />
          <StorySection />
          <WorksSection />
          <WhySection />
          <TeamSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}