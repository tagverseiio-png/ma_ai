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
  { title: 'Night Drive', type: 'Brand Film', duration: '00:52', image: workNightDrive },
  { title: 'Zero Gravity', type: 'Campaign Film', duration: '00:45', image: workZeroGravity },
  { title: 'Colors of Imagination', type: 'Brand Film', duration: '01:28', image: workColors },
  { title: 'Beyond Earth', type: 'Concept Film', duration: '01:12', image: workBeyondEarth },
  { title: 'The New Tomorrow', type: 'Explainer', duration: '00:58', image: workTomorrow },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative rounded-[24px] overflow-hidden border border-white/10 hover:border-[#8B5CF6]/50 transition-colors"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/20 to-transparent" />
              <Link to="/contact" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" aria-label={`Enquire about ${p.title}`}>
                <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                  <Play size={22} className="text-white fill-white ml-1" />
                </span>
              </Link>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-[22px] font-semibold">{p.title}</h2>
                <div className="flex items-center justify-between text-[13px] text-gray-400 mt-1">
                  <span>{p.type}</span>
                  <span>{p.duration}</span>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="rounded-[24px] border border-dashed border-white/15 p-8 flex flex-col justify-center items-start gap-6">
            <h2 className="text-[26px] font-semibold leading-tight">Your story<br />could be next.</h2>
            <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#4F46E5] text-white font-semibold text-[15px] hover:bg-[#4338CA] transition-colors">
              Brief us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
