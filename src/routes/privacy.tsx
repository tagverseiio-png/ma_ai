import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { PageShell, Section } from '@/components/site/PageShell';
import { fadeInUp } from '@/components/site/SiteChrome';

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy — ma.ai' },
      { name: 'description', content: 'How ma.ai collects, uses, and protects your personal information.' },
      { property: 'og:title', content: 'Privacy Policy — ma.ai' },
      { property: 'og:description', content: 'How ma.ai collects, uses, and protects your personal information.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell
      index="07"
      eyebrow="Legal"
      title="Privacy"
      accent="Policy"
      intro="We respect your privacy and are committed to being transparent about how we handle information."
    >
      <Section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-[900px] mx-auto space-y-12 text-gray-600"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">1. Information we collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us — such as your name, email address, and company details — when you fill out contact forms, subscribe to updates, or apply for roles. We also collect standard technical data (IP address, browser type, device information) through cookies and analytics tools to improve your experience.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">2. How we use information</h2>
            <p className="leading-relaxed">
              We use the information we collect to respond to inquiries, deliver services, send updates you have requested, improve our website, and comply with legal obligations. We do not sell personal information to third parties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">3. Cookies and tracking</h2>
            <p className="leading-relaxed">
              We use cookies and similar technologies to understand how visitors use our site, remember preferences, and provide a smoother experience. You can control cookies through your browser settings.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">4. Data security</h2>
            <p className="leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">5. Third-party services</h2>
            <p className="leading-relaxed">
              We may use trusted third-party service providers (such as hosting, analytics, and email platforms) to operate our business. These providers only access information as needed to perform their services and are contractually bound to protect it.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">6. Your rights</h2>
            <p className="leading-relaxed">
              Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal information. To exercise these rights, contact us at hello@ma.ai.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">7. Updates to this policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date. We encourage you to review it periodically.
            </p>
          </div>

          <div className="pt-8 border-t border-black/10">
            <p className="text-sm text-gray-700">
              Effective date: {new Date().getFullYear()}. For questions about this policy, email hello@ma.ai.
            </p>
          </div>
        </motion.div>
      </Section>
    </PageShell>
  );
}
