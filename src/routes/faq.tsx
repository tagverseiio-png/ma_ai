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
    question: 'What does ma.ai do?',
    answer: 'We are a strategy, design, and engineering studio that builds AI-powered products, brand experiences, and intelligent campaigns for ambitious companies.',
  },
  {
    question: 'Who do you typically work with?',
    answer: 'We partner with startups, scale-ups, and enterprise teams who want to turn complex ideas into simple, human-centred digital experiences.',
  },
  {
    question: 'How do your projects usually start?',
    answer: 'Most engagements begin with a discovery phase where we understand your goals, users, and constraints. From there we propose a tailored approach, timeline, and team.',
  },
  {
    question: 'What services do you offer?',
    answer: 'Our services span AI strategy, product design, software engineering, data intelligence, and brand experience — often combined into end-to-end delivery.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes. While our studio is based in Chennai, India, we work with clients across time zones and have processes in place for remote collaboration.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines vary based on scope. A focused discovery or prototype may take a few weeks, while a full product build can span several months. We define this clearly during scoping.',
  },
  {
    question: 'How can I join the team?',
    answer: 'Visit our Careers page to see open roles. If you do not see a perfect fit, you can still send your portfolio to hello@ma.ai — we are always looking for curious people.',
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
              className="border-b border-black/10 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg md:text-xl font-semibold text-[#111111] group-hover:text-[#111111] transition-colors">
                  {faq.question}
                </span>
                <span className="shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-[#111111] group-hover:border-[#CCFF00] group-hover:text-[#111111] transition-colors mt-1">
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
                  <p className="pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </PageShell>
  );
}
