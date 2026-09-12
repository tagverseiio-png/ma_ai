import React, { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Link, useLocation } from '@tanstack/react-router';
import { SiteNav, SiteFooter, fontStyles } from '@/components/site/SiteChrome';
import { AmbientOrb } from '@/components/site/AmbientOrb';

import { StorySection } from '@/components/site/StorySection';
import { BrandsSection } from '@/components/site/BrandsSection';
import { WorksSection } from '@/components/site/WorksSection';
import { WhySection } from '@/components/site/WhySection';
import { TeamSection } from '@/components/site/TeamSection';
import { ServicesSection } from '@/components/site/ServicesSection';
import showReelVideo from '@/assets/SHOW REEL HD .mp4';

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.playbackRate = 1;
      video.play().then(() => {
        setVideoReady(true);
      }).catch(() => {
        setVideoReady(true);
      });
    };

    if (video.readyState >= 3) {
      handleCanPlay();
    } else {
      video.addEventListener('canplaythrough', handleCanPlay);
    }

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, []);

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

      <motion.div style={{ opacity: contentOpacity, pointerEvents }} className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <Link to="/services" className="px-6 py-3 rounded-[30px] bg-white text-black text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#8B5CF6] transition-colors shadow-lg">
          What we do
        </Link>
      </motion.div>

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

export default function MaLanding() {
  const location = useLocation();

  useEffect(() => {
    // Map pathnames to section IDs
    const pathToId: Record<string, string> = {
      '/about': 'about',
      '/brands': 'brands',
      '/work': 'work',
      '/why': 'why',
      '/team': 'team',
      '/services': 'services'
    };

    const sectionId = pathToId[location.pathname];
    if (sectionId) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

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