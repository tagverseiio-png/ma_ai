import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { PageShell, Section } from '@/components/site/PageShell';
import { fadeInUp, staggerContainer } from '@/components/site/SiteChrome';

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { title: 'FAQs — ma.ai' },
      { name: 'description', content: 'Frequently asked questions about ma.ai, our services, and how we work with clients.' },
      { property: 'og:title', content: 'FAQs — ma.ai' },
      { property: 'og:description', content: 'Frequently asked questions about ma.ai, our services, and how we work with clients.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    question: 'How fast is fast?',
    answer: 'Short-form performance creative: 3–5 days. A full brand film: 2–3 weeks. Rush timelines exist and we\'ll tell you honestly what they cost.',
  },
  {
    question: 'Will it look AI-generated?',
    answer: 'Not if we\'ve done our job. The generation is one step of a pipeline that also includes direction, retouching, grade and sound. That\'s where the realism actually comes from.',
  },
  {
    question: 'Do you shoot real footage too?',
    answer: 'Yes. We\'re not precious about the method. We pick whatever gets the best result for the budget.',
  },
  {
    question: 'Can we use the work in paid ads?',
    answer: 'Yes. Everything ships with commercial usage rights. We\'ll flag anything with limitations before we make it.',
  },
  {
    question: 'Do we have to take all four services?',
    answer: 'No. Plenty of clients start with video only. The services compound when combined, but they stand alone.',
  },
];

function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageShell
      index="10"
      eyebrow="Support"
      title="Frequently"
      accent="Asked Questions"
      intro="Quick answers to common questions. If you need more help, reach out and we will get back to you."
    >
      <Section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-[900px] mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border-b border-[var(--site-border)] last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg md:text-xl font-semibold text-[var(--site-fg)] group-hover:text-[var(--site-fg)] transition-colors">
                  {faq.question}
                </span>
                <span className="shrink-0 w-8 h-8 rounded-full border border-[var(--site-border)] flex items-center justify-center text-[var(--site-fg)] group-hover:border-[#8B5CF6] group-hover:text-[var(--site-fg)] transition-colors mt-1">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-[var(--site-muted)] leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </PageShell>
  );
}
