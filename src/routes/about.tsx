import { createFileRoute } from '@tanstack/react-router';
import MaLanding from '@/components/MaLanding';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return <MaLanding />;
}
