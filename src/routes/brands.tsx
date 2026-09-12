import { createFileRoute } from '@tanstack/react-router';
import MaLanding from '@/components/MaLanding';

export const Route = createFileRoute('/brands')({
  component: BrandsPage,
});

function BrandsPage() {
  return <MaLanding />;
}
