import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChooseNikera from '@/components/sections/WhyChooseNikera';
import TrustSection from '@/components/sections/TrustSection';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <WhyChooseNikera />
        <TrustSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
