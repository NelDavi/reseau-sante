import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
// import ServicesSection from '../components/ServicesSection';
// import PartnersSection from '../components/PartnersSection';
// import NewsSection from '../components/NewsSection';
// import EnterpriseSection from '../components/EnterpriseSection';
import FAQSection from '../components/FAQSection';
// import ContactSection from '../components/ContactSection';

interface HomePageProps {
  onQuoteClick: () => void;
}

export default function HomePage({ onQuoteClick }: HomePageProps) {
  return (
    <main>
      <HeroSection onQuoteClick={onQuoteClick} />
      <AboutSection />
      {/* <ServicesSection onQuoteClick={onQuoteClick} /> */}
      {/* <PartnersSection /> */}
      {/* <NewsSection /> */}
      {/* <EnterpriseSection onQuoteClick={onQuoteClick} /> */}
      <FAQSection />
      {/* <ContactSection /> */}
    </main>
  );
}