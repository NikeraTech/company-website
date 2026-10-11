export type CaseStudySlug = 'pdf-lab' | 'divine-harvest' | 'indus-mortgages' | 'elevate-estate' | 'ananga-jewels';

export type CaseStudy = {
  slug: CaseStudySlug;
  title: string;
  category: string;
  url: string;
  challenge: string;
  solution: string;
  features?: string[];
  technologies: string[];
  outcome: string;
  description: string;
  logo: string;
  logoBoxClass: string;
  logoImageClass: string;
  accent: string;
  panel: string;
  ctaLabel: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'pdf-lab',
    title: 'PDF-Lab',
    category: 'Privacy-First PDF Platform',
    url: 'https://pdf-lab.com',
    challenge: 'Many users need PDF tools without uploading sensitive documents to unknown third-party services.',
    solution:
      'Nikera developed PDF-Lab as a lightweight, privacy-focused platform that provides common PDF tools through an intuitive interface.',
    features: ['PDF Merge', 'PDF Split', 'PDF Compress', 'PDF Protect', 'PDF Sign', 'PDF Edit', 'Image to PDF'],
    technologies: ['PHP', 'JavaScript', 'PDF.js', 'Cloudflare', 'IONOS'],
    outcome: 'Provides a fast, accessible and privacy-conscious document management experience.',
    description: 'Learn how Nikera Technologies designed and developed PDF-Lab, a privacy-first online PDF platform.',
    logo: '/images/pdf-lab_logo.png',
    logoBoxClass: 'h-20 w-20',
    logoImageClass: 'p-1.5',
    accent: '#ef2b2d',
    panel:
      'radial-gradient(circle at 22% 18%, rgba(255,70,70,0.34), transparent 30%), linear-gradient(135deg, #2a0710 0%, #61111a 52%, #15050a 100%)',
    ctaLabel: 'Visit Live Website',
  },
  {
    slug: 'divine-harvest',
    title: 'Divine Harvest',
    category: 'Mortgage & Protection',
    url: 'https://divineharvest.co.uk',
    challenge: 'Create a modern online presence that builds trust and encourages enquiries.',
    solution: 'Designed and developed a responsive website focused on clarity, accessibility and customer engagement.',
    technologies: ['Responsive Design', 'SEO', 'Lead Generation', 'Business Website'],
    outcome: 'A credible digital presence for a financial services business.',
    description:
      'Learn how Nikera Technologies designed and developed Divine Harvest, a responsive mortgage and protection website.',
    logo: '/images/divine_logo.png',
    logoBoxClass: 'h-20 w-28',
    logoImageClass: 'p-2',
    accent: '#c8b681',
    panel:
      'radial-gradient(circle at 24% 20%, rgba(200,182,129,0.18), transparent 31%), linear-gradient(135deg, #111111 0%, #343434 54%, #0b0b0b 100%)',
    ctaLabel: 'Visit Website',
  },
  {
    slug: 'indus-mortgages',
    title: 'Indus Mortgages',
    category: 'Financial Services',
    url: 'https://indusmortgages.co.uk/',
    challenge: 'Create a professional mortgage website that builds credibility and supports customer enquiries.',
    solution:
      'Designed and developed a responsive website that presents mortgage services clearly and gives visitors a direct path to get in touch.',
    technologies: ['Responsive Design', 'SEO', 'Lead Generation', 'Business Website'],
    outcome: 'A credible digital presence that helps customers understand services and make enquiries with confidence.',
    description:
      'Learn how Nikera Technologies designed and developed Indus Mortgages, a professional mortgage services website.',
    logo: '/images/indus_logo.jpeg',
    logoBoxClass: 'h-20 w-44',
    logoImageClass: 'p-2',
    accent: '#c8b681',
    panel:
      'radial-gradient(circle at 24% 20%, rgba(200,182,129,0.18), transparent 31%), linear-gradient(135deg, #111111 0%, #343434 54%, #0b0b0b 100%)',
    ctaLabel: 'Visit Website',
  },
  {
    slug: 'elevate-estate',
    title: 'Elevate Estate',
    category: 'Property Management',
    url: 'https://elevate-estate.co.uk',
    challenge: 'Build a modern digital presence that reflects professionalism.',
    solution: 'Developed a responsive website focused on services, trust and customer enquiries.',
    technologies: ['Responsive Design', 'SEO', 'Modern Web Development'],
    outcome: 'A professional website that improves online visibility and customer trust.',
    description:
      'Learn how Nikera Technologies created Elevate Estate, a modern property management website focused on trust and enquiries.',
    logo: '/images/elevate_logo_v2.png',
    logoBoxClass: 'h-20 w-44',
    logoImageClass: 'p-2.5',
    accent: '#c4943b',
    panel:
      'radial-gradient(circle at 24% 20%, rgba(196,148,59,0.24), transparent 31%), linear-gradient(135deg, #05090d 0%, #111820 48%, #2d2618 100%)',
    ctaLabel: 'Visit Website',
  },
  {
    slug: 'ananga-jewels',
    title: 'Ananga Jewels',
    category: 'Jewellery Brand',
    url: 'https://anangajewels.com',
    challenge: 'Launch a premium online identity for a growing jewellery business.',
    solution: 'Created a modern brand experience with a responsive website showcasing products and the business identity.',
    technologies: ['Branding', 'Responsive Design', 'E-Commerce'],
    outcome: 'A modern online presence for a growing jewellery brand.',
    description:
      'Learn how Nikera Technologies created Ananga Jewels, a premium online identity for a growing jewellery business.',
    logo: '/images/ananga_logo.png',
    logoBoxClass: 'h-20 w-20',
    logoImageClass: 'p-1.5',
    accent: '#d8b76a',
    panel:
      'radial-gradient(circle at 24% 20%, rgba(216,183,106,0.28), transparent 32%), linear-gradient(135deg, #061f16 0%, #123a29 54%, #1a1206 100%)',
    ctaLabel: 'Visit Website',
  },
];

export function getCaseStudy(slug: CaseStudySlug) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(slug: CaseStudySlug) {
  return caseStudies.filter((study) => study.slug !== slug);
}
