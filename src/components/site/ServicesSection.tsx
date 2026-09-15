import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { fadeInUp, SectionEyebrow } from "@/components/site/SiteChrome";

// Accent is the site-wide #8B5CF6 used across the hero, story and works sections.
// Tailwind resolves arbitrary colours at build time from the literal class string,
// so the hex is written inline rather than interpolated from a constant.

// Matches the site-wide easing used in SiteChrome's fadeInUp.
const EASE = [0.16, 1, 0.3, 1] as const;

interface Service {
  id: string;
  name: string;
  desc: string;
  detail: [string, string, string];
}

const services: Service[] = [
  {
    id: "01",
    name: "AI Video Production",
    desc: "Photoreal film made with generative pipelines — story first, then shot list, then generation, then a proper grade and sound pass.",
    detail: [
      "Brand films, product launches & performance ads",
      "UGC-style creative at scale",
      "Delivered in every ratio with source files & captions",
    ],
  },
  {
    id: "02",
    name: "Video Production",
    desc: "Real cameras, real crew — with AI for set extensions, impossible angles and the reshoot you'd otherwise fly back for.",
    detail: [
      "Concept, script, storyboard & direction",
      "Edit, colour, sound design & VFX",
      "Versioning and localisation",
    ],
  },
  {
    id: "03",
    name: "Performance Marketing",
    desc: "Our media team runs the same assets they helped brief — creative and media decisions made in one conversation, not two agencies.",
    detail: [
      "Meta, Google, YouTube & TikTok",
      "Full-funnel from prospecting to retention",
      "Weekly reporting that says what to do next",
    ],
  },
  {
    id: "04",
    name: "Social Media Management",
    desc: "Always-on presence run by people who can also make the asset. If Tuesday's comments spark an idea, the video exists Wednesday.",
    detail: [
      "Channel strategy, calendars & scripting",
      "Daily publishing & community management",
      "Creator coordination & trend monitoring",
    ],
  },
];

const ServiceCard = ({ service, index }: { service: Service, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: EASE }}
      className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-[24px] border p-6 sm:p-8 transition-all duration-500 hover:border-[#8B5CF6] hover:shadow-2xl"
      style={{
        borderColor: 'var(--services-border)',
        backgroundColor: 'var(--services-bg)',
      }}
    >
      {/* Background glow on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#8B5CF6]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div>
        <div className="mb-6 flex items-center justify-between">
          <span
            className="font-bold tabular-nums tracking-[0.2em] text-[14px] transition-colors duration-300 group-hover:text-[#8B5CF6]"
            style={{ color: 'var(--services-id-dim)' }}
          >
            {service.id}
          </span>
          <Link
            to="/contact"
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 group-hover:border-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-[#111111]"
            style={{ borderColor: 'var(--services-border)', color: 'var(--services-text-muted)' }}
          >
            <ArrowRight size={16} className="-rotate-45 transition-transform duration-500 group-hover:rotate-0" />
          </Link>
        </div>

        <h3
          className="mb-4 text-[24px] font-bold leading-[1.1] tracking-[-0.03em] transition-colors duration-300 sm:text-[28px]"
          style={{ color: 'var(--services-text)' }}
        >
          {service.name}
        </h3>

        <p
          className="mb-8 text-[16px] font-normal leading-[1.6] sm:text-[17px]"
          style={{ color: 'var(--services-text-muted)' }}
        >
          {service.desc}
        </p>
      </div>

      <ul className="grid gap-3 border-t pt-6" style={{ borderColor: 'var(--services-border)' }}>
        {service.detail.map((d) => (
          <li
            key={d}
            className="flex items-start gap-3 text-[15px] leading-[1.5] sm:text-[16px]"
            style={{ color: 'var(--services-text-secondary)' }}
          >
            <span
              aria-hidden="true"
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5CF6]"
            />
            {d}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        backgroundColor: 'var(--services-bg)',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'var(--services-border)',
      }}
    >
      {/* Ambient accent glows, matching the restrained treatment on the story section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[20%] right-[-10%] h-[620px] w-[620px] rounded-full blur-[170px]"
        style={{ backgroundColor: 'var(--services-accent-glow-1)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25%] left-[-15%] h-[560px] w-[560px] rounded-full blur-[170px]"
        style={{ backgroundColor: 'var(--services-accent-glow-2)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="flex flex-col items-start text-left">
            <SectionEyebrow>05 / Services</SectionEyebrow>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-[900px] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-[0.9] tracking-[-0.04em]"
              style={{ color: 'var(--services-text)' }}
            >
              Built around
              <br />
              what matters.
            </motion.h2>
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-[400px] text-[16px] font-normal leading-[1.6] md:mt-24 md:text-[17px]"
            style={{ color: 'var(--services-text-muted)' }}
          >
            From strategy to implementation, we bring AI into the places where it can create real
            value — helping teams work smarter, communicate better, and turn ideas into everyday
            impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
            />
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-10 md:flex-row md:items-center md:pt-14">
          <p
            className="max-w-[440px] text-[15px] font-normal leading-[1.6]"
            style={{ color: 'var(--services-text-muted)' }}
          >
            Every engagement starts with the same question: where will this actually make a
            difference?
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-[40px] border-[1.5px] px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors hover:border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-[#111111]"
            style={{ borderColor: 'var(--services-border)', color: 'var(--services-text)' }}
          >
            All capabilities
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// ─── Home FAQ Section ────────────────────────────────────────────────────────

const homeFaqs = [
  {
    question: 'What does MA AI Studio do?',
    answer: 'We combine AI, creativity, and strategy to create high-quality visual and digital content for brands — from concepts and campaigns to social media and advertising assets.',
  },
  {
    question: 'How does AI fit into your creative process?',
    answer: 'AI helps us move faster, explore more ideas, and bring concepts to life. We use it as a creative tool, while strategy, storytelling, and the final creative direction remain human-led.',
  },
  {
    question: 'Can you work with our existing brand identity?',
    answer: 'Absolutely. We work within your brand guidelines, visual language, tone, and objectives to make sure the content feels consistent with your brand.',
  },
  {
    question: 'Can you create content for both social media and advertising?',
    answer: 'Yes. We create content designed for organic social, paid campaigns, digital platforms, and other brand communication needs, depending on the campaign objective.',
  },
];

export const HomeFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        backgroundColor: 'var(--services-bg)',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'var(--services-border)',
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[160px]"
        style={{ backgroundColor: 'var(--services-accent-glow-2)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col gap-4">
          <SectionEyebrow>06 / FAQ</SectionEyebrow>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-[40px] sm:text-[52px] md:text-[64px] font-bold leading-[0.95] tracking-[-0.04em]"
            style={{ color: 'var(--services-text)' }}
          >
            Quick answers.
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="max-w-[860px]">
          {homeFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5, ease: EASE }}
              className="border-b"
              style={{ borderColor: 'var(--services-border)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="group w-full py-6 flex items-start justify-between gap-6 text-left"
              >
                <span
                  className="text-[17px] sm:text-[19px] font-semibold leading-[1.3] transition-colors duration-300 group-hover:text-[#8B5CF6]"
                  style={{ color: 'var(--services-text)' }}
                >
                  {faq.question}
                </span>
                <span
                  className="shrink-0 mt-1 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-[#8B5CF6] group-hover:text-[#8B5CF6]"
                  style={{ borderColor: 'var(--services-border)', color: 'var(--services-text-muted)' }}
                >
                  {openIndex === index ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p
                    className="pb-6 text-[16px] leading-[1.7]"
                    style={{ color: 'var(--services-text-muted)' }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
