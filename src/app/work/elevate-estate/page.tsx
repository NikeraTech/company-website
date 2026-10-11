import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyPage from '@/components/sections/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const study = getCaseStudy('elevate-estate');

export const metadata: Metadata = {
  title: 'Elevate Estate Case Study | Nikera Technologies',
  description:
    'Learn how Nikera Technologies created Elevate Estate, a modern property management website focused on trust and enquiries.',
};

export default function ElevateEstateCaseStudyPage() {
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
