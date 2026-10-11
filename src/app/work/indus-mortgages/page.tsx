import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyPage from '@/components/sections/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const study = getCaseStudy('indus-mortgages');

export const metadata: Metadata = {
  title: 'Indus Mortgages Case Study | Nikera Technologies',
  description:
    'Learn how Nikera Technologies designed and developed Indus Mortgages, a professional mortgage services website.',
};

export default function IndusMortgagesCaseStudyPage() {
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
