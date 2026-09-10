import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Check } from 'lucide-react';
import { PageShell, Section } from '@/components/site/PageShell';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact — Start a conversation with ma.ai' },
      { name: 'description', content: 'Tell us about your idea. The ma.ai team in Chennai replies to every brief within two working days.' },
      { property: 'og:title', content: 'Contact — Start a conversation with ma.ai' },
      { property: 'og:description', content: 'Tell us about your idea. We reply to every brief within two working days.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell
      index="06"
      eyebrow="Contact"
      title={<>You bring the <span className="text-[#7C3AED]">Idea.</span></>}
      accent={<>We bring it to <span className="text-[#7C3AED]">Life.</span></>}
      intro="Tell us what you are trying to build. We read every message and reply within two working days."
    >
      <Section>
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass-card rounded-[24px] p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Your name" id="name" placeholder="Jane Doe" />
              <Field label="Work email" id="email" type="email" placeholder="jane@company.com" />
              <Field label="Company" id="company" placeholder="Company name" />
              <Field label="Budget range" id="budget" placeholder="e.g. $25k – $50k" required={false} />
            </div>
            <div className="mt-6">
              <label htmlFor="brief" className="block text-[13px] text-[var(--site-muted)] mb-2">What are you building?</label>
              <textarea
                id="brief"
                required
                rows={5}
                placeholder="A short brief — the problem, who it is for, and where you are today."
                className="w-full rounded-2xl bg-[var(--site-surface)]/5 border border-[var(--site-border)] px-5 py-4 text-[15px] text-[var(--site-fg)] placeholder:text-[var(--site-muted)] focus:outline-none focus:border-[#8B5CF6] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#8B5CF6] font-semibold text-[15px] hover:bg-[#8B5CF6] hover:text-[var(--site-fg)] transition-colors shadow-[0_0_30px_rgba(79,70,229,0.35)]"
            >
              {sent ? (<>Message received <Check size={18} /></>) : (<>Send the brief <ArrowRight size={18} /></>)}
            </button>
            {sent && (
              <p className="mt-4 text-[14px] text-[var(--site-fg)]">Thanks — we will get back to you at the email above within two working days.</p>
            )}
          </motion.form>

          <div className="space-y-4">
            <ContactCard
              icon={Mail}
              label="Team Emails"
              value={
                <div className="flex flex-col gap-1 mt-1 text-[13.5px]">
                  <a href="mailto:meena.chabbria@maonline.ai" className="hover:text-[var(--site-muted)] transition-colors">meena.chabbria@maonline.ai</a>
                  <a href="mailto:prarthana.chabbria@maonline.ai" className="hover:text-[var(--site-muted)] transition-colors">prarthana.chabbria@maonline.ai</a>
                  <a href="mailto:vinay.sakhrani@maonline.ai" className="hover:text-[var(--site-muted)] transition-colors">vinay.sakhrani@maonline.ai</a>
                  <a href="mailto:souvik.seal@maonline.ai" className="hover:text-[var(--site-muted)] transition-colors">souvik.seal@maonline.ai</a>
                  <a href="mailto:harsh.gulwani@maonline.ai" className="hover:text-[var(--site-muted)] transition-colors">harsh.gulwani@maonline.ai</a>
                </div>
              }
            />
            <ContactCard icon={Phone} label="Phone" value="+91 99621 49035" href="tel:+919962149035" />
            <ContactCard icon={MapPin} label="Studio" value={'No. 45, Pulla Avenue,\nShenoy Nagar, Chennai,\nTamil Nadu, 600030'} />
            <div className="rounded-[22px] border border-[var(--site-border)] p-7 text-[var(--site-fg)]">
              <h3 className="text-[18px] font-semibold mb-2">Prefer a call?</h3>
              <p className="text-[var(--site-muted)] font-light text-[14px] leading-[1.6]">Mention a couple of time windows in your brief and we will send an invite.</p>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}

function Field({ label, id, type = 'text', placeholder, required = true }: { label: string; id: string; type?: string; placeholder: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] text-[var(--site-muted)] mb-2">{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-[var(--site-surface)]/5 border border-[var(--site-border)] px-5 py-3.5 text-[15px] text-[var(--site-fg)] placeholder:text-[var(--site-muted)] focus:outline-none focus:border-[#8B5CF6] transition-colors"
      />
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: React.ReactNode; href?: string }) {
  const body = (
    <div className="rounded-[22px] border border-[var(--site-border)] p-6 flex items-start gap-4 hover:border-[var(--site-border)] transition-colors">
      <div className="w-11 h-11 rounded-[12px] bg-[var(--site-surface)]/5 border border-[var(--site-border)] flex items-center justify-center text-[var(--site-fg)] shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--site-muted)] mb-1 font-bold">{label}</p>
        <div className="text-[15px] whitespace-pre-line leading-[1.6]">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{body}</a> : body;
}
