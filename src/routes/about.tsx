import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Globe, ShieldCheck } from 'lucide-react';
import { PageShell, Section } from '@/components/site/PageShell';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import storySphere from '@/assets/story-sphere.png';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About — The minds behind ma.ai' },
      { name: 'description', content: 'ma.ai is a team of strategists, creators and engineers building AI with purpose. Meet the people and the principles behind the work.' },
      { property: 'og:title', content: 'About — The minds behind ma.ai' },
      { property: 'og:description', content: 'A team of strategists, creators and engineers building AI with purpose.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: 'Souvik Seal', role: 'CEO', desc: 'Leads with vision. Drives with precision.', image: team1 },
  { name: 'Prarthana Chabbria', role: 'Co-Founder', desc: 'Turns ideas into strategy and strategy into execution.', image: team2 },
  { name: 'Meena Chabbria', role: 'Founder', desc: 'The architect of ma.ai. Guided by purpose, driven by conviction.', image: team3 },
];

const values = [
  { icon: Users, title: 'Human-centred', desc: 'Technology starts with people. Adoption is designed, not assumed.' },
  { icon: Target, title: 'Outcome-first', desc: 'We start with the end in mind and build what drives measurable impact.' },
  { icon: Globe, title: 'Globally fluent', desc: '40+ languages. Cross-cultural teams. One global standard.' },
  { icon: ShieldCheck, title: 'Responsibly delivered', desc: 'Ethical by design. Secure by default. Governance built in.' },
];

function AboutPage() {
  return (
    <PageShell
      index="03"
      eyebrow="About"
      title="From ma to maa —"
      accent="space, care, presence."
      intro="ma.ai was built on a simple belief: intelligent systems should give people room, and be present exactly when needed."
    >
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-[28px] sm:text-[40px] md:text-[52px] font-bold leading-[1.1] mb-6">The ma.ai story</h2>
            <p className="text-gray-400 font-light leading-[1.7] text-[17px] mb-6">
              We started as a small group of strategists and engineers frustrated by AI projects that demoed well and shipped badly.
              So we built a studio around the missing half: adoption, craft and governance.
            </p>
            <p className="text-gray-400 font-light leading-[1.7] text-[17px] mb-10">
              Today we partner with ambitious brands across five continents — designing, building and delivering AI experiences that hold up in production.
            </p>
            <Link to="/careers" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/25 hover:bg-white hover:text-black transition-all font-semibold text-[15px]">
              Join the team <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.img
            src={storySphere}
            alt="ma.ai intelligence sphere"
            loading="lazy"
            animate={{ y: [-12, 12, -12] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            className="w-full max-w-[460px] mx-auto"
          />
        </div>
      </Section>

      <Section>
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-12">What we stand for</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card rounded-[22px] p-7">
              <v.icon size={28} className="text-[#8B5CF6] mb-6" />
              <h3 className="text-[20px] font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-400 font-light text-[15px] leading-[1.6]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-12">The minds behind ma.ai</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-[24px] overflow-hidden border border-white/10 group">
              <div className="h-[380px] overflow-hidden relative bg-[#0B0D16]">
                <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover object-top grayscale opacity-75 group-hover:opacity-100 group-hover:grayscale-[20%] group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-[22px] font-semibold">{m.name}</h3>
                <p className="text-[#8B5CF6] text-[14px] mb-3">{m.role}</p>
                <p className="text-gray-400 font-light text-[14px] leading-[1.6]">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
