import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyPage from '@/components/sections/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const study = getCaseStudy('ananga-jewels');

export const metadata: Metadata = {
  title: 'Ananga Jewels Case Study | Nikera Technologies',
  description:
    'Learn how Nikera Technologies created Ananga Jewels, a premium online identity for a growing jewellery business.',
};

export default function AnangaJewelsCaseStudyPage() {
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
