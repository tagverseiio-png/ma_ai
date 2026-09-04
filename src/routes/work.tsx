import { createFileRoute, Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Volume2, VolumeX, X } from 'lucide-react';
import { PageShell, Section } from '@/components/site/PageShell';
import { useState, useRef } from 'react';

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

export const Route = createFileRoute('/work')({
  head: () => ({
    meta: [
      { title: 'Work — AI-crafted films & experiences | ma.ai' },
      { name: 'description', content: 'Selected brand films, product films, campaigns and experiments produced by ma.ai with generative tooling and human craft.' },
      { property: 'og:title', content: 'Work — AI-crafted films & experiences | ma.ai' },
      { property: 'og:description', content: 'Selected brand films, campaigns and experiments produced by ma.ai.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: WorkPage,
});

const projects = [
  // Showreel / Brand Films
  { title: 'MA AI Brand Film', type: 'Showreel / Brand Films', duration: '01:00', video: brandFilm1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { title: 'Show Reel HD', type: 'Showreel / Brand Films', duration: '00:45', video: showReel2, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { title: 'Showreel 2', type: 'Showreel / Brand Films', duration: '01:15', video: showReel3, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { title: 'UGC Content', type: 'Showreel / Brand Films', duration: '00:30', video: ugc, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  // Client Case Studies
  { title: 'Hotel Feature', type: 'Client Case Studies', duration: '00:45', video: hotel1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { title: 'Katha Story', type: 'Client Case Studies', duration: '01:10', video: katha1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { title: 'Manali High Res', type: 'Client Case Studies', duration: '01:45', video: manali1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { title: 'Ranthambore Final', type: 'Client Case Studies', duration: '01:45', video: ranthambore1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { title: 'Tadoba March', type: 'Client Case Studies', duration: '01:45', video: tadoba1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  // Micro Drama Series
  { title: 'Animation Story', type: 'Micro Drama Series', duration: '03:20', video: animation1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  // Social Media Vertical Content
  { title: 'Hadaza Reel', type: 'Social Media Vertical Content', duration: '00:15', video: hadaza1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { title: 'Realistic Vertical', type: 'Social Media Vertical Content', duration: '00:30', video: realistic1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  // VFX Content
  { title: 'Campus Shoes', type: 'VFX Content', duration: '01:12', video: campus1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { title: 'Fast Paced Ad', type: 'VFX Content', duration: '00:40', video: fastPaced1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  { title: 'Rare Rabbit AI Model', type: 'VFX Content', duration: '00:25', video: rareRabbit1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
  // YouTube Video
  { title: 'Golden Matrimonial', type: 'YouTube Video', duration: '00:58', video: yt1, desc: 'A showcase of AI-crafted stories, films and experiences.' },
];

function VideoCard({ p, index, onPlayFullscreen }: { p: typeof projects[0], index: number, onPlayFullscreen: (videoUrl: string) => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      
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
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-[24px] overflow-hidden border border-[var(--site-border)] hover:border-[#CCFF00]/50 transition-colors cursor-pointer"
      onClick={() => onPlayFullscreen(p.video)}
    >
      <div className="aspect-[4/5] overflow-hidden bg-[#05050A]">
        <video
          ref={videoRef}
          src={p.video}
          muted={isMuted}
          playsInline
          loop={false}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/20 to-transparent pointer-events-none" />

      {/* Hover overlay with Mute button */}
      <div className={`absolute top-4 right-4 transition-opacity duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(!isMuted);
          }}
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-[#CCFF00] hover:bg-black/70 transition-colors"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>

      {/* Center play icon on hover to indicate clickability */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
          <Play size={22} className="text-white fill-white ml-1" />
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
        <h3 className="text-[22px] font-semibold text-white">{p.title}</h3>
        <div className="flex items-center justify-between text-[13px] text-gray-300 mt-1">
          <span>{p.type}</span>
          <span>{p.duration}</span>
        </div>
      </div>
    </motion.article>
  );
}

function WorkPage() {
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);

  return (
    <PageShell
      index="02"
      eyebrow="Work"
      title="Where ideas"
      accent="come alive."
      intro="A showcase of AI-crafted stories, films and experiences built for brands that want to move first."
    >
      <Section>
        <div className="flex flex-col gap-24">
          {[
            'Showreel / Brand Films',
            'Client Case Studies',
            'Micro Drama Series',
            'Social Media Vertical Content',
            'YouTube Video',
            'VFX Content'
          ].map((category) => {
            const categoryProjects = projects.filter(p => p.type === category);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={category} className="flex flex-col gap-8">
                <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--site-fg)] tracking-[-0.04em] pb-4 border-b border-[var(--site-border)]">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryProjects.map((p, i) => (
                    <VideoCard key={p.title} p={p} index={i} onPlayFullscreen={setFullscreenVideo} />
                  ))}
                </div>
              </div>
            );
          })}

          <div className="rounded-[24px] border border-dashed border-[var(--site-border)] p-12 flex flex-col justify-center items-center gap-6 text-center bg-[var(--site-bg)]/50 mt-12">
            <h2 className="text-[32px] font-semibold leading-tight text-[var(--site-fg)]">Your story could be next.</h2>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-[#CCFF00] font-semibold text-[15px] hover:bg-[#CCFF00] hover:text-[var(--site-fg)] transition-colors">
              Brief us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>

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
    </PageShell>
  );
}
