import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PageShell, Section } from '@/components/site/PageShell';

export const Route = createFileRoute('/insights')({
  head: () => ({
    meta: [
      { title: 'Insights — Notes on applied AI | ma.ai' },
      { name: 'description', content: 'Essays, case notes and field reports from the ma.ai team on shipping AI products that people actually adopt.' },
      { property: 'og:title', content: 'Insights — Notes on applied AI | ma.ai' },
      { property: 'og:description', content: 'Essays and field reports on shipping AI products people actually adopt.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: InsightsPage,
});

const posts = [
  { tag: 'Strategy', date: 'Aug 2026', title: 'The adoption gap is the real AI problem', excerpt: 'Most AI pilots do not fail on model quality. They fail because nobody designed the moment a human has to trust the output.', read: '6 min' },
  { tag: 'Engineering', date: 'Jul 2026', title: 'Evals before features', excerpt: 'A practical harness for measuring an LLM feature before you ship it, and why the effort pays back inside two sprints.', read: '9 min' },
  { tag: 'Design', date: 'Jun 2026', title: 'Designing for uncertainty', excerpt: 'Interface patterns that communicate confidence, provenance and fallback without burying the user in caveats.', read: '5 min' },
  { tag: 'Craft', date: 'May 2026', title: 'What generative film production actually costs', excerpt: 'A candid breakdown of the pipeline behind a 60-second brand film, from prompt boards to final grade.', read: '8 min' },
  { tag: 'Governance', date: 'Apr 2026', title: 'Responsible by default, not by review', excerpt: 'Moving governance out of the sign-off meeting and into the build pipeline where it can hold.', read: '7 min' },
  { tag: 'Data', date: 'Mar 2026', title: 'Retrieval is a product decision', excerpt: 'Why the shape of your retrieval layer defines what your assistant can honestly promise to a user.', read: '6 min' },
];

function InsightsPage() {
  return (
    <PageShell
      index="04"
      eyebrow="Insights"
      title="Notes from"
      accent="the build."
      intro="What we are learning while shipping AI into the real world — written by the people doing the work."
    >
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="glass-card rounded-[24px] p-8 flex flex-col hover:border-[#CCFF00]/40 transition-colors group"
            >
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-gray-700 mb-6">
                <span className="text-[#111111]">{p.tag}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>{p.date}</span>
              </div>
              <h2 className="text-[22px] font-semibold leading-snug mb-4">{p.title}</h2>
              <p className="text-gray-600 font-light text-[15px] leading-[1.65] mb-8">{p.excerpt}</p>
              <div className="mt-auto flex items-center justify-between text-[13px] text-gray-700">
                <span>{p.read} read</span>
                <ArrowRight size={16} className="text-[#111111] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 rounded-[24px] border border-black/10 p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-[#111111]">
          <div>
            <h2 className="text-[26px] font-semibold mb-2">Want these in your inbox?</h2>
            <p className="text-gray-600 font-light">One considered email a month. No noise.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#CCFF00] font-semibold text-[15px] hover:bg-[#CCFF00] hover:text-[#111111] transition-colors">
            Subscribe <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
