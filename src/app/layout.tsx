import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { siteUrl } from '@/lib/site';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const title = 'Nikera Technologies | Software, AI & Digital Transformation';
const description =
  'Nikera Technologies builds modern software, AI solutions, CRM platforms, websites and business automation tools that help growing businesses transform and scale.';
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const shouldLoadGoogleAnalytics = process.env.NODE_ENV === 'production' && Boolean(googleAnalyticsId);
const keywords = [
  'software development',
  'AI solutions',
  'digital transformation',
  'business automation',
  'CRM systems',
  'web development',
  'UK technology company',
  'small business software',
];
const ogImage = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Nikera Technologies - Innovating for a Digital Future',
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nikera Technologies',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [],
    description:
      'Nikera Technologies helps businesses transform, automate and grow through software, AI and digital solutions.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nikera Technologies',
    url: siteUrl,
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Nikera Technologies',
    images: [ogImage],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {shouldLoadGoogleAnalytics && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <a href="#main" className="skip-link sr-only focus:not-sr-only">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
