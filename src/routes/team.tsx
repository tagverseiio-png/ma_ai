import { createFileRoute } from '@tanstack/react-router';
import MaLanding from '@/components/MaLanding';

export const Route = createFileRoute('/team')({
  component: TeamPage,
});

function TeamPage() {
  return <MaLanding />;
}
