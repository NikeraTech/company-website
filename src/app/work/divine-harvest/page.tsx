import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyPage from '@/components/sections/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const study = getCaseStudy('divine-harvest');

export const metadata: Metadata = {
  title: 'Divine Harvest Case Study | Nikera Technologies',
  description:
    'Learn how Nikera Technologies designed and developed Divine Harvest, a responsive mortgage and protection website.',
};

export default function DivineHarvestCaseStudyPage() {
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
