import React from 'react';
import ServicesSection from '../components/ServicesSection';

interface ServicesPageProps {
  onQuoteClick: () => void;
}

export default function ServicesPage({ onQuoteClick }: ServicesPageProps) {
  return (
    <main className="pt-8">
      <ServicesSection onQuoteClick={onQuoteClick} />
    </main>
  );
}