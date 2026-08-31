import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { PageShell, Section } from '@/components/site/PageShell';

export const Route = createFileRoute('/careers')({
  head: () => ({
    meta: [
      { title: 'Careers — Build AI with purpose at ma.ai' },
      { name: 'description', content: 'Open roles at ma.ai for engineers, designers, strategists and producers who want to ship AI that people actually use.' },
      { property: 'og:title', content: 'Careers — Build AI with purpose at ma.ai' },
      { property: 'og:description', content: 'Open roles for engineers, designers, strategists and producers at ma.ai.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { title: 'Senior AI Engineer', team: 'Engineering', location: 'Chennai / Remote', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', location: 'Chennai / Remote', type: 'Full-time' },
  { title: 'AI Strategy Consultant', team: 'Strategy', location: 'Remote (IN / EU)', type: 'Full-time' },
  { title: 'Generative Film Producer', team: 'Studio', location: 'Chennai', type: 'Full-time' },
  { title: 'Data Engineer', team: 'Engineering', location: 'Remote', type: 'Contract' },
];

const perks = [
  { title: 'Remote-first', desc: 'Work from where you think best. We meet in person four times a year.' },
  { title: 'Learning budget', desc: 'An annual allowance for courses, conferences, compute and books.' },
  { title: 'Real ownership', desc: 'Small teams, direct client contact and your name on the work.' },
];

function CareersPage() {
  return (
    <PageShell
      index="05"
      eyebrow="Careers"
      title="Different minds."
      accent="One shared purpose."
      intro="We hire for curiosity and craft. If you want to build AI that holds up outside a demo, we should talk."
    >
      <Section>
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-10">Open roles</h2>
        <div className="space-y-4">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-[20px] border border-black/10 hover:border-[#CCFF00]/50 transition-colors p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-[22px] font-semibold mb-2">{r.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-[13px] text-gray-600">
                  <span className="text-[#111111]">{r.team}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {r.location}</span>
                  <span>{r.type}</span>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 font-semibold text-[14px] hover:bg-white hover:text-black transition-all w-fit">
                Apply <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-10">How we work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="glass-card rounded-[22px] p-8">
              <h3 className="text-[20px] font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-600 font-light leading-[1.6]">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
