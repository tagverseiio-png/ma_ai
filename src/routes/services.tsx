import { createFileRoute } from '@tanstack/react-router';
import MaLanding from '@/components/MaLanding';

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Services — Built around what matters | ma.ai' },
      { name: 'description', content: 'From Generative AI and Change Management to Training, Sales and HR — ma.ai brings AI into the places where it creates real value.' },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return <MaLanding />;
}
