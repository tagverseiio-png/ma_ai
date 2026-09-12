import { createFileRoute } from '@tanstack/react-router';
import MaLanding from '@/components/MaLanding';

export const Route = createFileRoute('/why')({
  component: WhyPage,
});

function WhyPage() {
  return <MaLanding />;
}
