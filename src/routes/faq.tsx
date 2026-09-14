import { createFileRoute } from '@tanstack/react-router';
import MaLanding from '@/components/MaLanding';

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { title: 'FAQs — ma.ai' },
      { name: 'description', content: 'Frequently asked questions about ma.ai, our services, and how we work with clients.' },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return <MaLanding />;
}
