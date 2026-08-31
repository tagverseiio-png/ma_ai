import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Plus } from "lucide-react";
import { fadeInUp } from "@/components/site/SiteChrome";

// Accent is the site-wide #CCFF00 used across the hero, story and works sections.
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

interface RowProps {
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  reduceMotion: boolean;
}

const ServiceRow = ({ service, index, isOpen, onToggle, reduceMotion }: RowProps) => {
  const panelId = `service-panel-${service.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: EASE }}
      style={{ borderBottomColor: 'var(--services-border)' }}
      className="border-b"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group relative grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-4 gap-y-3 py-7 text-left focus-visible:outline-none md:grid-cols-[56px_minmax(0,0.85fr)_minmax(0,1fr)_auto] md:gap-x-10 md:gap-y-0 md:py-9"
      >
        {/* Hover / open wash — bleeds into the container gutter, clipped by the section */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 -inset-x-5 -z-10 bg-gradient-to-r to-transparent transition-opacity duration-500 md:-inset-x-8 ${
            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, var(--services-wash-from), var(--services-wash-via), transparent)`,
          }}
        />
        {/* Accent bar revealed on hover / open */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-[-20px] top-1/2 w-[2px] -translate-y-1/2 bg-[#CCFF00] transition-all duration-500 md:left-[-32px] ${
            isOpen ? "h-[55%]" : "h-0 group-hover:h-[55%]"
          }`}
        />
        {/* Focus ring lives on a child so it traces the full row, gutter included */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 -inset-x-3 -z-10 rounded-[14px] ring-1 ring-inset ring-[#CCFF00]/70 opacity-0 group-focus-visible:opacity-100`}
        />

        <span
          className={`col-start-1 row-start-1 font-bold tabular-nums tracking-[0.2em] text-[12px] transition-colors duration-300 md:text-[13px] ${
            isOpen ? `text-[#CCFF00]` : `group-hover:text-[#CCFF00]`
          }`}
          style={!isOpen ? { color: 'var(--services-id-dim)' } : undefined}
        >
          {service.id}
        </span>

        <h3
          className="col-start-2 row-start-1 text-[24px] font-bold leading-[1.08] tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1 sm:text-[30px] md:text-[34px] lg:text-[38px]"
          style={{ color: 'var(--services-text)' }}
        >
          {service.name}
        </h3>

        <p
          className="col-start-2 row-start-2 max-w-[520px] text-[14px] font-normal leading-[1.6] transition-colors duration-300 md:col-start-3 md:row-start-1 md:text-[15px]"
          style={{ color: 'var(--services-text-muted)' }}
        >
          {service.desc}
        </p>

        <span
          aria-hidden="true"
          className={`col-start-3 row-start-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 md:col-start-4 ${
            isOpen
              ? `border-[#CCFF00] bg-[#CCFF00] text-[#111111]`
              : `group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-[#111111]`
          }`}
          style={
            !isOpen
              ? { borderColor: 'var(--services-border)', color: 'var(--services-text-muted)' }
              : undefined
          }
        >
          <Plus
            size={18}
            className={`transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="glass-card mb-8 rounded-[20px] p-6 md:mb-9 md:p-8">
              <div className="grid gap-x-10 gap-y-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <ul className="grid gap-3 sm:grid-cols-3 md:gap-6">
                  {service.detail.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-[14px] leading-[1.5]"
                      style={{ color: 'var(--services-text-secondary)' }}
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#CCFF00]`}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`group/cta inline-flex w-fit shrink-0 items-center gap-3 rounded-full border px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] transition-colors hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-[#111111]`}
                  style={{ borderColor: 'var(--services-border)', color: 'var(--services-text)' }}
                >
                  Discuss this{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover/cta:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 md:py-40"
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
              <div aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#CCFF00]" />
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
              className="max-w-[900px] text-[44px] font-bold leading-[0.9] tracking-[-0.05em] sm:text-[60px] md:text-[76px] lg:text-[88px]"
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

        <div style={{ borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: 'var(--services-border)' }}>
          {services.map((service, i) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={i}
              isOpen={openId === service.id}
              onToggle={() => setOpenId((prev) => (prev === service.id ? null : service.id))}
              reduceMotion={reduceMotion}
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
            className="group inline-flex items-center gap-3 rounded-[40px] border-[1.5px] px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-[#111111]"
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
