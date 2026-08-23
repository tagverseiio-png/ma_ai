import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { PageShell, Section } from '@/components/site/PageShell';
import { fadeInUp } from '@/components/site/SiteChrome';

export const Route = createFileRoute('/cookies')({
  head: () => ({
    meta: [
      { title: 'Cookie Policy — ma.ai' },
      { name: 'description', content: 'How ma.ai uses cookies and similar technologies on its website.' },
      { property: 'og:title', content: 'Cookie Policy — ma.ai' },
      { property: 'og:description', content: 'How ma.ai uses cookies and similar technologies on its website.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <PageShell
      index="09"
      eyebrow="Legal"
      title="Cookie"
      accent="Policy"
      intro="This policy explains what cookies are, how we use them, and the choices available to you."
    >
      <Section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-[900px] mx-auto space-y-12 text-gray-300"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. What are cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, understand how you interact with it, and improve your experience.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. How we use cookies</h2>
            <p className="leading-relaxed">
              We use cookies to keep our site secure, measure performance, remember your preferences, and understand how visitors move through our content. This helps us refine the experience over time.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Types of cookies we use</h2>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-white">Essential cookies:</strong> Required for the site to function and cannot be switched off.</li>
              <li><strong className="text-white">Analytics cookies:</strong> Help us understand how visitors use our site so we can improve it.</li>
              <li><strong className="text-white">Preference cookies:</strong> Remember settings and choices you make during your visit.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Managing cookies</h2>
            <p className="leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but doing so may affect how our site functions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Third-party cookies</h2>
            <p className="leading-relaxed">
              We may allow trusted analytics partners to set cookies on our site. These partners process data according to their own privacy policies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Updates</h2>
            <p className="leading-relaxed">
              We may update this Cookie Policy as our site or practices change. Please review it periodically for the latest information.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500">
              Effective date: {new Date().getFullYear()}. For questions, contact hello@ma.ai.
            </p>
          </div>
        </motion.div>
      </Section>
    </PageShell>
  );
}
