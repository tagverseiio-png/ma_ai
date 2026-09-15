import { createFileRoute } from '@tanstack/react-router';
import OurWorksPage from '@/components/site/OurWorksPage';

export const Route = createFileRoute('/ourworks')({
  component: OurWorksPage,
});
