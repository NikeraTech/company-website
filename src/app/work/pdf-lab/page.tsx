import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyPage from '@/components/sections/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const study = getCaseStudy('pdf-lab');

export const metadata: Metadata = {
  title: 'PDF-Lab Case Study | Nikera Technologies',
  description: 'Learn how Nikera Technologies designed and developed PDF-Lab, a privacy-first online PDF platform.',
};

export default function PdfLabCaseStudyPage() {
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
