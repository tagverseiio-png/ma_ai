import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Plus } from "lucide-react";
import { fadeInUp } from "@/components/site/SiteChrome";

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
    name: "Generative AI",
    desc: "Custom GenAI agents, copilots and knowledge systems, built around your workflows and your data.",
    detail: [
      "Agent and copilot design",
      "Retrieval over your own data",
      "Workflow integration and evals",
    ],
  },
  {
    id: "02",
    name: "Change Management via AI Video",
    desc: "Personalised AI video that turns change communication into something people actually watch, at scale and in any language.",
    detail: [
      "Personalised video at scale",
      "Multi-language delivery",
      "Comms for rollouts and migrations",
    ],
  },
  {
    id: "03",
    name: "Adoption",
    desc: "Programs that turn AI pilots into everyday habits, built around behaviour change and measurable ROI.",
    detail: ["Pilot-to-production planning", "Behaviour change design", "ROI measurement"],
  },
  {
    id: "04",
    name: "Training",
    desc: "Role-based programs that build genuine AI fluency, from frontline teams to the boardroom.",
    detail: ["Role-based curricula", "Hands-on practice sessions", "Leadership briefings"],
  },
  {
    id: "05",
    name: "Sales",
    desc: "AI-augmented playbooks that help revenue teams research, personalise and close faster.",
    detail: ["Account research", "Personalised outreach", "Pipeline and follow-up support"],
  },
  {
    id: "06",
    name: "Internal Teams",
    desc: "Workflow redesign and custom copilots for Finance, Legal, IT, Operations and more.",
    detail: ["Workflow mapping", "Function-specific copilots", "Process redesign"],
  },
  {
    id: "07",
    name: "HR",
    desc: "AI embedded into the employee experience, responsibly and at scale.",
    detail: [
      "Employee-facing assistants",
      "Responsible-use guardrails",
      "Hiring and onboarding support",
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-10 flex items-center gap-3"
            >
              <div aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
              <span
                className="text-[12px] font-bold uppercase tracking-[0.1em] md:text-[13px]"
                style={{ color: 'var(--services-text)' }}
              >
                06 / Services
              </span>
            </motion.div>

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
            to="/services"
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
