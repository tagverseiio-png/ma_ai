import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { PageShell, Section } from '@/components/site/PageShell';
import workNightDrive from '@/assets/work-night-drive.jpg';
import workZeroGravity from '@/assets/work-zero-gravity.jpg';
import workColors from '@/assets/work-colors.jpg';
import workBeyondEarth from '@/assets/work-beyond-earth.jpg';
import workTomorrow from '@/assets/work-tomorrow.jpg';

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
  { title: 'Night Drive', type: 'Showreel / Brand Films', duration: '00:52', image: workNightDrive },
  { title: 'Colors of Imagination', type: 'Showreel / Brand Films', duration: '01:28', image: workColors },
  { title: 'Echoes of Time', type: 'Showreel / Brand Films', duration: '02:15', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // Client Case Studies
  { title: 'Zero Gravity', type: 'Client Case Studies', duration: '00:45', image: workZeroGravity },
  { title: 'Global Connect', type: 'Client Case Studies', duration: '01:10', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Future Retail', type: 'Client Case Studies', duration: '01:45', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // Micro Drama Series
  { title: 'The Last Passenger', type: 'Micro Drama Series', duration: '03:20', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Neon Shadows', type: 'Micro Drama Series', duration: '04:15', image: 'https://images.unsplash.com/photo-1604085572502-a39c44569eeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Silent Words', type: 'Micro Drama Series', duration: '02:55', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // Social Media Vertical Content
  { title: 'Summer Drop', type: 'Social Media Vertical Content', duration: '00:15', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Tech Review #01', type: 'Social Media Vertical Content', duration: '00:30', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Behind the Scenes', type: 'Social Media Vertical Content', duration: '00:45', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // YouTube Video
  { title: 'The New Tomorrow', type: 'YouTube Video', duration: '00:58', image: workTomorrow },
  { title: 'AI in 2026', type: 'YouTube Video', duration: '12:30', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Designing for the Future', type: 'YouTube Video', duration: '08:45', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  // VFX Content
  { title: 'Beyond Earth', type: 'VFX Content', duration: '01:12', image: workBeyondEarth },
  { title: 'City of Glass', type: 'VFX Content', duration: '00:40', image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Liquid Metal', type: 'VFX Content', duration: '00:25', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

function WorkPage() {
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
          ].map((category, catIndex) => {
            const categoryProjects = projects.filter(p => p.type === category);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={category} className="flex flex-col gap-8">
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#111111] tracking-[-0.04em] pb-4 border-b border-black/10">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProjects.map((p, i) => (
                    <motion.article
                      key={p.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.6 }}
                      className="group relative rounded-[24px] overflow-hidden border border-black/10 hover:border-[#CCFF00]/50 transition-colors"
                    >
                      <div className="aspect-[4/5] overflow-hidden">
                        <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/20 to-transparent" />
                      <Link to="/contact" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" aria-label={`Enquire about ${p.title}`}>
                        <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-black/10 flex items-center justify-center">
                          <Play size={22} className="text-[#111111] fill-white ml-1" />
                        </span>
                      </Link>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-[22px] font-semibold text-white">{p.title}</h3>
                        <div className="flex items-center justify-between text-[13px] text-gray-300 mt-1">
                          <span>{p.type}</span>
                          <span>{p.duration}</span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="rounded-[24px] border border-dashed border-black/10 p-12 flex flex-col justify-center items-center gap-6 text-center bg-[#F4F4F0]/50 mt-12">
            <h2 className="text-[32px] font-semibold leading-tight text-[#111111]">Your story could be next.</h2>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-[#CCFF00] font-semibold text-[15px] hover:bg-[#CCFF00] hover:text-[#111111] transition-colors">
              Brief us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
