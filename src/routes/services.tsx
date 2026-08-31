import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Palette, Code2, Database, Sparkles } from 'lucide-react';
import { PageShell, Section } from '@/components/site/PageShell';
import { fadeInUp } from '@/components/site/SiteChrome';

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Services — AI Strategy, Design & Engineering | ma.ai' },
      { name: 'description', content: 'AI strategy, product design, engineering, data intelligence and brand experience — the capabilities ma.ai uses to turn ideas into intelligent experiences.' },
      { property: 'og:title', content: 'Services — AI Strategy, Design & Engineering | ma.ai' },
      { property: 'og:description', content: 'AI strategy, product design, engineering, data intelligence and brand experience from ma.ai.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Brain, title: 'AI Strategy', desc: 'Opportunity mapping, use-case prioritisation and roadmaps that tie AI investment to measurable business outcomes.', points: ['Readiness audit', 'Use-case scoring', 'Adoption roadmap'] },
  { icon: Palette, title: 'Product Design', desc: 'Interfaces designed around human behaviour, so intelligent systems feel calm, clear and genuinely usable.', points: ['Research & discovery', 'Design systems', 'Prototyping'] },
  { icon: Code2, title: 'Engineering', desc: 'Production-grade builds — model integration, evaluation harnesses and infrastructure that scales safely.', points: ['LLM pipelines', 'Evals & guardrails', 'Cloud delivery'] },
  { icon: Database, title: 'Data & Intelligence', desc: 'Turning fragmented data into decision-ready signal, with governance baked in from day one.', points: ['Data foundations', 'RAG & retrieval', 'Analytics'] },
  { icon: Sparkles, title: 'Brand & Experience', desc: 'Films, campaigns and content produced with generative tooling, without losing the human craft.', points: ['Brand films', 'Campaigns', 'AI avatars'] },
];

function ServicesPage() {
  return (
    <PageShell
      index="01"
      eyebrow="Services"
      title="Capabilities that ship"
      accent="real outcomes."
      intro="Five practices, one team. We plug in where you need us — from first strategy workshop to a system running in production."
    >
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="glass-card rounded-[24px] p-8 hover:border-[#CCFF00]/40 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl text-[#111111] flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(79,70,229,0.35)]">
                <s.icon size={24} className="text-[#111111]" />
              </div>
              <h2 className="text-[24px] font-semibold mb-3">{s.title}</h2>
              <p className="text-gray-600 font-light leading-[1.6] mb-6">{s.desc}</p>
              <ul className="space-y-2 text-[14px] text-gray-600">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-[24px] p-8 text-[#111111] flex flex-col justify-between">
            <div>
              <h2 className="text-[26px] font-semibold mb-3">Not sure where to start?</h2>
              <p className="text-[#111111]/80 font-light leading-[1.6]">Book a 30-minute discovery call and we will map the fastest path to value.</p>
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-[#111111] font-semibold text-[15px] w-fit hover:bg-white/90 transition-colors">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageShell>
  );
}
