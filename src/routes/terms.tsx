import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { PageShell, Section } from '@/components/site/PageShell';
import { fadeInUp } from '@/components/site/SiteChrome';

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms of Service — ma.ai' },
      { name: 'description', content: 'The terms and conditions governing use of the ma.ai website and services.' },
      { property: 'og:title', content: 'Terms of Service — ma.ai' },
      { property: 'og:description', content: 'The terms and conditions governing use of the ma.ai website and services.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell
      index="08"
      eyebrow="Legal"
      title="Terms of"
      accent="Service"
      intro="Please read these terms carefully before using our website or engaging our services."
    >
      <Section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-[900px] mx-auto space-y-12 text-gray-600"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">1. Acceptance of terms</h2>
            <p className="leading-relaxed">
              By accessing or using the ma.ai website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site or services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">2. Services</h2>
            <p className="leading-relaxed">
              ma.ai provides strategy, design, engineering, and AI-related services. Specific deliverables, timelines, and fees are defined in separate agreements or statements of work with clients.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">3. Intellectual property</h2>
            <p className="leading-relaxed">
              All content on this website — including text, graphics, logos, images, and code — is the property of ma.ai or its licensors and is protected by intellectual property laws. Client-owned materials remain the property of the client, and deliverables are governed by individual project agreements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">4. Use of the site</h2>
            <p className="leading-relaxed">
              You agree to use our site only for lawful purposes. You may not attempt to disrupt, damage, or gain unauthorized access to our systems or interfere with other users.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">5. Limitation of liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, ma.ai shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the site or services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">6. Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to suspend or terminate access to our site or services at our discretion, without notice, for conduct that violates these terms or is harmful to us or others.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">7. Governing law</h2>
            <p className="leading-relaxed">
              These terms are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111111]">8. Changes to terms</h2>
            <p className="leading-relaxed">
              We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.
            </p>
          </div>

          <div className="pt-8 border-t border-black/10">
            <p className="text-sm text-gray-700">
              Effective date: {new Date().getFullYear()}. For questions, contact hello@ma.ai.
            </p>
          </div>
        </motion.div>
      </Section>
    </PageShell>
  );
}
