import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight, Play, ChevronDown, Linkedin,
  Mail, Phone, MapPin, Instagram, Twitter, Heart,
  Users, Target, Globe, ShieldCheck, PlayCircle,
  Film, Box, Megaphone, AudioLines,
  Activity, Sparkles, Cpu, ChevronLeft, ChevronRight, Volume2, VolumeX, X
} from 'lucide-react';
import heroCity from '@/assets/hero-city.jpg';
import { SectionEyebrow } from '@/components/site/SiteChrome';
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
import teamVinay from '@/assets/1ebc6027-b395-4200-8c9d-b996c087f377.JPG.jpeg';
import teamSouvik from '@/assets/ai_creators/Ajith ( ai creator ).jpeg';
import footerLogoImg from '@/assets/Ma_footer_logo_200x160.png';
import ctaLogo3d from '@/assets/cta-logo3d.png';
import showReelVideo from '@/assets/SHOW REEL HD .mp4';
import { SiteNav, SiteFooter, Logo, fontStyles, fadeInUp, staggerContainer } from '@/components/site/SiteChrome';
import { ServicesSection } from '@/components/site/ServicesSection';
import { useTheme } from '@/hooks/use-theme';

const AmbientOrb = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 600], [0, 1]);

  return (
    <motion.div style={{ opacity }} className="fixed inset-0 pointer-events-none z-[1]">
      <motion.div
        animate={{
          x: ["0%", "150%", "50%", "200%", "0%"],
          y: ["0%", "100%", "200%", "50%", "0%"],
          scale: [1, 1.3, 0.8, 1.2, 1],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#8B5CF6]/12 dark:bg-[#8B5CF6]/15 blur-[100px] sm:blur-[140px] rounded-[40%_60%_70%_30%] pointer-events-none"
      />
    </motion.div>
  );
};

import brandArckz from '@/assets/brands/ARKCKZ.png';
import brandBaggrys from "@/assets/brands/Bagrry's.png";
import brandHadaza from '@/assets/brands/Hadaza.png';
import brandMilkyMist from '@/assets/brands/Milky_mist.png';
import brandRareRabbit from '@/assets/brands/Rare_rabbit.png';
import brandAlluCinemas from '@/assets/brands/allu_cinemas.png';
import brandChallani from '@/assets/brands/challani.png';
import brandNextface from '@/assets/brands/nextface.png';
import brandSpinSalon from '@/assets/brands/spin_salon.png';
import brandSterling from '@/assets/brands/sterling.png';



const HeroSection = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure smooth playback: wait until video has enough data, then play
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      // Set playback rate to 1 to ensure normal speed
      video.playbackRate = 1;
      video.play().then(() => {
        setVideoReady(true);
      }).catch(() => {
        // Autoplay might be blocked, still show video
        setVideoReady(true);
      });
    };

    // If video is already ready (cached)
    if (video.readyState >= 3) {
      handleCanPlay();
    } else {
      video.addEventListener('canplaythrough', handleCanPlay);
    }

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, []);

  // Pause video when scrolled out of view for performance
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const contentOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const pointerEvents = useTransform(scrollY, (v) => (v > 50 ? 'none' : 'auto'));

  return (
    <section className="relative min-h-[100svh] bg-[#111111] flex flex-col overflow-hidden">

      {/* Background Video — GPU-accelerated for smooth playback */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          objectPosition: 'center',
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          opacity: videoReady ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
        }}
        suppressHydrationWarning
      >
        <source src={showReelVideo} type="video/mp4" suppressHydrationWarning />
      </video>

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 md:pt-0">
        <div className="max-w-[700px]">

          <h1 className="text-[36px] sm:text-[50px] md:text-[64px] font-medium text-white leading-[1.1] mb-6 drop-shadow-md tracking-tight">
            We build worlds<br />that move you.
          </h1>

          <p className="text-white/90 text-[14px] md:text-[16px] leading-[1.6] max-w-[500px] mb-8 font-light drop-shadow-md">
            We partner with ambitious brands to create AI-powered solutions that drive impact, automate complexity, and shape the future.
          </p>

          <Link to="/work" className="inline-flex px-8 py-3.5 bg-white text-black font-semibold text-[12px] tracking-[0.1em] uppercase hover:bg-[#8B5CF6] hover:text-black transition-colors duration-300">
            Explore our work
          </Link>

        </div>
      </motion.div>

      {/* Floating Right Button */}
      <motion.div style={{ opacity: contentOpacity, pointerEvents }} className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <Link to="/services" className="px-6 py-3 rounded-[30px] bg-white text-black text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#8B5CF6] transition-colors shadow-lg">
          What we do
        </Link>
      </motion.div>

      {/* Bottom Footer Links */}
      <motion.div style={{ opacity: contentOpacity, pointerEvents }} className="absolute bottom-10 left-6 md:left-16 lg:left-24 z-20 flex gap-6 md:gap-10">
        <a href="#" className="text-white/80 hover:text-white text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">
          Website
        </a>
        <a href="#" className="text-white/80 hover:text-white text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">
          YouTube
        </a>
        <a href="#" className="text-white/80 hover:text-white text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">
          Instagram
        </a>
      </motion.div>

    </section>
  );
};

const StorySection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden border-t border-[var(--site-border)] transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)' }}>
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

          {/* 3D Sphere - preserved */}
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
};

type BrandCategory = 'Luxe & Lifestyle' | 'Culinary Collection' | 'Entertainment Hub' | 'Wellness Collective';

const brandsData: { name: string; category: BrandCategory; logo: string; whiteBgInDark?: boolean }[] = [
  { name: 'Sterling', category: 'Luxe & Lifestyle', logo: brandSterling },
  { name: 'Milky Mist', category: 'Culinary Collection', logo: brandMilkyMist, whiteBgInDark: true },
  { name: 'Nextface', category: 'Wellness Collective', logo: brandNextface },
  { name: 'Arckz', category: 'Luxe & Lifestyle', logo: brandArckz },
  { name: 'Allu Cinemas', category: 'Entertainment Hub', logo: brandAlluCinemas },
  { name: 'Challani Jewellery Mart', category: 'Luxe & Lifestyle', logo: brandChallani },
  { name: 'Spin Salon', category: 'Wellness Collective', logo: brandSpinSalon },
  { name: 'Rare Rabbit', category: 'Luxe & Lifestyle', logo: brandRareRabbit },
  { name: 'Baggrys', category: 'Culinary Collection', logo: brandBaggrys },
  { name: 'Hadaza Grooming Studio', category: 'Wellness Collective', logo: brandHadaza },
];

const getBrandIcon = (category: BrandCategory) => {
  switch (category) {
    case 'Luxe & Lifestyle': return <Heart size={16} />;
    case 'Culinary Collection': return <Box size={16} />;
    case 'Entertainment Hub': return <Film size={16} />;
    case 'Wellness Collective': return <Activity size={16} />;
    default: return <Sparkles size={16} />;
  }
};

const BrandsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<BrandCategory | 'All Partners' | null>('All Partners');
  const [hoveredCategory, setHoveredCategory] = useState<BrandCategory | 'All Partners' | null>(null);

  const activeCategory = hoveredCategory !== null ? hoveredCategory : (selectedCategory !== 'All Partners' ? selectedCategory : null);
  const isHovering = activeCategory !== null && activeCategory !== 'All Partners';

  const filterCategories = ['All Partners', 'Luxe & Lifestyle', 'Culinary Collection', 'Entertainment Hub', 'Wellness Collective'] as const;

  // Split brands into two rows for the marquee
  const row1Brands = brandsData.slice(0, 5);
  const row2Brands = brandsData.slice(5, 10);

  const renderBrand = (brand: typeof brandsData[0], index: number) => {
    const isHighlighted = isHovering && activeCategory === brand.category;
    const isDimmed = isHovering && activeCategory !== brand.category;

    const isChallani = brand.name === 'Challani Jewellery Mart';
    const isMilkyMist = brand.name === 'Milky Mist';
    const isRareRabbit = brand.name === 'Rare Rabbit';

    return (
      <div
        key={`${brand.name}-${index}`}
        className={`flex-shrink-0 h-[100px] sm:h-[130px] px-8 sm:px-12 rounded-[16px] flex items-center justify-center transition-all duration-500 ease-out cursor-default ${isHighlighted
            ? 'scale-110 z-10 -translate-y-2'
            : isDimmed
              ? 'opacity-20 scale-95 blur-[2px] border border-transparent'
              : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-100 border border-transparent'
          }`}
      >
        <div className={`flex items-center justify-center transition-all duration-500 ${isChallani ? 'overflow-hidden h-[65px] sm:h-[75px] w-[160px] sm:w-[190px]' : ''} ${brand.whiteBgInDark
            ? isMilkyMist
              ? 'dark:bg-white/90 dark:py-3 dark:px-6 rounded-none'
              : 'dark:bg-white/90 dark:p-3 dark:rounded-xl'
            : ''
          }`}>
          <img
            src={brand.logo}
            alt={brand.name}
            className={`transition-all duration-500 ${!brand.whiteBgInDark && 'dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]'} ${isDimmed ? 'grayscale' : ''} ${isChallani ? 'object-cover w-full h-full' : 'max-h-[85px] max-w-[250px] object-contain'
              } ${isRareRabbit ? 'scale-[1.3]' : ''} ${isMilkyMist ? 'scale-[1.7]' : ''}`}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="brands" className="py-16 md:py-24 relative overflow-hidden border-t border-[var(--site-border)] transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)' }}>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: scrollLeft 40s linear infinite;
        }
        .marquee-right {
          animation: scrollRight 40s linear infinite;
        }
        .marquee-paused {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12 md:mb-16 relative">
          <div className="relative z-10">
            <SectionEyebrow>02.5 / Partners</SectionEyebrow>

            <motion.h2 variants={fadeInUp} className="text-[36px] sm:text-[48px] md:text-[64px] font-bold tracking-[-0.04em] leading-[0.9] mb-4" style={{ color: 'var(--site-fg)' }}>
              <span className="text-[#8B5CF6]">Brands</span> we've<br />worked with
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[16px] md:text-[18px] font-normal leading-[1.5] max-w-[450px]" style={{ color: 'var(--site-muted)' }}>
              Trusted by ambitious brands across industries to deliver AI-powered creative that moves the needle.
            </motion.p>
          </div>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-12 relative z-10">
            <span className="text-[11px] sm:text-[12px] font-bold text-[var(--site-muted)] tracking-widest uppercase mr-2">FILTER INDUSTRY:</span>
            {filterCategories.map(cat => {
              const isSelected = selectedCategory === cat;
              const isHovered = hoveredCategory === cat;
              const isActive = isHovered || (hoveredCategory === null && isSelected);

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  onMouseEnter={() => setHoveredCategory(cat as any)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all duration-300 ${isActive
                      ? 'bg-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105'
                      : 'bg-white/5 border border-[var(--site-border)] text-[var(--site-fg)] hover:border-[#8B5CF6]/50'
                    }`}
                >
                  {cat}
                </button>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Proven Scale stats - Temporarily hidden */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="hidden grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {[
            { value: '120+', label: 'AI Films Delivered' },
            { value: '14', label: 'Markets Served' },
            { value: '40+', label: 'Languages Supported' },
            { value: '6', label: 'Creative Verticals' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="rounded-[16px] border border-[var(--site-border)] px-6 py-6 md:py-8 text-center hover:border-[#7C3AED]/50 transition-colors duration-300"
              style={{ backgroundColor: 'var(--site-bg)' }}
            >
              <div className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-[-0.04em] leading-[1] text-[#7C3AED]">
                {stat.value}
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] font-bold tracking-[0.08em] uppercase" style={{ color: 'var(--site-muted)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative pt-8 pb-12">
          {/* Scrolling marquee — Row 1 */}
          <div className="relative overflow-visible mb-6 sm:mb-8">
            <div className="overflow-visible w-full">
              <div className={`flex gap-6 w-max marquee-left ${isHovering ? 'marquee-paused' : ''}`}>
                {/* 4 sets of row1Brands to ensure smooth infinite loop across wide screens with -25% translation */}
                {[...row1Brands, ...row1Brands, ...row1Brands, ...row1Brands].map((brand, i) => renderBrand(brand, i))}
              </div>
            </div>
          </div>

          {/* Scrolling marquee — Row 2 (reverse direction) */}
          <div className="relative overflow-visible">
            <div className="overflow-visible w-full">
              <div className={`flex gap-6 w-max marquee-right ${isHovering ? 'marquee-paused' : ''}`}>
                {[...row2Brands, ...row2Brands, ...row2Brands, ...row2Brands].map((brand, i) => renderBrand(brand, i))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import hotel1 from '@/assets/Client Case Studies/HOTEL 1 (1).mp4';
import katha1 from '@/assets/Client Case Studies/KATHA  (1).mp4';
import manali1 from '@/assets/Client Case Studies/MANALI HIGH RES (1).mp4';
import ranthambore1 from '@/assets/Client Case Studies/RANTHAMBORE FINAL   (1).mp4';
import tadoba1 from '@/assets/Client Case Studies/TADOBA 30 MARCH (1).mp4';
import animation1 from '@/assets/Micro Drama Series/ANIMATION (1).mp4';
import brandFilm1 from '@/assets/showreel-Brandfilms/MA AI BRAND FILM (1) (1).mp4';
import showReel2 from '@/assets/showreel-Brandfilms/SHOW REEL HD (2) (1).mp4';
import showReel3 from '@/assets/showreel-Brandfilms/SHOWREEL 2 (1).mp4';
import ugc from '@/assets/showreel-Brandfilms/UGC.mp4';
import hadaza1 from '@/assets/Social Media Vertical Content/HADAZA REEL FY.mp4';
import realistic1 from '@/assets/Social Media Vertical Content/REALSTIC .mp4';
import campus1 from '@/assets/VFX Content/CAMPUS SHOES HD.mp4';
import fastPaced1 from '@/assets/VFX Content/FAST PACED AD  (1).mp4';
import rareRabbit1 from '@/assets/VFX Content/RARE RABBIT AI MODEL AD .mp4';
import yt1 from '@/assets/YouTube Video/Found Through Trust - goldenmatrimonial (1) (1).mp4';

const worksData = [
  // Showreel / Brand Films
  { id: 1, title: 'MA AI Brand Film', type: 'Showreel / Brand Films', duration: '01:00', video: brandFilm1, desc: 'A showcase of AI-crafted stories, films and experiences.', featured: true },
  { id: 2, title: 'Show Reel HD', type: 'Showreel / Brand Films', duration: '00:45', video: showReel2, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { id: 3, title: 'Showreel 2', type: 'Showreel / Brand Films', duration: '01:15', video: showReel3, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { id: 4, title: 'UGC Content', type: 'Showreel / Brand Films', duration: '00:30', video: ugc, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  // Client Case Studies
  { id: 5, title: 'Hotel Feature', type: 'Client Case Studies', duration: '00:45', video: hotel1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { id: 6, title: 'Katha Story', type: 'Client Case Studies', duration: '01:10', video: katha1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { id: 7, title: 'Manali High Res', type: 'Client Case Studies', duration: '01:45', video: manali1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { id: 8, title: 'Ranthambore Final', type: 'Client Case Studies', duration: '01:45', video: ranthambore1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { id: 9, title: 'Tadoba March', type: 'Client Case Studies', duration: '01:45', video: tadoba1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  // Micro Drama Series
  { id: 10, title: 'Animation Story', type: 'Micro Drama Series', duration: '03:20', video: animation1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  // Social Media Vertical Content
  { id: 11, title: 'Hadaza Reel', type: 'Social Media Vertical Content', duration: '00:15', video: hadaza1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { id: 12, title: 'Realistic Vertical', type: 'Social Media Vertical Content', duration: '00:30', video: realistic1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  // VFX Content
  { id: 13, title: 'Campus Shoes', type: 'VFX Content', duration: '01:12', video: campus1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { id: 14, title: 'Fast Paced Ad', type: 'VFX Content', duration: '00:40', video: fastPaced1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { id: 15, title: 'Rare Rabbit AI Model', type: 'VFX Content', duration: '00:25', video: rareRabbit1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  // YouTube Video
  { id: 16, title: 'Golden Matrimonial', type: 'YouTube Video', duration: '00:58', video: yt1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
];

function HorizontalVideoCard({ p, index, onPlayFullscreen }: { p: typeof worksData[0], index: number, onPlayFullscreen: (videoUrl: string) => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });

      timerRef.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 5000);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40, scale: 0.95 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-[20px] overflow-hidden bg-white dark:bg-transparent border border-[var(--site-border)] transition-shadow hover:shadow-xl cursor-pointer flex flex-col"
      onClick={() => onPlayFullscreen(p.video)}
    >
      <div className="relative h-[220px] md:h-[260px] overflow-hidden bg-[#05050A]">
        <video
          ref={videoRef}
          src={p.video}
          muted={isMuted}
          playsInline
          loop={false}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className={`absolute top-4 right-4 transition-opacity duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted(!isMuted);
            }}
            className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-[#8B5CF6] hover:bg-black/70 transition-colors"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        <div className={`absolute top-4 right-4 transition-opacity duration-300 pointer-events-none ${!isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <Play size={16} className="text-[#8B5CF6] fill-[#8B5CF6] ml-1" />
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-3">
          {p.type} / {p.duration}
        </p>
        <h3 className="text-[22px] md:text-[26px] font-bold text-black dark:text-white tracking-tight mb-3">{p.title}</h3>
        <p className="text-[14px] text-gray-500 mb-6 flex-grow leading-relaxed">{p.desc}</p>

        <div className="flex items-center text-[12px] font-bold text-black dark:text-white tracking-widest uppercase mt-auto">
          EXPLORE SYSTEM <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
}

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
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);

  const visibleWorks = category ? worksData.filter((w) => w.type === category) : worksData;

  return (
    <section id="work" className="py-16 md:py-24 relative overflow-hidden border-t border-[var(--site-border)] transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 md:mb-14">
          <div className="flex flex-col items-start text-left">
            <SectionEyebrow>03 / Works</SectionEyebrow>

            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold mb-8 tracking-[-0.04em] leading-[0.9] max-w-[1000px]" style={{ color: 'var(--site-fg)' }}>
              Where ideas<br />come alive.
            </motion.h2>
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-[16px] md:text-[18px] font-normal leading-[1.5] max-w-[350px] md:mt-20" style={{ color: 'var(--site-muted)' }}>
            Built for attention.<br />Designed for velocity.
          </motion.p>
        </div>

        <hr className="border-[var(--site-border)] mb-12" />

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {visibleWorks.slice(0, 3).map((work, i) => (
              <HorizontalVideoCard key={work.id} p={work} index={i} onPlayFullscreen={setFullscreenVideo} />
            ))}
          </AnimatePresence>
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
                onClick={() => setCategory(cat.match)}
                className={`group h-[42px] px-[13px] rounded-full border ${selected ? 'border-[#8B5CF6] bg-[#8B5CF6] text-[#111111]' : 'border-[var(--site-border)] text-[var(--site-fg)] bg-white dark:bg-transparent'} text-[11px] font-bold tracking-widest hover:bg-[#8B5CF6] hover:border-[#8B5CF6] hover:text-[#111111] transition-all duration-300 flex items-center uppercase overflow-hidden`}
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
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[16px] font-normal max-w-[460px]" style={{ color: 'var(--site-muted)' }}>
            Over 120 films, campaigns and AI experiments delivered for brands across 14 markets.
          </p>
          <Link
            to="/work"
            className="group px-8 py-3.5 rounded-[40px] border-[1.5px] border-[var(--site-fg)] bg-transparent text-[var(--site-fg)] font-bold hover:bg-[#111111] hover:text-[#8B5CF6] hover:border-[#111111] transition-all inline-flex items-center gap-3 tracking-[0.08em] text-[13px] uppercase"
          >
            Explore our works
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {fullscreenVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setFullscreenVideo(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenVideo(null);
              }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors z-[110] cursor-pointer"
              aria-label="Close fullscreen"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={fullscreenVideo}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
    <section id="services" className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">

        {/* Top Split Area */}
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

          {/* Mockup matching 3D Glass Cube */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="hidden lg:flex relative w-[500px] h-[450px] justify-center items-center">



            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="relative z-10 w-[420px]"
            >
              <div className="absolute inset-[15%] bg-[#6D28D9]/40 blur-[80px] rounded-full"></div>
              <img src={footerLogoImg} alt="ma.ai intelligence core" loading="lazy" className="relative w-[160px] md:w-[200px] h-auto mx-auto drop-shadow-2xl" />

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
      image: teamMeena,
      imagePosition: 'object-center'
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
      image: teamVinay
    },
    {
      name: 'Souvik Seal',
      role: 'Co-Founder & CEO',
      bio: 'The brain of the operation, in the most literal sense. Souvik lives life on Sop\'s and runs on spreadsheets, and cold hard data — a walking encyclopedia who somehow makes numbers sound like a personality trait.',
      ig: 'souvik_seal', // Placeholder as it was missing from prompt
      image: teamSouvik,
      imagePosition: 'object-center'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden border-t border-[var(--site-border)] transition-colors duration-300" style={{ backgroundColor: 'var(--site-bg)' }}>
      <div className="absolute right-[-45%] sm:right-[-10%] top-[2%] sm:top-[-8%] w-[1100px] max-w-[160%] sm:max-w-[85%] pointer-events-none select-none z-0">
        <img src={theme === 'dark' ? teamOrbit : teamOrbitWhite} alt="" aria-hidden="true" loading="lazy" className="w-full h-auto opacity-40 sm:opacity-80" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--site-bg) 0%, transparent 40%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--site-bg) 0%, transparent 40%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--site-bg) 0%, transparent 15%)' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-10 md:mb-14">
          <SectionEyebrow>05 / The team</SectionEyebrow>
          <h2 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.9]" style={{ color: 'var(--site-fg)' }}>The minds</h2>
          <h2 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold mb-8 tracking-[-0.04em] leading-[0.9]" style={{ color: 'var(--site-fg)' }}>behind ma.ai</h2>
          <div className="h-[2px] w-20 bg-[#8B5CF6]/40 mb-6"></div>
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
                <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imagePosition || 'object-top'} grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-[20%] group-hover:scale-105 transition-all duration-700`} />
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
          <div className="absolute left-0 top-0 w-[30%] h-full bg-gradient-to-r from-[#8B5CF6]/5 to-transparent pointer-events-none"></div>

          <div className="flex items-center gap-4 sm:gap-8 mb-6 md:mb-0 relative z-10">
            {/* The circular icon with dashed rings */}
            <div className="w-[72px] h-[72px] flex items-center justify-center relative">
              <div className="absolute inset-0 border border-[var(--site-border)] rounded-full border-dashed"></div>
              <div className="absolute inset-2 border border-[var(--site-border)] rounded-full"></div>
              <div className="absolute inset-3 border border-[#8B5CF6]/20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--site-bg)' }}>
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
      <div className="min-h-screen scroll-smooth transition-colors duration-300 relative overflow-hidden" style={{ backgroundColor: 'var(--site-bg)', color: 'var(--site-fg)', WebkitTextFillColor: 'inherit' }}>
        <AmbientOrb />
        <SiteNav />
        <main>
          <HeroSection />
          <StorySection />
          <BrandsSection />
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